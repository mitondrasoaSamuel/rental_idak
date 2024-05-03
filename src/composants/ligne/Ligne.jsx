import React from "react";

function Ligne({className}) {
  return (
    <div className={className}>
      <div className="bg-red-500 w-[104px] h-[6px] rounded-full"></div>
      <div className="bg-red-500 w-[13px] h-[6px] rounded-full"></div>
    </div>
  );
}

export default Ligne;
