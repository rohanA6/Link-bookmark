"use client";
import React, { useState } from "react";
import { HiOutlineLink } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  return (
    <>
      <div className=" flex justify-between items-center">
        <div className=" flex flex-col justify-center items-center">
          <div className=" text-2xl md:text-3xl">
            <HiOutlineLink />
          </div>
          <h1 className=" font-Montserrat font-semibold text-xs md:text-base">
            Link Bookmark
          </h1>
        </div>
        <div className=" hidden md:block">
          <div className=" flex items-center gap-5">
            <p className=" cursor-pointer hover:font-medium">Add Link</p>
            <p className=" cursor-pointer hover:font-medium">My Bookmarks</p>
            <p className=" cursor-pointer hover:font-medium">Logout</p>
          </div>
          {/* <div className=" flex items-center gap-5">
          <p className=" cursor-pointer hover:font-medium">Sign In</p>
        </div> */}
        </div>
        <div className=" block md:hidden">
          <div
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            className=" text-3xl"
          >
            <RxHamburgerMenu />
          </div>
        </div>
      </div>

      {isMobileNavOpen && (
        <div className=" w-full bg-white absolute mt-10 text-lg">
          <div className=" flex flex-col items-center gap-5">
            <p className=" cursor-pointer hover:font-medium">Add Link</p>
            <p className=" cursor-pointer hover:font-medium">My Bookmarks</p>
            <p className=" cursor-pointer hover:font-medium">Logout</p>
          </div>
          {/* <div className=" flex items-center gap-5">
          <p className=" cursor-pointer hover:font-medium">Sign In</p>
        </div> */}
        </div>
      )}
    </>
  );
};

export default Navbar;
