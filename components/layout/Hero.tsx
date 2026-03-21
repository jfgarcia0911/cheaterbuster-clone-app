import React from "react";
import { motion } from "framer-motion";
import CustomImage from "../ui/CustomImage";
import SearchIcon from "../icons/SearchIcon";
import EChartsIcon from "@/components/icons/EchartsIcon";
import FireIcon from "@/components/icons/FireIcon";
import FaceIcon from "@/components/icons/FaceIcon";
import Container from "../ui/Container";
import { MoveRight } from "lucide-react";
import TopBanner from "../sections/TopBanner";
import BottomBanner from "../sections/BottomBanner";
import HeroTitle from "../sections/HeroTitle";
import TabNavigation from "../sections/TabNavigation";
import ProductHighlights from "../sections/ProductHighlights";

export default function Hero() {
	const items = [
		{ link: "/tmz.png", dimensions: "h-15 w-15" },
		{ link: "/independent.png", dimensions: "h-15 w-40" },
		{ link: "/call-her-daddy.png", dimensions: "h-15 w-60" },
		{ link: "/cosmopolitan.png", dimensions: "h-15 w-30" },
		{ link: "/barstool-sports.png", dimensions: "h-15 w-20" },
		{ link: "/vanity-fair.png", dimensions: "h-15 w-30" },
		{ link: "/gma.png", dimensions: "h-15 w-20" },
		{ link: "/buzz-feed.png", dimensions: "h-15 w-25" },
	];
	return (
		<div className="bg-linear-to-b from-red-700 to-black">
			<div className={`overflow-hidden  bg-red-600 brightness-90`}>
				<TopBanner activeItem="appSearch" />
			</div>
			<div className="flex items-center justify-center ">
				<div className="flex  justify-center w-350 mx-5 sm:mx-10 lg:mx-15 overflow-hidden">
					<div className="w-full">
						<HeroTitle color="red" />
						<BottomBanner />
					</div>
				</div>
			</div>
			<TabNavigation />

			<div className="flex  justify-center">
				<div className="flex justify-center w-350 mx-5 sm:mx-10 lg:mx-15  bg-white  rounded-tr-2xl">
					<div className="w-full">
            <ProductHighlights color="red"/>
						

						<div className="flex flex-wrap justify-between gap-2 w-full px-6">
							<div className="w-full md:w-2/3">
								<input
									type="text"
									name="first-name"
									placeholder="Enter first name only."
									className="border-3 w-full rounded-2xl py-4 pl-4 tracking-widest"
								/>
							</div>

							<div className=" flex flex-1 space-x-2 items-center justify-center py-4 rounded-xl text-white bg-brand-red opacity-70">
								<button className="font-bold">Get Results</button>
								<MoveRight className="w-6" />
							</div>
						</div>

						<div className="px-6 w-full  my-4">
							{" "}
							<div className="border-t"></div>
						</div>



<div className="flex flex-col lg:flex-row w-ful justify-between lg:items-center px-6 gap-2 pb-4">
						<div className=" flex items-center lg:items-start flex-row lg:flex-col w-ful ">
							<CustomImage
								link="/date-safe.png"
								dimensions="h-10 w-35 lg:w-55"
							/>
							<p className=" text-sm lg:text-xs">
								Also included with your search:
							</p>
						</div>
						<div className="flex flex-wrap items-center w-full gap-2 ">
							<div className="flex-1 flex items-center justify-center space-x-2 border px-6 py-2 rounded-xl border-brand-blue text-brand-blue text-nowrap">
								<FaceIcon className="h-6 w-6 " />
								<h1 className="text-xs font-extrabold">FACE TRACE</h1>
							</div>
							<div className="flex-1 flex items-center justify-center space-x-2 border px-6 py-2 rounded-xl  text-nowrap">
								<FaceIcon className="h-6 w-6 " />
								<h1 className="text-xs font-extrabold">PHONE SEARCH</h1>
							</div>
							<div className="flex-1 flex items-center justify-center space-x-2 border px-6 py-2 rounded-xl  text-nowrap">
								<FaceIcon className="h-6 w-6 " />
								<h1 className="text-xs font-extrabold">NAME SEARCH</h1>
							</div>
							<div className="flex-1 flex items-center justify-center space-x-2 border px-6 py-2 rounded-xl  text-nowrap">
								<FaceIcon className="h-6 w-6 " />
								<h1 className="text-xs font-extrabold">ADDRESS SEARCH</h1>
							</div>
						</div>
					</div>
					</div>
				</div>
			</div>

			<Container>
				<div className="w-full">
					
				</div>
			</Container>
		</div>
	);
}
