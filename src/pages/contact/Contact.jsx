import React from "react";
import Ligne from "../../composants/ligne/Ligne";
import kandy from "../../assets/Rectangle 2187.png";
import Anuradhapura from "../../assets/Rectangle 2188.png";
import Gampaha from "../../assets/Rectangle 2193.png";
import Badulla from "../../assets/Rectangle 2190.png";
import Jaffna from "../../assets/Rectangle 2191.png";
import Colombo from "../../assets/Rectangle 2192.png";

function Contact({ className }) {
  return (
    <div className={className} id="contact">
      <div className="w-full bg-red-200/ h-[696px]/  flex flex-col items-center gap-y-14 mx-5">
        <div className="  h-[68px] flex flex-col justify-between items-center">
          <h2 className="font-bold text-3xl md:text-5xl text-black ">Featured Listings</h2>
          <Ligne className="flex justify-center gap-x-2" />
        </div>
        <div className="w-full bg-black/ place-items-center grid grid-cols-1 md:grid-cols-2 md:gap-y-12 md:gap-x-12 lg:grid-cols-3 lg:p-10 xl:grid-cols-3   gap-9 ">
          <div className=" rounded-xl ">
            <img src={kandy} alt=".." className="w-full/ h-[29vh]  xl:w-[38vh] xl:h-[30vh] p-3 " />
          </div>
          <div className=" rounded-xl">
            <img src={Anuradhapura} alt=".." className="w-full/ h-[29vh] xl:w-[40vh] xl:h-[30vh] p-3" />
          </div>
          <div className=" rounded-xl">
            <img src={Gampaha} alt=".." className="w-full/ h-[29vh] xl:w-[40vh] xl:h-[30vh] p-3"/>
          </div>
          <div className="  rounded-xl  ">
            <img src={Colombo} alt=".." className="w-full/ h-[29vh] xl:w-[40vh] xl:h-[30vh] p-3" />
          </div>
          <div className=" rounded-xl ">
            <img src={Jaffna} alt=".." className="w-full/ h-[29vh] xl:w-[40vh] xl:h-[30vh] p-3" />
          </div>
          <div className=" rounded-xl">
            <img src={Badulla} alt=".." className="w-full/ h-[29vh] xl:w-[40vh] xl:h-[30vh]  p-3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
