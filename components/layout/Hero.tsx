"use client";
import React from "react";
import CustomImage from "../ui/CustomImage";
import FaceIcon from "@/components/icons/FaceIcon";
import Container from "../ui/Container";
import TopBanner from "../sections/TopBanner";
import BottomBanner from "../sections/BottomBanner";
import HeroTitle from "../sections/HeroTitle";
import TabNavigation from "../sections/TabNavigation";
import ProductHighlights from "../sections/ProductHighlights";
import SearchForm from "../sections/SearchForm";
import { usePathname } from "next/navigation";
import IncludedTools from "../sections/IncludedTools";

// Define the allowed path values (same as your Path type)
const pathMap: Record<
	string,
	"home" | "followingai" | "facetrace" | "reverse-phone-lookup"
> = {
	"/": "home",
	"/followingai": "followingai",
	"/facetrace": "facetrace",
	"/reverse-phone-lookup": "reverse-phone-lookup",
};

export default function Hero() {
	const pathname = usePathname();
	const current = pathMap[pathname] ?? "home";

	return (
		<>
			<TopBanner activeItem={pathname} />

			<HeroTitle activeItem={current} />

			<TabNavigation activeItem={pathname} />
			<ProductHighlights activeItem={current} />
      <SearchForm activeItem={current} />
      <IncludedTools/>
			{/* <div className="flex  justify-center mb-15 ">
				<div className="flex justify-center w-350 mx-5 sm:mx-10 lg:mx-15  bg-white  rounded-tr-2xl rounded-b-2xl">
					<div className="w-full">

						
						<div className="flex flex-col lg:flex-row w-ful justify-between lg:items-center px-6 gap-4 pb-4">
							<div className="gap-2 flex items-center lg:items-start flex-row lg:flex-col w-ful ">
								<CustomImage
									link="/date-safe.png"
									dimensions="h-10 w-35 lg:w-55"
								/>
								<p className=" text-sm lg:text-xs">
									Also included with your search:
								</p>
							</div>
							<div className="flex flex-wrap items-center w-full gap-2 ">
								<div className="flex-1 flex items-center justify-center space-x-2 border  p-2 rounded-xl border-brand-blue text-brand-blue text-nowrap">
									<FaceIcon className="h-6 w-6 " />
									<h1 className="text-xs font-extrabold">FACE TRACE</h1>
								</div>
								<div className="flex-1 flex items-center justify-center space-x-2 border  p-2 rounded-xl  text-nowrap">
									<FaceIcon className="h-6 w-6 " />
									<h1 className="text-xs font-extrabold">PHONE SEARCH</h1>
								</div>
								<div className="flex-1 flex items-center justify-center space-x-2 border  p-2 rounded-xl  text-nowrap">
									<FaceIcon className="h-6 w-6 " />
									<h1 className="text-xs font-extrabold">NAME SEARCH</h1>
								</div>
								<div className="flex-1 flex items-center justify-center space-x-2 border p-2 rounded-xl  text-nowrap">
									<FaceIcon className="h-6 w-6 " />
									<h1 className="text-xs font-extrabold">ADDRESS SEARCH</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> */}

			
		</>
	);
}
