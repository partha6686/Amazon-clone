import Image from "next/image";
import React from "react";
import logo from "../images/Amazon_logo.svg";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

const Navbar = () => {
  return (
    <header>
      {/* Primary Navbar */}
      <div className="flex align-middle bg-amazon_blue p-1 flex-grow py-2 whitespace-nowrap">
        {/* Logo */}
        <div className="flex items-center flex-grow sm:flex-grow-0">
          <Image
            src={logo}
            width={150}
            height={35}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        {/* Search Bar */}
        <div className="hidden sm:flex h-10 my-2 items-center rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-600">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* Profile-nav and cart */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6">
          <div className="link">
            <p>Hello Partha Sarathi</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="link flex items-center relative">
            <span className="absolute bg-yellow-400 rounded-full h-4 w-4 text-center left-7 bottom-7 text-black font-bold">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Cart
            </p>
          </div>
        </div>
      </div>

      {/* secondary Navbar */}
      <div className="flex items-center p-2 pl-6 bg-amazon_blue-light text-white text-sm space-x-5 font-bold whitespace-nowrap">
        <p className="flex items-center link">
          <MenuIcon className=" h-5 m-1" />
          All
        </p>
        <p className="link ">Best Sellers</p>
        <p className="link ">Today's Deals</p>
        <p className="link ">Prime</p>
        <p className="link hidden lg:inline-flex">Customer Service</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Fashion</p>
        <p className="link hidden lg:inline-flex">Books</p>
        <p className="link hidden lg:inline-flex">Home & Kitchen</p>
        <p className="link hidden lg:inline-flex">Amazon Pay</p>
        <p className="link hidden lg:inline-flex">New Releases</p>
      </div>
    </header>
  );
};

export default Navbar;
