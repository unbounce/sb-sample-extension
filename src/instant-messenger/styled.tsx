import styled from 'styled-components';

export const CloseButton = styled.button`
  align-items: center;
  background: #252525;
  border: none;
  color: #fff;
  display: flex;
  font-size: 30px;
  height: 50px;
  justify-content: center;
  line-height: 30px;
  padding: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 50px;
`;

export const Modal = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: center;
  left: 50%;
  padding: 30px;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  z-index: 23;
`;

export const Overlay = styled.div`
  background: #000;
  bottom: 0;
  left: 0;
  opacity: 0.3;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 22;
`;

export const FloatingBubble = styled.div`
  position:fixed;
  bottom:15px;
  right:3%;
  z-index:1;
`;

export const WhatsAppButton = styled.div`
  width: 60px;
  height: 60px;
  background: #4CC147;
  opacity:0; 
  border-radius:50%; 
  position:absolute; 
  top:0px; 
  right: 0px; 
  z-index:1; 
  box-shadow: rgb(0 0 0 /45%) 0px 0px 10px; 
  transition: all .25s; 
  transform: scale(.7)
`;

export const TelegramButton = styled.div`
  width: 60px;
  height: 60px;
  background: #0189CB;
  opacity:0;
  border-radius:50%;
  position:absolute;
  top: 0px;
  right: 0px;
  z-index:1;
  box-shadow: rgb(0 0 0 /45%) 0px 0px 10px;
  transition: all .25s;
  transform: scale(.7);
`;

export const FloatingChatBubble = styled.div`
  overflow: hidden;
  position:relative;
  bottom: 0px;
  z-index:2;
  background: #0B33FF;
  border-radius:25px;
  box-shadow: rgb(0 0 0 /35%) 0px 2px 2px;
  transition: all .15s;
`;

export const BubbleIcon = styled.span`
  position:relative;
  float: left;
  padding-left: 20px;
  padding-top: 7px;
`;

export const BubbleText = styled.span`
  position:relative;
  padding-left: 11px;
  padding-right: 11px;
  top: 12px;
  right: 3px;
  color: #ffffff;
  font-weight: 600;
`;
