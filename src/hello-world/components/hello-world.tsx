import React from 'react';
import { ComponentProps } from 'unbounce-smart-builder-sdk-types';


export type DataStructure = { whatsappId: string };

export default ({ data, mode }: ComponentProps<DataStructure>) => {
  console.log(data)

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `alert('${data.whatsappId}')`,
        }}
      />
    </>
  );
};

// Whats app code. Commented out for now
// export default ({ data }: ComponentProps<DataStructure>) => {

//   return (
//     <>
//       <script type="text/javascript"
//         dangerouslySetInnerHTML={{
//           __html: `
//           function whatsappClick() {debugger; window.open("https://web.whatsapp.com/send?phone=+${data.id}");}`
//         }}
//       />
//       <div id = 'chat-test'
//         dangerouslySetInnerHTML={{
//           __html: `<div style="background:url('https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png');background-size:auto;width:100px;height:100px;position:fixed;bottom:0;right:0;background-size:100px 100px;z-index:1" onclick="whatsappClick()"></div>`
//         }}
//       />
//     </>
//   );
// };
