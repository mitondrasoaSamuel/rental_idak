import React from "react";

import { Avatar } from "primereact/avatar";
import avatar from "../../assets/Ellipse 38.png";

import { Button } from "primereact/button";
import { MdFavoriteBorder } from "react-icons/md";

function Card({ style }) {
  return (
    <div className="bg-red-400/ lg:w-full flex flex-col items-center ">
      <div className="w-full  bg-black/ h-[325px] relative  " style={style}>
        <Button
          label="For Rent"
          severity="success"
          rounded
          className="w-[12vh]  bg-red-300/  h-[37px] text-white absolute top-[3vh] right-8 text-sm font-medium"
        />
      </div>

      <div className="w-full h-[279px]  rounded-lg  flex flex-col justify-around px-3">
        <div className="w-full h-[80px] bg-black/">
          <h2 className="font-medium text-base">
            <span className="text-red-500 text-xl">85,000 LKR</span> /Month
          </h2>
          <p className="text-2xl font-semibold">Luxury villa in Rego Park</p>
        </div>

        <div className=" w-full h-[24px] flex flex-row  bg-black/ sm:bg-white/ sm:text-lg   ">
          <p className=" w-[20vh] lg:w-[14vh]  border-r border-r-black ">3 Bedrooms</p>
          <p className=" w-[20vh]  bg-red-300/ lg:w-[14vh]  flex justify-center border-r border-r-black ">
            2 Bathrooms
          </p>
          <p className=" w-[17vh]  bg-red-300/ lg:w-[19vh]  flex justify-center">2500 Square FT</p>
        </div>

        <div className=" w-full h-[56px] flex flex-row justify-between items-center bg-black/ ">
          <div className="flex items-center gap-x-3  bg-red-300/">
            <Avatar image={avatar} size="large" shape="circle" />
            <p className="text-black/30 text-sm">
              <span className="text-black font-semibold text-xl">
                Anne Liza
              </span>
              <br /> Property Seller
            </p>
          </div>
          <Button
            icon={<MdFavoriteBorder className="text-xl" />}
            className="bg-gray-100 border border-gray-100 hover:bg-gray-200 hover:border-gray-200 "
            outlined
            severity="secondary"
            aria-label="Bookmark"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
