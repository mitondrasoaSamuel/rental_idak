import React from "react";

function Responsive() {
  return (
    <div className="my-[10%] bg-red-200 w-full h-[100vh]">
      {/* <div className="bg-green-500 w-full md:w-[80vw] mx-auto flex flex-wrap  sm:bg-white md:bg-yellow-700 lg:bg-gray-700 justify-center gap-10">
        <div className="w-[200px] h-[200px] lg:w-[500px] lg:h-[500px] bg-black">1</div>
        <div className="w-[200px] h-[200px] lg:w-[500px] lg:h-[500px] bg-black/80">2</div>
        <div className="w-[200px] h-[200px] lg:w-[500px] lg:h-[500px] bg-red-500 hidden md:block xl:hidden">3</div>
        <div className="w-[200px] h-[200px] lg:w-[500px] lg:h-[500px] bg-purple-400">4</div>
        <div className="w-[200px] h-[200px] lg:w-[500px] lg:h-[500px]  bg-purple-900 lg:max-xl:bg-red-900 xl:bg-black">5</div>
        <div className="w-[200px] h-[200px] lg:w-[500px] lg:h-[500px]  max-md:bg-red-950 md:bg-yellow-500 ">6</div>
      </div> */}
      <div className="bg-green-500 w-[85vw] mx-auto grid sm:grid-cols-2 md:grid-cols-3 text-white  sm:bg-white md:bg-yellow-700 lg:bg-gray-700  gap-10 place-items-center">
        <div className="w-[200px] h-[200px] bg-black">1</div>
        <div className="w-[200px] h-[200px] bg-black/80">2</div>
        <div className="w-[200px] h-[200px] bg-red-500 hidden md:block xl:hidden">3</div>
        <div className="w-[200px] h-[200px] bg-purple-400">4</div>
        <div className="w-[200px] h-[200px]  bg-purple-900 lg:max-xl:bg-red-900 xl:bg-black">5</div>
        <div className="w-[200px] h-[200px]  max-md:bg-red-950 md:bg-yellow-500 ">6</div>
      </div>
    </div>
  );
}

export default Responsive;
