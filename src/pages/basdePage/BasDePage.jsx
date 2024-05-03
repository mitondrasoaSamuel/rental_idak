import React from "react";
import logo from "../../assets/logo.png";
import Ronde from "../../composants/boutonRonde/Ronde";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";

import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";

import { Button } from 'primereact/button';
        

function BasDePage({ className }) {
  return (
    <div className={className}>
      <div className="w-full  bg-gray-50 flex items-center justify-center ">


        <div className="w-full  flex flex-col justify-between p-2 gap-y-8 lg:flex-row lg:flex-wrap mx-5">


          <div className="w-full/ h-[202px]/ bg-white/ flex flex-col gap-y-5 ">

            <div className="  cursor-pointer">
              <img src={logo} alt=".." />
            </div>
            <div className="p-2 ">
              <p className="text-sm sm:text-base sm:bg-red-200/ sm:w-[40vh] ">
                Sri Lanka's first & largest platform designed to create an
                online marketplace exclusively for RENT
              </p>
            </div>
            <div className="w-[200px] bg-red-200/ flex justify-between">
              <Ronde icon={<FaInstagramSquare />} />
              <Ronde icon={<FaTwitter />} />
              <Ronde icon={<IoLogoYoutube />} />
              <Ronde icon={<FaFacebookF />} />
            </div>

          </div>
            <div className="   flex flex-col gap-y-4">
              <h2 className="text-red-600 text-base font-bold cursor-pointer" >Navigation</h2>
              <p>About Us</p>
              <p>Blog </p>
              <p>Terms of Use</p>
              <p>Privacy Policy</p>
            </div>
          <div className="flex flex-col gap-y-4">
            <h2 className="text-red-600 text-base font-bold cursor-pointer">
              Featured Locations
            </h2>
            <p>Kandy</p>
            <p>Anuradhapura </p>
            <p>Badulla</p>
            <p>Colombo</p>
            <p>Kaluthara</p>
          </div>
          <div className="flex flex-col gap-y-4">
            <h2 className="text-red-600 text-base font-bold cursor-pointer">Help</h2>
            <p>FAQ</p>
            <p>Contact </p>
          </div>
          <div className="flex flex-col gap-y-8">
            <h2 className="text-red-600 text-base font-bold cursor-pointer">
              Subscribe to Our Newsletter
            </h2>
            <p>Stay updated with the latest listings and rental tips.</p>
            <FloatLabel FloatLabel >
              <InputText id="email" className="rounded-full w-full h-[48px]/" />
              <label htmlFor="username" >Email Address</label>
            </FloatLabel>
            <Button label="Subscribe" severity="danger" rounded className="w-full h-[48px]/" />
          </div>


        </div>



      </div>
    </div>
  );
}

export default BasDePage;
