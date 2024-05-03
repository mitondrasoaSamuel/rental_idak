import React from "react";
import Ligne from "../../composants/ligne/Ligne";
import paralax from "../../assets/i-parallax-11-1024x683.jpeg.png";
import paralax1 from "../../assets/Link → i-parallax-15-1024x683.jpeg.png";
import paralax2 from "../../assets/Link → i-parallax-14-1024x683.jpeg.png";
import paralax3 from "../../assets/Link → i-parallax-12-1024x683.jpeg.png";
import paralax4 from "../../assets/Link → i-parallax-13-1024x683.jpeg.png";

function SectionBloc({ className }) {
  return (
    <div className={className} id="blog">
      <div className=" w-full bg-red-200/  flex flex-col justify-center items-center gap-y-14 p-10">

        <div className=" w-full bg-red-100/ h-[70px]   flex flex-col justify-center items-center gap-y-5">
          <h2 className="font-bold text-3xl md:text-5xl text-black ">Featured Listings</h2>
          <Ligne className="flex justify-center gap-x-2" />
        </div>

        
        <div className="w-full  bg-red-100/   flex flex-row justify-between lg:items-center/ xl:items-start">
          <div className="w-full xl:w-full bg-red-300/ lg:h-[80vh]/ p-2 flex-col/ gap-y-16 hidden lg:flex lg:flex-col  ">
            <div className="bg-green-500/ w-full h-[599px]/ ">
              <img src={paralax} alt=".." className=" w-full h-[50vh] xl:w-full   xl:h-full xl:p-7/" />
            </div>
            <div className=" w-full  h-[100px] flex flex-col justify-between">
              <h3 className="text-red-500 font-bold text-sm">
                February 4, 2023
              </h3>
              <h2 className="text-black text-xl font-bold">
                Top Tips for Finding the Perfect Rental
              </h2>
              <p className="text-[#8B8B8B]">
                Discover expert advice on how to find the ideal rental property
                that meets your needs and budget.
              </p>
            </div>
          </div>
         

          <div className=" w-full h-[773px]/ bg-red-100/ flex flex-col gap-y-8 p-2">


            <div className="w-full h-[169px]/  flex flex-col gap-y-5 lg:gap-x-1 lg:flex-row ">
              <div>
                <img src={paralax1} alt=".." className="bg-red-500/ w-[30vh] h-[169px]" />
              </div>
              <div className="flex flex-col  w-full gap-y-5 lg:gap-y-1">
                <h3 className="text-red-500 font-bold text-sm">May 7, 2023</h3>
                <h2 className="text-[#030303] font-bold text-xl cursor-pointer">
                  Car Rental Hacks for a Smooth Journey
                </h2>
                <p className="text-[#8B8B8B]">
                  Learn insider tips for getting the best deals and making the
                  most of your rental car experience.
                </p>
              </div>
            </div>
            <div className="w-full h-[169px]/  flex flex-col gap-y-5 lg:gap-x-1 lg:flex-row ">
              <div>
                <img src={paralax2} alt=".." className="bg-red-500/ w-[30vh] h-[169px]" />
              </div>
              <div className="flex flex-col  w-full gap-y-5 lg:gap-y-1">
                <h3 className="text-red-500 font-bold text-sm">May 7, 2023</h3>
                <h2 className="text-[#030303] font-bold text-xl cursor-pointer">
                Managing Your Rental Items: A Comprehensive Guide
                </h2>
                <p className="text-[#8B8B8B]">
                Get valuable insights on how to effectively manage and
                  maintain your rented items.
                </p>
              </div>
            </div>
            <div className="w-full h-[169px]/  flex flex-col gap-y-5 lg:gap-x-1 lg:flex-row ">
              <div>
                <img src={paralax3} alt=".." className="bg-red-500/ w-[30vh] h-[169px]" />
              </div>
              <div className="flex flex-col  w-full gap-y-5 lg:gap-y-1">
                <h3 className="text-red-500 font-bold text-sm">May 7, 2023</h3>
                <h2 className="text-[#030303] font-bold text-xl cursor-pointer">
                Navigating the Rental Market: Insights for New Renters
                </h2>
                <p className="text-[#8B8B8B]">
                Explore key considerations and useful tips for individuals new
                  to the rental market.
                </p>
              </div>
            </div>
            <div className="w-full h-[169px]/  flex flex-col gap-y-5 lg:gap-x-1 lg:flex-row ">
              <div>
                <img src={paralax4} alt=".." className="bg-red-500/ w-[30vh] h-[169px]" />
              </div>
              <div className="flex flex-col  w-full gap-y-5 lg:gap-y-1">
                <h3 className="text-red-500 font-bold text-sm">May 7, 2023</h3>
                <h2 className="text-[#030303] font-bold text-xl cursor-pointer">
                Maximizing Returns: Strategies for Rental Property Owners
                </h2>
                <p className="text-[#8B8B8B]">
                Learn strategies to optimize the return on investment for your
                  rental property.
                </p>
              </div>
            </div>

         


           

            
          </div>


        </div>





      </div>
    </div>
  );
}

export default SectionBloc;
