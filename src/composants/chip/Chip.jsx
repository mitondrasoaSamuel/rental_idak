import React from "react";

function Chip({ name, icon, color }) {
  return (
    <>
      <div className=" font-medium min-w-[26vh] 2xl:w-[30vh] p-1 rounded-full flex justify-between px-1 items-center border border-black/25  ">
        <i
          className={`bg-${color}-100  w-[59px] h-[59px] rounded-full flex items-center justify-center`}
        >
          {icon}
        </i>
        <div className="flex justify-center flex-1 cursor-pointer">
          <p className="text-xl xl:text-lg">{name}</p>
        </div>
      </div>
    </>
  );
}

export default Chip;
