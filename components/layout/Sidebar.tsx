import React, { useState } from "react";
import { X, ChevronUp, ChevronDown } from "lucide-react";
import EChartsIcon from "@/components/icons/EchartsIcon";
import FireIcon from "@/components/icons/FireIcon";
import FaceIcon from "@/components/icons/FaceIcon";
import ToolsIcon from "@/components/icons/ToolsIcon";
import Link from "next/link";

interface SidebarProps {
	open: { [key: string]: boolean };
	toggleOpen: (section: string) => void;
	setActiveItem: (item: string) => void;
}

export default function Sidebar({
	open,
	toggleOpen,
	setActiveItem,
}: SidebarProps) {
	return (
		<div className="absolute top-0 right-0 w-95 h-screen py-6 px-4 bg-white z-50">
			<div className="flex justify-between">
				<h1 className="text-gray-400 text-xs tracking-widest font-semibold">
					MENU
				</h1>
				<X className="h-5 cursor-pointer" onClick={() => toggleOpen("menu")} />
			</div>
			<div className="mt-10">
				<div className="space-y-4">
					{/* Products */}
					<div
						onClick={() => toggleOpen("productsSidebar")}
						className="flex justify-between items-center border border-gray-100 hover:border-gray-300 px-4 py-2 rounded-xl "
					>
						<h1 className="text-sm font-semibold">Products</h1>
						{open.productsSidebar ? <ChevronUp /> : <ChevronDown />}
					</div>
					{open.productsSidebar && (
						<div className="space-y-5 px-5">
							<div
								onClick={() => {
									setActiveItem("appSearch");
									toggleOpen("menu");
								}}
								className="flex items-center space-x-2 font-semibold text-red-500 cursor-pointer"
							>
								<EChartsIcon className="h-4 w-4 " />
								<h1>App Search</h1>
							</div>
							<div
								onClick={() => {
									setActiveItem("followingAI");
									toggleOpen("menu");
								}}
								className="flex items-center space-x-2 font-semibold text-yellow-500 cursor-pointer"
							>
								<FireIcon className="h-4 w-4 " />
								<h1>Following AI</h1>
							</div>
							<div
								onClick={() => {
									setActiveItem("facetrace");
									toggleOpen("menu");
								}}
								className="flex items-center space-x-2 font-semibold text-blue-500 cursor-pointer"
							>
								<FaceIcon className="h-4 w-4 " />
								<h1>FaceTrace</h1>
							</div>
							<div
								onClick={() => {
									setActiveItem("tools");
									toggleOpen("menu");
								}}
								className="flex items-center space-x-2 font-semibold text-gray-500 cursor-pointer"
							>
								<ToolsIcon className="h-4 w-4 " />
								<h1>Tools</h1>
							</div>
						</div>
					)}

					{/* Learn More */}
					<div
						onClick={() => toggleOpen("learnMoreSidebar")}
						className="flex justify-between items-center border border-gray-100 hover:border-gray-300 px-4 py-2 rounded-xl"
					>
						<h1 className="text-sm font-semibold">Learn more</h1>
						{open.learnMoreSidebar ? <ChevronUp /> : <ChevronDown />}
					</div>
					{open.learnMoreSidebar && (
						<div className="space-y-5 px-5 tracking-wider text-gray-500">
							<h1>How It Works</h1>
							<h1> FAQ</h1>
							<h1>About Us</h1>
							<h1>Contact</h1>
						</div>
					)}

					<div className="flex flex-col items-center gap-2 mt-10">
						<div className="text-black w-full text-center cursor-pointer">
							<div className="mx-6 bg-white p-2 rounded-xl font-bold border border-transparent hover:border-gray-300">
								Sign In
							</div>
						</div>
						<Link href="/signup" className="text-white w-full text-center cursor-pointer hover:opacity-80">
							<div className="mx-6 bg-black p-2 rounded-xl font-bold">
								Sign Up
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
