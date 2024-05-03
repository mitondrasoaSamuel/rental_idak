import React from "react";

import { Card } from "primereact/card";

function About({ className }) {
  return (
    <div className={className} id="about">
      <div className="bg-gray-50 w-full/ h-[418px]/ flex flex-col items-center justify-around gap-y-10 py-20">
        <div className="bg-red-100/ mx-2">

          <h2 className="bg-red-500/ p-2 text-center h-44/ text-2xl font-bold cursor-pointer sm:text-3xl lg:text-4xl xl:text-5  xl">
            Insights and Performance Metrics
          </h2>
        </div>
        <div className="flex flex-col gap-12 md:flex-row md:flex-wrap lg:gap-x-16 bg-red-100/ md:justify-center">
            <Card className=" sm:w-[30vh] xl:w-[32vh]  h-56 bg-black/90 flex items-center justify-center rounded-xl cursor-pointer hover:scale-105 duration-1000 ">
            <h2 className="font-bold text-[40px] text-white flex justify-center">
              5000+
            </h2>
            <p className="text-white ">Total Listings in the System</p>
          </Card>
          <Card className=" sm:w-[30vh] xl:w-[32vh]  h-56 bg-black/90 flex items-center justify-center rounded-xl cursor-pointer hover:scale-105 duration-1000 ">
            <h2 className="font-bold text-[40px] text-white flex justify-center">
              5000+
            </h2>
            <p className="text-white ">Active Listings</p>
          </Card>
          <Card className=" sm:w-[30vh] xl:w-[32vh] h-56 bg-black/90 flex items-center justify-center rounded-xl cursor-pointer hover:scale-105 duration-1000 ">
            <h2 className="font-bold text-[40px] text-white flex justify-center">
              5000+
            </h2>
            <p className="text-white ">Articles in the Blog</p>
          </Card>
        </div>
        
          
       
      </div>
    </div>
  );
}

export default About;
