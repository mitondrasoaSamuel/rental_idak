import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link as LinkScroll } from "react-scroll";

import { Button } from "primereact/button";
import { LuUser } from "react-icons/lu";
import { IoMdAdd } from "react-icons/io";
import { IoMenuSharp } from "react-icons/io5";

import { Sidebar } from "primereact/sidebar";

function NavBar() {
  const [visibleRight, setVisibleRight] = useState(false);

  const handleMenu = () => {
    setVisibleRight(false);
  };

  return (
    <div className="fixed w-full bg-white shadow-md z-10 ">
      <div className="flex  sm:bg-blue-200/ justify-between  items-center h-[12vh]  bg-red-100/ w-full gap-x-8 p-4 sm:px-10 lg:px-2 xl:px-40 ">
        <div className="bg-white ">
          <LinkScroll to="home">
            <img
              src={logo}
              alt="logo de mon appli"
              className="cursor-pointer w-[11vh] sm:w-[15vh] md:w-[19vh] bg-red-100/"
            />
          </LinkScroll>
        </div>
        <div className="hidden lg:block">
          <ul className="flex gap-14 font-semibold">
            <LinkScroll to="home" spy={true} smooth={true} offset={0}>
              <li className="cursor-pointer hover:text-black/65 ">Home</li>
            </LinkScroll>
            <LinkScroll to="rentals" spy={true} smooth={true} offset={0}>
              <li className="cursor-pointer hover:text-black/65 ">Rentals</li>
            </LinkScroll>
            <LinkScroll to="categories" spy={true} smooth={true} offset={-200}>
              <li className="cursor-pointer hover:text-black/65 ">
                Categories
              </li>
            </LinkScroll>
            <LinkScroll to="about" spy={true} smooth={true} offset={0}>
              <li className="cursor-pointer hover:text-black/65 ">About Us</li>
            </LinkScroll>
            <LinkScroll to="contact" spy={true} smooth={true} offset={0}>
              <li className="cursor-pointer hover:text-black/65 ">Contact</li>
            </LinkScroll>
            <LinkScroll to="blog" spy={true} smooth={true} offset={0}>
              <li className="cursor-pointer hover:text-black/65 ">Blog</li>
            </LinkScroll>
          </ul>
        </div>
        <div className="bg-gray-500/ flex gap-2 sm:gap-x-8">
          <Button
            severity="danger"
            text
            className="font-medium  rounded-full mr-4 hidden "
          >
            <LuUser className="mr-1" />
            Sign in
          </Button>
          <Button severity="danger" rounded>
            <IoMdAdd className=" font-medium " />
            Post Listing
          </Button>
          <button
            onClick={() => setVisibleRight(true)}
            className="bg-transparent text-black text-5xl lg:hidden block bg-green-500/  "
          >
            <IoMenuSharp />
          </button>

          <Sidebar
            visible={visibleRight}
            position="right"
            onHide={() => setVisibleRight(false)}
          >
            <ul className="flex flex-col gap-14 font-semibold">
              <LinkScroll
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                onClick={handleMenu}
              >
                <li className="cursor-pointer">Home</li>
              </LinkScroll>
              <LinkScroll
                to="rentals"
                spy={true}
                smooth={true}
                offset={-150}
                onClick={handleMenu}
              >
                <li className="cursor-pointer">Rentals</li>
              </LinkScroll>
              <LinkScroll
                to="categories"
                spy={true}
                smooth={true}
                offset={-150}
                onClick={handleMenu}
              >
                <li className="cursor-pointer">Categories</li>
              </LinkScroll>
              <LinkScroll
                to="about"
                spy={true}
                smooth={true}
                offset={-30}
                onClick={handleMenu}
              >
                <li className="cursor-pointer">About Us</li>
              </LinkScroll>
              <LinkScroll
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                onClick={handleMenu}
              >
                <li className="cursor-pointer">Contact</li>
              </LinkScroll>
              <LinkScroll
                to="blog"
                spy={true}
                smooth={true}
                offset={-100}
                onClick={handleMenu}
              >
                <li className="cursor-pointer">Blog</li>
              </LinkScroll>
            </ul>
          </Sidebar>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
