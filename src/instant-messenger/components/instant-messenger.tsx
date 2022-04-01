import React from 'react';
import { ComponentProps } from 'unbounce-smart-builder-sdk-types';
import { FloatingBubble, WhatsAppButton, TelegramButton, FloatingChatBubble, BubbleIcon, BubbleText} from '../styled';


export type DataStructure = { whatsappId: string, telegramId: string, chatText: string, buttonColorHex: string, buttonTextColorHex: string };

export default ({ data }: ComponentProps<DataStructure>) => {

  // whatsappNumber should only contains numbers and a plus sign
  var whatsappNumber = data.whatsappId.replace(/[^0-9+]/g, '');

  // telegramNumber should only contains alphanumeric characters '+' or '_'
  var telegramNumber = data.telegramId.replace(/[^a-zA-Z0-9+_]/g, '');
  
  // Telegram deep link requires the number starts with a '+'. Add one if it doesn't exist
  if (telegramNumber && !telegramNumber.startsWith("+")) { telegramNumber = '+'+telegramNumber}

  var buttonText = data.chatText;

  // Default values for button color/text color
  var buttonColor = "#0B33FF";
  var buttonTextColor = "#ffffff";

  // If entered values are Hex codes then assign
  if (/^#([0-9A-F]{3}){1,2}$/i.test(data.buttonColorHex)) {buttonColor = data.buttonColorHex}
  if (/^#([0-9A-F]{3}){1,2}$/i.test(data.buttonTextColorHex)) { buttonTextColor = data.buttonTextColorHex }

  return (
    <>
      <div id='chat-test'>
        <FloatingBubble>
          
          <WhatsAppButton id="whatsappchat-div" dangerouslySetInnerHTML={{
            __html: ` 
               <svg viewBox="-2 -1 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="width: 90%; height: 90%; fill: rgb(255, 255, 255); stroke: none;"><path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"></path></svg>
            `}}
          />
          <TelegramButton id="telegram-div" dangerouslySetInnerHTML={{
            __html: ` 
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="width: 100%; height: 100%; fill: rgb(255, 255, 255); stroke: none;"><path d="M15.02 20.814l9.31-12.48L9.554 17.24l1.92 6.42c.225.63.114.88.767.88l.344-5.22 2.436 1.494z" opacity=".6"></path><path d="M12.24 24.54c.504 0 .727-.234 1.008-.51l2.687-2.655-3.35-2.054-.344 5.22z" opacity=".3"></path><path d="M12.583 19.322l8.12 6.095c.926.52 1.595.25 1.826-.874l3.304-15.825c.338-1.378-.517-2.003-1.403-1.594L5.024 14.727c-1.325.54-1.317 1.29-.24 1.625l4.98 1.58 11.53-7.39c.543-.336 1.043-.156.633.214"></path></svg>
            `}}
          />
          <FloatingChatBubble id="floating-chat-bubble">
            <BubbleIcon dangerouslySetInnerHTML={{
              __html: `
                <svg id="main-chat-closed" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 566.6 467.3" style="enable-background:new 0 0 566.6 467.3; width: 40px;" xml:space="preserve">
                  <style type="text/css">
                    .st0{fill:${buttonTextColor};}
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
                <svg id='main-chat-open' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='-9 -9 41 41' style='width: 50px; top: -3px; fill: ${buttonTextColor}; opacity:0; position:absolute; left: 5px; transition: all .25s'><path d=' M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path></svg>
              `}}
            />
            <BubbleText id="button-text" >{buttonText}</BubbleText>
          </FloatingChatBubble>
        </FloatingBubble>
      </div>

      <script type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
          var expanded = 0;

           // If no number was provided for both whatsapp/Intercom. Do not show any chat UI
          if(!atLeastOneMessengerPresent()) { document.getElementById("chat-test").outerHTML = "";}

          else{ 
            setColorsFromSettings()
            setButtonListeners();
          }
          
          function setColorsFromSettings() {
            document.getElementById("floating-chat-bubble").style.background = "${buttonColor}";
            document.getElementById("button-text").style.color = "${buttonTextColor}";
          }

          function setButtonListeners() {
            var whatsappButton = document.getElementById("whatsappchat-div");
            whatsappButton.onmouseover= function() {animateBubbleIn(whatsappButton)};
            whatsappButton.onmouseleave= function() {animateBubbleOut(whatsappButton)};

            var telegramButton = document.getElementById("telegram-div");
            telegramButton.onmouseover= function() {animateBubbleIn(telegramButton)};
            telegramButton.onmouseleave= function() {animateBubbleOut(telegramButton)};

            var floatingChatBubble = document.getElementById("floating-chat-bubble");
            floatingChatBubble.onmouseover= function() {animateBubbleIn(floatingChatBubble)};
            floatingChatBubble.onmouseleave= function() {animateBubbleOut(floatingChatBubble)};
            floatingChatBubble.onclick = function() {animateChats()};
          }
          
          
          function animateChats() {
            if (expanded == 0) {
                expanded = 1;
                transitionFloatingButtonToOpen();

              if(showWhatsappChat()) {
                whatsappButtonAppear();
              }
              
              if(showTelegramChat()) {
                telegramButtonAppear();
              }
            }
            else {
              expanded = 0
              
              whatsappButtonDisappear();
              telegramButtonDisappear();
              transitionFloatingButtonToClosed();
            }
          }
          
          function animateBubbleIn(obj) {
            obj.style.boxShadow = "rgb(0 0 0 /70%) 0px 0px 3px"
            if (expanded == 0 || (obj.id == "whatsappchat-div" || obj.id == "telegram-div")) {obj.style.transform = "scale(1.05)"}
          }
          function animateBubbleOut(obj) {
            obj.style.boxShadow = "rgb(0 0 0 /35%) 0px 2px 2px"
            if (expanded == 0 || (obj.id == "whatsappchat-div" || obj.id == "telegram-div")) {obj.style.transform = "scale(1)"}
          }
          
          function atLeastOneMessengerPresent(){
            if("${whatsappNumber}" || "${telegramNumber}"){ return true}
          }

          function showWhatsappChat(){
            if("${whatsappNumber}"){return true}
          }

          function showTelegramChat(){
            if("${telegramNumber}"){return true}
          }
          
          function transitionFloatingButtonToOpen(){
            document.getElementById("floating-chat-bubble").style.transform = "scale(.7)"
            document.getElementById("button-text").style.display = "none"
            document.getElementById("main-chat-closed").style.opacity = 0;
            document.getElementById("main-chat-open").style.opacity = 1;
          }
          
          function whatsappButtonAppear(){
            var whatsappChat = document.getElementById("whatsappchat-div");
            whatsappChat.style.opacity = "1";
            whatsappChat.style.top = "-75px";
            whatsappChat.style.transform = "scale(1)";

            // add onclick to the whatsapp button. 
            whatsappChat.onclick= function(event) { window.open("https://wa.me/${whatsappNumber}"); animateChats();}
          }

          function whatsappButtonDisappear(){
            var whatsappChat = document.getElementById("whatsappchat-div")
            whatsappChat.style.opacity = "0"
            whatsappChat.style.top = "0px"
            whatsappChat.style.transform = "scale(.7)"

            // Remove the onclick
            whatsappChat.onclick = function() {return false;}
          }
          
          function telegramButtonAppear(){
            var telegramChat = document.getElementById("telegram-div");
            telegramChat.style.opacity = "1";
            telegramChat.style.transform = "scale(1)";

            // if whatsapp is present, make telegram chat go higher
            if(showWhatsappChat()) {
              telegramChat.style.top = "-150px";
            }
            else {
              telegramChat.style.top = "-75px";
            }

            // add onclick to the telegram button. 
            telegramChat.onclick= function(event) { window.open("https://t.me/${telegramNumber}"); animateChats();}
          }
          
          function telegramButtonDisappear(){
            var telegramChat = document.getElementById("telegram-div")
            telegramChat.style.opacity = "0"
            telegramChat.style.top = "0px"
            telegramChat.style.transform = "scale(.7)"

            // Remove onClick
            telegramChat.onclick = function() {return false;}
          }
          
          function transitionFloatingButtonToClosed(){
            document.getElementById("floating-chat-bubble").style.transform = "scale(1)"
            document.getElementById("button-text").style.display = "flex"
            document.getElementById("main-chat-closed").style.opacity = 1;
            document.getElementById("main-chat-open").style.opacity = 0;
          }
          `
        }}
      />
    </>
  );
};
