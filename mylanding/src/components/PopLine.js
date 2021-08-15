import React from "react";
import Close from "../logo/close";
import QRline from "../images/qrline.jpg";
const PopLine = (props) => {
  return props.trigger ? (
    <div className='flex backdrop-filter backdrop-blur h-full w-full fixed  flex-col justify-center items-center'>
      <div className='flex relative flex-col justify-center items-center h-96 md:h-120 w-80 md:w-120 rounded-large bg-white'>
        <div
          className='absolute top-3 right-5'
          onClick={() => props.setTrigger(false)}
        >
          <Close />
        </div>
        <div className='w-60 md:w-lineBig h-60 md:h-lineBig my-5 md:my-7'>
          <img src={QRline}></img>
        </div>
        <text className='text-xl md:text-4xl font-semibold'>
          ID Line : soonskn
        </text>
      </div>
    </div>
  ) : (
    ""
  );
};

export default PopLine;
