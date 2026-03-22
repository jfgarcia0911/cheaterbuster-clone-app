// import React, { useState } from "react";
import EChartsIcon from "@/components/icons/EchartsIcon";
import FireIcon from "@/components/icons/FireIcon";
import FaceIcon from "@/components/icons/FaceIcon";
import { UserRound, House, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
interface NavbarDropdownProps {
	activeItem: string | null;
	setActiveItem: (item: string) => void;
	toggleOpen: (section: string) => void;
}

export default function NavbarDropdown({
	activeItem,
	setActiveItem,
	toggleOpen,
}: NavbarDropdownProps) {
  const pathname = usePathname()
	return (
		<div className="bg-black w-full h-20 transition-all duration-800">
			<div className="flex justify-center h-full">
				<div className="flex justify-evenly items-center w-350 mx-5 sm:mx-10 md:mx-25 h-full">
					{/* APP SEARCH */}
					<Link href="/"
						onClick={() => {
							setActiveItem("appSearch");
							toggleOpen("productsNavbar");
						}}
						className={`flex flex-col items-center justify-center text-brand-red hover:text-white gap-2 hover:bg-brand-red w-1/4 h-full transition-all duration-500 ${pathname === "/" ? "bg-brand-red text-white" : "text-brand-red hover:text-white hover:bg-brand-red"} cursor-pointer`}
					>
						<EChartsIcon className="h-5 w-5 " />
						<h1 className="text-sm font-bold">APP SEARCH</h1>
					</Link>

					{/* FOLLOWING AI */}
					<Link href="/followingai"
						onClick={() => {
							setActiveItem("followingAI");
							toggleOpen("productsNavbar");
						}}
						className={`flex flex-col items-center justify-center text-brand-yellow hover:text-white gap-2 hover:bg-brand-yellow w-1/4 h-full transition-all duration-500 ${pathname === "/followingai" ? "bg-brand-yellow text-white" : "text-brand-yellow hover:text-white hover:bg-brand-yellow"} cursor-pointer`}
					>
						<FireIcon className="h-5 w-5 " />
						<h1 className="text-sm font-bold">FOLLOWING AI</h1>
					</Link>

					{/* FACETRACE */}
					<Link href="facetrace"
						onClick={() => {
							setActiveItem("facetrace");
							toggleOpen("productsNavbar");
						}}
						className={`flex flex-col items-center justify-center text-brand-blue hover:text-white gap-2 hover:bg-brand-blue w-1/4 h-full transition-all duration-500 ${pathname === "/facetrace" ? "bg-brand-blue text-white" : "text-brand-blue hover:text-white hover:bg-brand-blue"} cursor-pointer`}
					>
						<FaceIcon className="h-5 w-5 " />
						<h1 className="text-sm font-bold">FACETRACE</h1>
					</Link>

					{/* TOOLS */}
					<Link href="reverse-phone-lookup"
						onClick={() => {
							setActiveItem("tools");
							toggleOpen("productsNavbar");
						}}
						className={`flex flex-col items-center justify-center text-brand-gray hover:text-white gap-2 hover:bg-brand-gray w-1/4 h-full transition-all duration-500  ${pathname === "/reverse-phone-lookup" ? "bg-brand-gray text-white" : "text-brand-gray hover:text-white hover:bg-brand-gray"} cursor-pointer`}
					>
						<div className="flex gap-1">
							<UserRound className="h-5 w-5 " />
							<House className="h-5 w-5 " />
							<Mail className="h-5 w-5 " />
							<Phone className="h-5 w-5 " />
						</div>
						<h1 className="text-sm font-bold">TOOLS</h1>
					</Link>
				</div>
			</div>
		</div>
	);
}
