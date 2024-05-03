import React from "react";
import backgroundImage from "../../assets/young-family-with-kids-travelling-by-car-stopped-field 1.png";

import { CiSearch } from "react-icons/ci";
import { LiaMapMarkerSolid } from "react-icons/lia";
import { FaSearch } from "react-icons/fa";

import { Button } from "primereact/button";

function SectionHome() {
  return (
    <div className="" id="home">
      <div
        className="h-[89vh]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
          backgroundPosition: `bottom`,
        }}
      >
        <div className=" flex justify-center items-center bg-red-300/  mx-5 m">
          <div className=" w-full  flex flex-col items-center bg-green-300/ my-16 lg:my-[15vh] ">
            <div className="  mb-12 flex flex-col items-center  gap-y-10">
              <div className=" flex flex-col md:flex-row md:gap-x-5  lg:w-full justify-center  ">
                <span className="text-black text-3xl font-extrabold sm:3xl md:text-4xl flex justify-center lg:text-6xl">
                  Discover Your
                </span>
                <span className="text-red-500 text-3xl font-extrabold md:text-3xl flex justify-center lg:text-6xl ">
                  Perfect Rental
                </span>
              </div>

              <div className="  px-[2%] ">
                <p className="text-xl text-center sm:text-2xl md:text-3xl lg:text-4xl max-w-[100%]  lg:w-[100%]">
                  Rent Cars, Houses, and Items in Just a Few Clicks
                </p>
              </div>
            </div>

            <div className="w-full p-5  flex flex-col mx-10  lg:items-center ">
              <div className="flex justify-center mb-6 ">
                <ul className="flex gap-x-3  w-full  items-center gap-y-3 justify-center">
                  <li>
                    <button className="bg-red-500 px-5 py-3 text-white rounded-full text-base">
                      Places
                    </button>
                  </li>
                  <li>
                    <button className="bg-white  px-5 py-3 text-black rounded-full text-base">
                      Rides
                    </button>
                  </li>
                  <li>
                    <button className="bg-white px-5 py-3 text-black rounded-full text-base">
                      Rides
                    </button>
                  </li>
                </ul>
              </div>

              <div className=" flex flex-col gap-y-5 w-full  overflow-hidden lg:w-[794px] ">
                <div className="flex flex-col gap-y-5 md:flex-row">
                  <div className=" bg-white flex-1 flex items-center justify-centere rounded-full md:rounded-e-3xl  md:border border-r-black/20 ">
                    <i>
                      <CiSearch className="ml-2 text-2xl" />
                    </i>
                    <input
                      type="text"
                      placeholder="Search for cars, houses, and more.."
                      className="w-full  text-base outline-none p-4 rounded-full"
                    />
                  </div>
                  <div className=" flex-1 flex items-center justify-center rounded-full bg-white md:rounded-s-3xl lg:justify-around">
                    <i>
                      <LiaMapMarkerSolid className="mr-3 text-2xl" />
                    </i>

                    <select className="block w-[214px]/ px-5 p-4 mt-1 !bg-transparent border border-transparent  rounded-md shadow-sm focus:outline-none focus:border-white focus:ring/ focus:ring-white text-black/70 mr-9">
                      <option value="" className="text-black/70">
                        Select Location
                      </option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>

                    <Button
                      icon={<FaSearch className=" text-2xl text-white " />}
                      rounded
                      severity="danger"
                      aria-label="Cancel"
                      className="max-lg:hidden"
                    />
                  </div>
                </div>

                <div className="bg-red-500 rounded-full w-full h-[56px] flex  items-center justify-center space-x-2 lg:hidden">
                  <FaSearch className=" text-2xl text-white" />
                  <p className="text-white font-bold ">Search Now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionHome;
