import React from "react";
import Chip from "../../composants/chip/Chip";
import { AiOutlineLike } from "react-icons/ai";
import { LuHome,LuCompass } from "react-icons/lu";
import { PiCurrencyDollarLight } from "react-icons/pi";
import { IoIosMore } from "react-icons/io";
import Ligne from "../../composants/ligne/Ligne";

function SectionRentals({className}) {
  return (
    <div className={className} id="rentals">
      <div className="flex justify-center mt-24 mx-5">

        <div className="w-full bg-red-100/  flex flex-col justify-between items-center gap-y-8 ">

          <div className=" w-full  flex flex-col justify-between. bg-red-300/ items-center px-1 gap-y-5">
            <h2 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl text-black xl:text-5xl">Browse From Top Categories</h2>
            <Ligne className="flex justify-center gap-x-2" />
           
          </div>




          <div className=" w-full  xl:w-[1300px] 2xl:w-[1500px]  px-5  flex flex-col justify-between gap-y-5  md:justify-center xl:flex-row xl:gap-x-2 ">

            <div className="flex flex-col gap-y-5 md:flex-row gap-x-2  md:justify-center " >
              <Chip name="Holiday Rentals" icon={<AiOutlineLike className="text-red-500"/>} color="red" />
              <Chip name="Residential Spaces" icon={<LuHome className="text-green-500" />} color="green" />
            </div>

            <div className="flex flex-col gap-y-5 md:flex-row gap-x-2 bg-red-300/">
               <Chip name="Residential Spaces" icon={<LuCompass Home className="text-purple-500" />} color="purple" />
              <Chip name="Residential Spaces" icon={<PiCurrencyDollarLight className="text-blue-500" />} color="blue" />
            </div>
            
           
            <Chip name="Residential Spaces" icon={<IoIosMore  className="text-orange-500 b" />} color="orange" />
          </div>

        </div>


      </div>
    </div>
  );
}

export default SectionRentals;
