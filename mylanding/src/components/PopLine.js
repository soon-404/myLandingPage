import React from "react";
import Close from "../logo/close";
const PopLine = (props) => {
  return props.trigger ? (
    <div className='flex backdrop-filter backdrop-blur h-full w-full  fixed  flex-col justify-center items-center'>
      <div className='flex h-96 w-80 rounded-large bg-white'>
        <div className='flex fixed' onClick={() => props.setTrigger(false)}>
          <Close />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default PopLine;
