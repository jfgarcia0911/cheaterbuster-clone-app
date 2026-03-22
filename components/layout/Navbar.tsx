"use client";
import React, { useState } from "react";
import CustomImage from "../ui/CustomImage";
import { ChevronDown, ChevronUp, LayoutGrid } from "lucide-react";
import NavbarDropdown from "../Navbar/NavbarDropdown";
import Link from "next/link";
import useScrollDirection from "@/hooks/useScrollDirection";

interface NavbarProps {
	open: { [key: string]: boolean };
	toggleOpen: (section: string) => void;
	activeItem: string | null;
	setActiveItem: (item: string) => void;
}

export default function Navbar({
	open,
	toggleOpen,
	activeItem,
	setActiveItem,
}: NavbarProps) {
	const isScrollingDown = useScrollDirection();
	console.log(isScrollingDown);
	return (
		<div className={`${isScrollingDown ? "fixed top-0 left-0 w-full z-50 " : "block"}  `}>
			<div className=" flex flex-wrap items-center justify-center bg-white">
				<div className="flex  justify-between w-350 mx-5 sm:mx-10 lg:mx-15">
					{/* Logo */}
					<Link href="/" className="cursor-pointer">
						<CustomImage
							link="/cheater-buster-logo.png"
							dimensions="h-20 w-25 lg:w-30"
						/>
					</Link>
					{/* Right Navigation */}
					<div className="flex gap-2   xl:text-lg items-center tracking-wider">
						{/* Products Section */}
						<div
							onClick={() => toggleOpen("productsNavbar")}
							className="px-5 items-center text-gray-400 hover:text-gray-900 hidden lg:flex"
						>
							<h1 className="cursor-default">Products</h1>
							{open.productsNavbar ? (
								<ChevronUp className="h-5" />
							) : (
								<ChevronDown className="h-5" />
							)}
						</div>
						{/* Learn More Section */}
						<div className="relative group hidden lg:flex items-center  text-gray-400 group hover:text-gray-900 h-full  px-5 z-50 ">
							<h1 className="cursor-default">Learn More</h1>
							<ChevronDown className="h-5 block group-hover:hidden transition-transform duration-300" />
							<ChevronUp className="h-5 hidden group-hover:block transition-transform duration-300" />

              {/* Hover Dropdown */}
							<div className="absolute top-15 left-0 bg-white w-50 p-4 rounded-xl text-sm space-y-3 hidden group-hover:block text-gray-400 ">
								<h1 className="hover:text-gray-900 cursor-pointer">
									How it Works
								</h1>
								<h1 className="hover:text-gray-900 cursor-pointer">FAQ</h1>
								<h1 className="hover:text-gray-900 cursor-pointer">About Us</h1>
							</div>
						</div>
						{/* Sign In Section */}
						<div className="hidden lg:block">
							<button className="cursor-pointer px-5">Sign In</button>
						</div>
						<div className="hidden lg:block">
							<button className="border-2 py-2 px-6 rounded-3xl hover:border-red-600 hover:text-red-500 cursor-pointer">
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

				{open.productsNavbar && (
					<NavbarDropdown
						activeItem={activeItem}
						setActiveItem={setActiveItem}
						toggleOpen={toggleOpen}
					/>
				)}
			</div>
		</div>
	);
}
