import React from 'react';
import { ComponentProps } from 'unbounce-smart-builder-sdk-types';


export type DataStructure = { whatsappId: string, telegramId: string, buttonColorHex: string };

// Whats app code. Commented out for now
export default ({ data }: ComponentProps<DataStructure>) => {
  var whatsappNumber = data.whatsappId.replace(/\D/g, '');
  var telegramNumber = data.telegramId.replace(/[^a-zA-Z0-9+_]/g, '');
  var buttonColor = "#E74338";
  if (/^#([0-9A-F]{3}){1,2}$/i.test(data.buttonColorHex)) {
    buttonColor = data.buttonColorHex
  }

  return (
    <>
      <div id='chat-test'
        dangerouslySetInnerHTML={{
          __html: `<div id="main-chat-div" style="width: 60px; height: 60px; background: ${buttonColor}; border-radius:50%;position:fixed;bottom:15px;right:3%;z-index:1; box-shadow: rgb(0 0 0 /35%) 0px 2px 2px; transition: all .15s" onclick="animateChats()" onmouseover= "animateBubbleIn(this)" onmouseleave="animateBubbleOut(this)">
              <div id="main-chat-svg">
              <svg id="main-chat-closed" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 566.6 467.3" style="enable-background:new 0 0 566.6 467.3; width: 70%; position:absolute; left: 15%; top: 25%" xml:space="preserve">
                <style type="text/css">
                  .st0{fill:#ffffff;}
                </style>
                <g>
                  <path class="st0" d="M544.5,119.9L544.5,119.9c-5.6-5.6-13-8.8-21-8.8H389.3V42c0-16.2-13.2-29.3-29.4-29.3h-317
                    c-16.3,0-29.5,13.1-29.5,29.3v220.7c0,16.2,13.2,29.3,29.4,29.3h26.7l9.5,57.8c0.4,2.7,2.3,4.9,4.9,5.9c0.9,0.3,1.8,0.4,2.6,0.4
                    c1.8,0,3.5-0.7,4.9-1.8l75.5-62.9h6.7v67.8c0,16.4,13.3,29.8,29.6,29.8h194.9l76.9,63.8c1.4,1.2,3.2,1.8,4.9,1.8
                    c0.9,0,1.9-0.1,2.7-0.4c2.6-1,4.4-3.3,4.8-5.9l9.4-59.1h26.6c16.4,0,29.6-13.3,29.6-29.8V140.9
                    C553.3,132.9,550.1,125.5,544.5,119.9z M164.2,276.2c-1.8,0-3.5,0.7-4.9,1.8L92,334.1l-8.4-51c-0.7-3.7-3.8-6.5-7.5-6.5H42.9
                    c-7.8,0-14.1-6.2-14.1-14V42c0-7.7,6.3-14,14.1-14h317c7.8,0,14.1,6.2,14.1,14v220.2c0,4.8-2.5,9.1-6.2,11.6
                    c-2.3,1.5-4.9,2.4-7.9,2.4L164.2,276.2z M523.6,373.8h-33.6c-4,0-7.3,3.1-7.7,7.1l-0.3,4.8l-7.4,46.8l-68.8-57
                    c-1.4-1.1-3.1-1.8-4.9-1.8H203.3c-7.9,0-14.3-6.5-14.3-14.4v-67.8h171c6.1,0,11.7-1.9,16.4-5c7.9-5.2,13-14.2,13-24.3V126.5h134.2
                    c3.8,0,7.4,1.5,10.2,4.3c2.7,2.7,4.3,6.3,4.3,10.2l0,218.4C538,367.3,531.5,373.8,523.6,373.8z"/>
                  <circle class="st0" cx="126.5" cy="149.3" r="22.9"/>
                  <circle class="st0" cx="195.9" cy="149.3" r="22.9"/>
                  <circle class="st0" cx="265.4" cy="149.3" r="22.9"/>
                </g>
              </svg>  
            <!--<svg id="main-chat-closed" viewBox="0 -256 1850 1850" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="width: 100%; height: 100%; fill: rgb(255, 255, 255); stroke: none; transition: all .25s"><path transform="matrix(0.71186441,0,0,-0.71186441,288.54237,1093.9482)" d="M 704,1152 Q 551,1152 418,1100 285,1048 206.5,959 128,870 128,768 q 0,-82 53,-158 53,-76 149,-132 l 97,-56 -35,-84 q 34,20 62,39 l 44,31 53,-10 q 78,-14 153,-14 153,0 286,52 133,52 211.5,141 78.5,89 78.5,191 0,102 -78.5,191 -78.5,89 -211.5,141 -133,52 -286,52 z m 0,128 q 191,0 353.5,-68.5 Q 1220,1143 1314,1025 1408,907 1408,768 1408,629 1314,511 1220,393 1057.5,324.5 895,256 704,256 618,256 528,272 404,184 250,144 214,135 164,128 h -3 q -11,0 -20.5,8 -9.5,8 -11.5,21 -1,3 -1,6.5 0,3.5 0.5,6.5 0.5,3 2,6 l 2.5,5 q 0,0 3.5,5.5 3.5,5.5 4,5 0.5,-0.5 4.5,5 4,5.5 4,4.5 5,6 23,25 18,19 26,29.5 8,10.5 22.5,29 Q 235,303 245.5,323 256,343 266,367 142,439 71,544 0,649 0,768 0,907 94,1025 188,1143 350.5,1211.5 513,1280 704,1280 Z M 1526,111 q 10,-24 20.5,-44 10.5,-20 25,-38.5 14.5,-18.5 22.5,-29 8,-10.5 26,-29.5 18,-19 23,-25 1,-1 4,-4.5 3,-3.5 4.5,-5 1.5,-1.5 4,-5 2.5,-3.5 3.5,-5.5 l 2.5,-5 q 0,0 2,-6 2,-6 0.5,-6.5 -1.5,-0.5 -1,-6.5 -3,-14 -13,-22 -10,-8 -22,-7 -50,7 -86,16 Q 1388,-72 1264,16 1174,0 1088,0 817,0 616,132 q 58,-4 88,-4 161,0 309,45 148,45 264,129 125,92 192,212 67,120 67,254 0,77 -23,152 129,-71 204,-178 75,-107 75,-230 0,-120 -71,-224.5 Q 1650,183 1526,111 Z"></path></svg>-->
              <svg id='main-chat-open' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='-9 -9 41 41' style='width: 100%; height: 100%; fill: rgb(255, 255, 255); stroke: none; opacity:0; position:absolute; left -1px; transition: all .25s'><path d=' M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path></svg>
            </div>

            <div id="whatsappchat-div" style = "width: 60px; height: 60px; background: #4CC147; opacity:0; border-radius:50%; position:relative; top:0px; z-index:2; box-shadow: rgb(0 0 0 /45%) 0px 0px 10px; transition: all .25s" onmouseover= "animateBubbleIn(this)" onmouseleave="animateBubbleOut(this)">
               <svg viewBox="-2 -1 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="width: 90%; height: 90%; fill: rgb(255, 255, 255); stroke: none;"><path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"></path></svg>
            </div>

            <div id="telegram-div" style = "width: 60px; height: 60px; background: #0189CB; opacity:0; border-radius:50%; position:relative; top: -60px; z-index:2; box-shadow: rgb(0 0 0 /45%) 0px 0px 10px; transition: all .25s" onmouseover= "animateBubbleIn(this)" onmouseleave="animateBubbleOut(this)">
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="width: 100%; height: 100%; fill: rgb(255, 255, 255); stroke: none;"><path d="M15.02 20.814l9.31-12.48L9.554 17.24l1.92 6.42c.225.63.114.88.767.88l.344-5.22 2.436 1.494z" opacity=".6"></path><path d="M12.24 24.54c.504 0 .727-.234 1.008-.51l2.687-2.655-3.35-2.054-.344 5.22z" opacity=".3"></path><path d="M12.583 19.322l8.12 6.095c.926.52 1.595.25 1.826-.874l3.304-15.825c.338-1.378-.517-2.003-1.403-1.594L5.024 14.727c-1.325.54-1.317 1.29-.24 1.625l4.98 1.58 11.53-7.39c.543-.336 1.043-.156.633.214"></path></svg>
            </div>
           
          </div>`
        }}
      />
      <script type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
          var open = 0;
          if(!"${whatsappNumber}" && !"${telegramNumber}") {
            document.getElementById("chat-test").outerHTML = "";
          }
          function animateChats() {
            document.getElementById("main-chat-div").style.transform = "scale(1)"
            var whatsappChat = document.getElementById("whatsappchat-div")
            if (open == 0) {
                open = 1;
                //document.getElementById("main-chat-svg").innerHTML = "<svg id='main-chat-svg' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='-9 -9 41 41' style='width: 100%; height: 100%; fill: rgb(255, 255, 255); stroke: none; transition: all .5s'><path d=' M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path></svg>"
                document.getElementById("main-chat-closed").style.opacity = 0;
                document.getElementById("main-chat-open").style.opacity = 1;

              if("${whatsappNumber}") {
                var whatsappChat = document.getElementById("whatsappchat-div")
                whatsappChat.style.opacity = "1"
                whatsappChat.style.top = "-75px"
                whatsappChat.onclick= function(event) { window.open("https://wa.me/${whatsappNumber}");}
              }
              
              if("${telegramNumber}") {
                var telegramChat = document.getElementById("telegram-div")
                telegramChat.style.opacity = "1"
                if("${whatsappNumber}") {
                  telegramChat.style.top = "-205px"
                }
                else {
                  telegramChat.style.top = "-135px"
                }
                telegramChat.onclick= function(event) { window.open("https://t.me/${telegramNumber}");}
              }
            }
            else {
              open = 0
              //document.getElementById("main-chat-svg").innerHTML = "<svg viewBox='0 -256 1850 1850' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='width: 100%; height: 100%; fill: rgb(255, 255, 255); stroke: none;'><path transform='matrix(0.71186441,0,0,-0.71186441,288.54237,1093.9482)' d='M 704,1152 Q 551,1152 418,1100 285,1048 206.5,959 128,870 128,768 q 0,-82 53,-158 53,-76 149,-132 l 97,-56 -35,-84 q 34,20 62,39 l 44,31 53,-10 q 78,-14 153,-14 153,0 286,52 133,52 211.5,141 78.5,89 78.5,191 0,102 -78.5,191 -78.5,89 -211.5,141 -133,52 -286,52 z m 0,128 q 191,0 353.5,-68.5 Q 1220,1143 1314,1025 1408,907 1408,768 1408,629 1314,511 1220,393 1057.5,324.5 895,256 704,256 618,256 528,272 404,184 250,144 214,135 164,128 h -3 q -11,0 -20.5,8 -9.5,8 -11.5,21 -1,3 -1,6.5 0,3.5 0.5,6.5 0.5,3 2,6 l 2.5,5 q 0,0 3.5,5.5 3.5,5.5 4,5 0.5,-0.5 4.5,5 4,5.5 4,4.5 5,6 23,25 18,19 26,29.5 8,10.5 22.5,29 Q 235,303 245.5,323 256,343 266,367 142,439 71,544 0,649 0,768 0,907 94,1025 188,1143 350.5,1211.5 513,1280 704,1280 Z M 1526,111 q 10,-24 20.5,-44 10.5,-20 25,-38.5 14.5,-18.5 22.5,-29 8,-10.5 26,-29.5 18,-19 23,-25 1,-1 4,-4.5 3,-3.5 4.5,-5 1.5,-1.5 4,-5 2.5,-3.5 3.5,-5.5 l 2.5,-5 q 0,0 2,-6 2,-6 0.5,-6.5 -1.5,-0.5 -1,-6.5 -3,-14 -13,-22 -10,-8 -22,-7 -50,7 -86,16 Q 1388,-72 1264,16 1174,0 1088,0 817,0 616,132 q 58,-4 88,-4 161,0 309,45 148,45 264,129 125,92 192,212 67,120 67,254 0,77 -23,152 129,-71 204,-178 75,-107 75,-230 0,-120 -71,-224.5 Q 1650,183 1526,111 Z'></path></svg>"
              document.getElementById("main-chat-closed").style.opacity = 1;
              document.getElementById("main-chat-open").style.opacity = 0;
              
              var whatsappChat = document.getElementById("whatsappchat-div")
              whatsappChat.style.opacity = "0"
              whatsappChat.style.top = "0px"
              whatsappChat.onclick = function() {return false;}
              
              var telegramChat = document.getElementById("telegram-div")
              telegramChat.style.opacity = "0"
              telegramChat.style.top = "-60px"
              telegramChat.onclick = function() {return false;}
              /// ### FIGURE OUT REMOVE ATRRIBUTE 
            }

          }
          
          function animateBubbleIn(obj) {
            obj.style.boxShadow = "rgb(0 0 0 /70%) 0px 0px 3px"
            if (open == 0 || (obj.id == "whatsappchat-div" || obj.id == "telegram-div")) {obj.style.transform = "scale(1.05)"}
          }
          function animateBubbleOut(obj) {
            obj.style.boxShadow = "rgb(0 0 0 /35%) 0px 2px 2px"
            obj.style.transform = "scale(1)"
          }`
        }}
      />
    </>
  );
};



// export default ({ data, mode }: ComponentProps<DataStructure>) => {
//   console.log(data)

//   return (
//     <>
//       <script
//         dangerouslySetInnerHTML={{
//           __html: `alert('${data.}')`,
//         }}
//       />
//     </>
//   );
// };


// width: 60px;
// height: 60px;
// background: #E74338;
// border - radius: 50 %;
// position: fixed;
// bottom: 15px;
// right: 30px;
// z - index: 1;
// box-shadow: rgb(0 0 0 / 45 %) 0px 0px 10px;

