import React from 'react';
import { ComponentProps } from 'unbounce-smart-builder-sdk-types';


export type DataStructure = { whatsappId: string };

// Whats app code. Commented out for now
export default ({ data }: ComponentProps<DataStructure>) => {

  return (
    <>
      <script type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
          function whatsappClick() {window.open("https://web.whatsapp.com/send?phone=+${data.whatsappId}");}
          function animateChats(obj) {
            document.getElementById("main-chat-svg").innerHTML = "<svg id='main-chat-svg' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='-9 -9 41 41' style='width: 100%; height: 100%; fill: rgb(255, 255, 255); stroke: none; transition: all .5s'><path d=' M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path></svg>"
            document.getElementById("main-chat-div").removeAttribute('onmouseover')
            // var whatsappDiv = document.createElement("div");
            // whatsappDiv.style.width = "60px"
            // whatsappDiv.style.height = "60px"
            // whatsappDiv.style.position = "relative"
            // whatsappDiv.style.top = "-145px"
            // whatsappDiv.style.background = "#4CC147"
            // whatsappDiv.style.borderRadius = "50%"
            // whatsappDiv.style.opacity = "0"
            // whatsappDiv.style.transition = "opacity 0.5s ease-in-out;"
            // whatsappDiv.style.boxShadow = "rgb(0 0 0 /45%) 0px 0px 10px"
            var whatsappChat = document.getElementById("whatsappchat-div")
            //whatsappChat.style.transition = "all 2s"
            whatsappChat.style.opacity = "1"
            whatsappChat.style.top = "-135px"
            whatsappChat.onclick= function(event) { window.open("https://web.whatsapp.com/send?phone=+${data.whatsappId}");}
          }`
        }}
      />
      <div id = 'chat-test'
        dangerouslySetInnerHTML={{
          __html: `<div id="main-chat-div" style="width: 60px; height: 60px; background: #E74338; border-radius:50%;position:fixed;bottom:15px;right:30px;z-index:1; box-shadow: rgb(0 0 0 /45%) 0px 0px 10px;"  onmouseover="animateChats(this)">
            <div id="main-chat-svg">
              <svg version="1.1" width="60%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 512 512" style="top: 13px;left: 12px;position: relative;">
                <g>
                  <path fill="#FFFFFF" d="m501,328.1c0-68.7-60.2-126.4-140.6-140.1 3.4-11.3 5.1-22.5 5.1-33.8 0-78.8-79.3-143.2-177.3-143.2s-177.2,64.4-177.2,143.2c0,35.8 15.6,68.5 44.8,95.1l-32.3,77.7 98-39.9c9.5,2.9 19.5,5.2 30,7.1-3.3,10.9-5,22.2-5,33.8 0,78.8 79.2,143.2 177.2,143.2 22.9,0 44.8-3.1 66.7-10.2l98,39.9-32.3-77.7c29.3-26.5 44.9-60.3 44.9-95.1zm-379.5-62.4l-59.4,23.5 18.8-45c0,0-49-33.1-49-89 0-67.5 69.9-122.8 156.4-122.8s156.4,55.2 158.5,121.7c0,11.1-2,21.3-5.1,31.4-5.9-0.5-11.8-0.7-17.8-0.7-74.6,0-138.2,37.3-164.4,89.8-12-1-38-8.9-38-8.9zm268.9,174c-19.9,8-43.7,12.2-65.6,12.2-86.5,0-156.4-55.2-156.4-122.8 0-67.5 69.9-122.8 156.4-122.8s156.4,55.2 156.4,122.8c0,55.7-49,89-49,89l18.8,45-60.6-23.4z"/>
                </g>
              </svg>
            </div>

            <div id="whatsappchat-div" style = "width: 60px; height: 60px; background: #4CC147; opacity:0; border-radius:50%; position:relative; top: -125px; box-shadow: rgb(0 0 0 /45%) 0px 0px 10px; transition: all .5s">
               <svg viewBox="-2 -1 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="width: 90%; height: 90%; fill: rgb(255, 255, 255); stroke: none;"><path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"></path></svg>
            </div>
           
          </div>`
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

