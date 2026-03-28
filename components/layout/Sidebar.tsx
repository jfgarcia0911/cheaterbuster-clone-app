import React, { useRef } from "react";
import { X, ChevronUp, ChevronDown } from "lucide-react";
import EChartsIcon from "@/components/icons/EchartsIcon";
import FireIcon from "@/components/icons/FireIcon";
import FaceIcon from "@/components/icons/FaceIcon";
import ToolsIcon from "@/components/icons/ToolsIcon";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/config";
import CustomImage from "../ui/CustomImage";
import { useClickOutside } from "@/hooks/useClickOutside";

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
	const { user } = useAuth();
	const ref = useRef<HTMLDivElement>(null);

  // Close sidebar when clicking outside
  useClickOutside(ref, () => toggleOpen("menu"));

  if (!open.menu) return null;

	return (
		<div
			ref={ref}
			className="absolute flex flex-col top-0 right-0 w-95 h-screen py-6 px-4 bg-white z-50"
		>
			<div className="flex justify-between">
				<h1 className="text-gray-400 text-xs tracking-widest font-semibold">
					MENU
				</h1>
				<X className="h-5 cursor-pointer" onClick={() => toggleOpen("menu")} />
			</div>
			<div className="mt-10">
				<div className="space-y-4">
					{user && (
						<div className="flex items-center gap-3 ml-4 mb-8">
							<div className="rounded-full overflow-hidden w-10">
								<CustomImage link={user?.photoURL} dimensions="h-10 w-10" alt="User Profile Picture" />
							</div>{" "}
							<h2 className="font-semibold text-sm">{user?.email}</h2>
						</div>
					)}
					{/* Products */}
					<button
						onClick={() => toggleOpen("productsSidebar")}
						className="flex justify-between items-center border border-gray-100 hover:border-gray-300 px-4 py-2 rounded-xl select-none w-full"
					>
						<h2 className="text-sm font-semibold">Products</h2>
						{open.productsSidebar ? <ChevronUp /> : <ChevronDown />}
					</button>
					{open.productsSidebar && (
						<div className="space-y-5 px-5 select-none">
							<div
								onClick={() => {
									setActiveItem("appSearch");
									toggleOpen("menu");
								}}
								className="flex items-center space-x-2 font-semibold text-red-500 hover:opacity-80 cursor-pointer"
							>
								<EChartsIcon className="h-4 w-4 " />
								<h1>App Search</h1>
							</div>
							<div
								onClick={() => {
									setActiveItem("followingAI");
									toggleOpen("menu");
								}}
								className="flex items-center space-x-2 font-semibold text-yellow-500 hover:opacity-80 cursor-pointer"
							>
								<FireIcon className="h-4 w-4 " />
								<h1>Following AI</h1>
							</div>
							<div
								onClick={() => {
									setActiveItem("facetrace");
									toggleOpen("menu");
								}}
								className="flex items-center space-x-2 font-semibold text-blue-500 hover:opacity-80 cursor-pointer"
							>
								<FaceIcon className="h-4 w-4 " />
								<h1>FaceTrace</h1>
							</div>
							<div
								onClick={() => {
									setActiveItem("tools");
									toggleOpen("menu");
								}}
								className="flex items-center space-x-2 font-semibold text-gray-500 hover:opacity-80 cursor-pointer"
							>
								<ToolsIcon className="h-4 w-4 " />
								<h1>Tools</h1>
							</div>
						</div>
					)}

					{/* Learn More */}
					<button
						onClick={() => toggleOpen("learnMoreSidebar")}
						className="flex justify-between items-center border border-gray-100 hover:border-gray-300 px-4 py-2 rounded-xl select-none w-full"
					>
						<h2 className="text-sm font-semibold">Learn more</h2>
						{open.learnMoreSidebar ? <ChevronUp /> : <ChevronDown />}
					</button>
					{open.learnMoreSidebar && (
						<div className="space-y-5 px-5 tracking-wider text-gray-500 select-none">
							<p className="hover:text-black cursor-pointer">How It Works</p>
							<p className="hover:text-black cursor-pointer"> FAQ</p>
							<p className="hover:text-black cursor-pointer">About Us</p>
							<p className="hover:text-black cursor-pointer">Contact</p>
						</div>
					)}

					{/* Searches */}
					<div className="flex justify-between items-center border border-gray-100 hover:border-gray-300 px-4 py-2 rounded-xl cursor-pointer">
						<h2 className="text-sm font-semibold ">Searches</h2>
					</div>

					{/* My Account */}
					{user ? (
						<>
							<button
								onClick={() => toggleOpen("myAccountSidebar")}
								className="flex justify-between items-center border border-gray-100 hover:border-gray-300 px-4 py-2 rounded-xl select-none w-full"
							>
								<h2 className="text-sm font-semibold ">My Account</h2>
								{open.learnMoreSidebar ? <ChevronUp /> : <ChevronDown />}
							</button>
							{open.myAccountSidebar && (
								<div className="space-y-5 px-5 tracking-wider text-gray-500 select-none">
									<p className="cursor-pointer text-black hover:opacity-80">
										Account
									</p>
									<p className=" cursor-pointer text-black hover:opacity-80">
										{" "}
										Searches
									</p>
									<button
										onClick={() => signOut(auth)}
										className=" cursor-pointer text-red-500 hover:opacity-80"
									>
										Sign Out
									</button>
								</div>
							)}
						</>
					) : (
						<>
							<div className="flex flex-col items-center gap-2 mt-10">
								<Link
									href="/signin"
									className="text-black w-full text-center cursor-pointer"
								>
									<div className="mx-6 bg-white p-2 rounded-xl font-bold border border-transparent hover:border-gray-300">
										Sign In
									</div>
								</Link>
								<Link
									href="/signup"
									className="text-white w-full text-center cursor-pointer hover:opacity-80"
								>
									<div className="mx-6 bg-black p-2 rounded-xl font-bold">
										Sign Up
									</div>
								</Link>
							</div>
						</>
					)}
				</div>
			</div>

			<footer className="mt-auto space-y-4 text-gray-500 text-sm">
				<div className=" flex gap-4">
					<Link href="/">Privacy Policy</Link>
					<Link href="/">Terms of Service</Link>
				</div>
				<h2>© 2024 CheaterbusterClone. All righst reserved.</h2>
			</footer>
		</div>
	);
}
