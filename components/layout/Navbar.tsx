"use client";
import React, { useState } from "react";
import CustomImage from "../ui/CustomImage";
import { ChevronDown, ChevronUp, LayoutGrid } from "lucide-react";

interface NavbarProps {
	open: { [key: string]: boolean };
	toggleOpen: (section: string) => void;
}

export default function Navbar({ open, toggleOpen }: NavbarProps) {

	return (
		<div className="flex flex-wrap items-center justify-center ">
			<div className="flex  justify-between w-350 mx-5 sm:mx-10 md:mx-25">
				{/* Logo */}
				<div className="cursor-pointer">
					<CustomImage
						link="/cheater-buster-logo.png"
						dimensions="h-20 w-25 lg:w-30"
					/>
				</div>
				{/* Right Navigation */}
				<div className="flex space-x-5 xl:space-x-10   xl:text-lg items-center tracking-wider">
					{/* Products Section */}
					<div onClick={() => toggleOpen("productsNavbar")} className=" items-center text-gray-400 hover:text-gray-900 hidden lg:flex">
						<h1 className="cursor-default">Products</h1>
            {open.productsNavbar ? <ChevronUp className="h-5" /> : <ChevronDown className="h-5" />}
					</div>
					{/* Learn More Section */}
					<div className="relative group hidden lg:flex items-center  text-gray-400 group hover:text-gray-900 h-full  px-4  ">
						<h1 className="cursor-default">Learn More</h1>
						<ChevronDown className="h-5 block group-hover:hidden transition-transform duration-300" />
						<ChevronUp className="h-5 hidden group-hover:block transition-transform duration-300" />

						<div className="absolute top-15 left-0 bg-gray-300 w-50 p-4 rounded-xl text-sm space-y-3 hidden group-hover:block text-gray-400 ">
							<h1 className="hover:text-gray-900 cursor-pointer">
								How it Works
							</h1>
							<h1 className="hover:text-gray-900 cursor-pointer">FAQ</h1>
							<h1 className="hover:text-gray-900 cursor-pointer">About Us</h1>
						</div>
					</div>
					{/* Sign In Section */}
					<div className="hidden lg:block">
						<button className="cursor-pointer">Sign In</button>
					</div>
					<div className="hidden lg:block">
						<button className="border-2 py-2 px-5 rounded-3xl hover:border-red-600 hover:text-red-500 cursor-pointer">
							Sign Up
						</button>
					</div>

					{/* Small Devices */}
					<div
						onClick={() => toggleOpen("menu")}
						className="flex lg:hidden items-center text-red-600 space-x-1 cursor-pointer "
					>
						<h1>Menu</h1>
						<LayoutGrid className="h-5" />
					</div>
				</div>
			</div>
			
      {open.productsNavbar && <div className="bg-black w-full h-20">
				<div className="flex justify-center">
					<div className="flex justify-evenly w-350">
						<div>segewg</div>
						<div>segewg</div>
						<div>segewg</div>
						<div>segewg</div>
					</div>
				</div>
			</div>}
		</div>
	);
}
