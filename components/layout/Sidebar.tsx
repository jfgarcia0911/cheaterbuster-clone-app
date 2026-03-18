import React, { useState } from "react";
import { X, ChevronUp, ChevronDown } from "lucide-react";
import EChartsIcon from "@/components/icons/EchartsIcon";
import FireIcon from "@/components/icons/FireIcon";
import ToolsIcon from "@/components/icons/ToolsIcon";

interface SidebarProps {
	openSidebar: boolean;
	setOpenSidebar: (value: boolean) => void;
}

export default function Sidebar({ openSidebar, setOpenSidebar }: SidebarProps) {
	const [expand, setExpand] = useState<{ [key: string]: boolean }>({
		products: false,
		learnMore: false,
	});

	const toggleExpand = (section: string) => {
		setExpand((prev) => ({ ...prev, [section]: !prev[section] }));
	};

	return (
		<div className="absolute top-0 right-0 w-95 h-screen py-6 px-4 bg-white">
			<div className="flex justify-between">
				<h1 className="text-gray-400 text-xs tracking-widest font-semibold">
					MENU
				</h1>
				<X
					className="h-5 cursor-pointer"
					onClick={() => setOpenSidebar(!openSidebar)}
				/>
			</div>
			<div className="mt-10">
				<div className="space-y-4">
					{/* Products */}
					<div
						onClick={() => toggleExpand("products")}
						className="flex justify-between items-center border border-gray-100 hover:border-gray-300 px-4 py-2 rounded-xl"
					>
						<h1 className="text-sm font-semibold">Products</h1>
						{expand.products ? <ChevronUp /> : <ChevronDown />}
					</div>
					{expand.products && (
						<div className="space-y-5 px-5">
							<div className="flex items-center space-x-2 font-semibold text-red-500 cursor-pointer">
								<EChartsIcon className="h-4 w-4 " />
								<h1>App Search</h1>
							</div>
							<div className="flex items-center space-x-2 font-semibold text-yellow-500 cursor-pointer">
								<FireIcon className="h-4 w-4 " />
								<h1>Following AI</h1>
							</div>
							<div className="flex items-center space-x-2 font-semibold text-blue-500 cursor-pointer">
								<EChartsIcon className="h-4 w-4 " />
								<h1>FaceTrace</h1>
							</div>
							<div className="flex items-center space-x-2 font-semibold text-gray-500 cursor-pointer">
								<ToolsIcon className="h-4 w-4 " />
								<h1>Tools</h1>
							</div>
						</div>
					)}

					{/* Learn More */}
					<div
						onClick={() => toggleExpand("learnMore")}
						className="flex justify-between items-center border border-gray-100 hover:border-gray-300 px-4 py-2 rounded-xl"
					>
						<h1 className="text-sm font-semibold">Learn more</h1>
						{expand.learnMore ? <ChevronUp /> : <ChevronDown />}
					</div>
					{expand.learnMore && (
						<div className="space-y-5 px-5 tracking-wider text-gray-500">
							<h1>How It Works</h1>
							<h1> FAQ</h1>
							<h1>About Us</h1>
							<h1>Contact</h1>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
