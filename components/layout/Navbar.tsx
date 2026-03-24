"use client";
import React, { useState } from "react";
import CustomImage from "../ui/CustomImage";
import { ChevronDown, ChevronUp, LayoutGrid } from "lucide-react";
import NavbarDropdown from "../Navbar/ProductDropdown";
import Link from "next/link";
import useScrollDirection from "@/hooks/useScrollDirection";
import { useAuth } from "@/context/AuthContext";
import { Settings,Search, LogOut } from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/config";

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
	const { user } = useAuth();

  const handleSignOut =  () => {
    signOut(auth)
			.then(() => {
				console.log("User signed out");
			})
			.catch((error) => {
				console.error("Error signing out:", error);
			});
  }
	return (
		<div
			className={`${isScrollingDown ? "fixed top-0 left-0 w-full z-50 " : "block"}  `}
		>
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

						{user ? (
							<>
								<Link
									href="/searches"
									className="hidden lg:block text-gray-400"
								>
									<button className="cursor-pointer px-5">Searches</button>
								</Link>
								{/* MyAccount */}
								<div className="relative gap-2 group hidden lg:flex items-center   group hover:text-gray-900 h-full  px-5 z-50 ">
									<div className="bg-gray-500 rounded-full overflow-hidden">
										{user.photoURL && (
											<CustomImage
												link={user.photoURL}
												dimensions="h-7 w-7 rounded-full"
											/>
										)}
									</div>
									<h1 className="cursor-default">My Account</h1>
									<ChevronDown className="h-5 block group-hover:hidden transition-transform duration-300" />
									<ChevronUp className="h-5 hidden group-hover:block transition-transform duration-300" />

									{/* Hover Dropdown */}
									<div className="absolute top-15 left-0 bg-white w-50 p-4 rounded-xl text-sm space-y-3 hidden group-hover:block text-gray-400 ">
										<h1 className="text-black">{user.email}</h1>
										
										<div className="flex items-center gap-1 hover:text-gray-900 cursor-pointer">
											<Settings className="h-4 w-4 " />
											<h2>Account</h2>
										</div>
                    <div className="flex items-center gap-1 hover:text-gray-900 cursor-pointer">
											<Search className="h-4 w-4 " />
											<h2>Searches</h2>
										</div>
                    <div onClick={handleSignOut} className="flex items-center gap-1 hover:text-gray-900 cursor-pointer">
											<LogOut className="h-4 w-4 " />
											<h2>Sign Out</h2>
										</div>
									</div>
								</div>
							</>
						) : (
							<>
								<Link href="/signin" className="hidden lg:block">
									<button className="cursor-pointer px-5">Sign In</button>
								</Link>
								<Link href="/signup" className="hidden lg:block">
									<button className="border-2 py-2 px-6 rounded-3xl hover:border-red-600 hover:text-red-500 cursor-pointer">
										Sign Up
									</button>
								</Link>
							</>
						)}
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
