import React from "react";
import EChartsIcon from "../icons/EchartsIcon";
import FireIcon from "../icons/FireIcon";
import FaceIcon from "../icons/FaceIcon";
import Link from "next/link";
import PhoneIcon from "../icons/PhoneIcon";
import SearchIcon from "../icons/SearchIcon";
import UserIcon from "../icons/UserIcon";
import HouseIcon from "../icons/HouseIcon";
const bgColors: Record<string, string> = {
	red: "bg-brand-red",
	blue: "bg-brand-blue",
	yellow: "bg-brand-yellow",
	gray: "bg-brand-gray",
};

type Path =
	| "home"
	| "followingai"
	| "facetrace"
	| "reverse-phone-lookup"
	| "name-search"
	| "address-search";

interface ProductHighlightsProps {
	activeItem: Path;
}

export default function ProductHighlights({
	activeItem,
}: ProductHighlightsProps) {
	// Each product has its own link and route key for highlighting
	const items = [
		{
			title: "DATING APP SEARCH",
			icon: <EChartsIcon className="h-8 w-8 text-white" />,
			variant: "red",
			href: "/",
			routeKey: "home",
		},
		{
			title: "FOLLOWING AI",
			icon: <FireIcon className="h-6 w-6 text-white" />,
			variant: "yellow",
			href: "/followingai",
			routeKey: "followingai",
		},
		{
			title: "FACE TRACE",
			icon: <FaceIcon className="h-7 w-7 text-white" />,
			variant: "blue",
			href: "/facetrace",
			routeKey: "facetrace",
		},
	];

	const tools = [		
		{
			title: "PHONE SEARCH",
			icon: <PhoneIcon  />,
			variant: "gray",
			href: "/reverse-phone-lookup",
			routeKey: "reverse-phone-lookup",
		},
		{
			title: "NAME SEARCH",
			icon: <UserIcon  />,
			variant: "gray",
			href: "/name-search",
			routeKey: "name-search",
		},
		{
			title: "ADDRESS SEARCH",
			icon: <HouseIcon  />,
			variant: "gray",
			href: "/address-search",
			routeKey: "address-search",
		},
	];

	// Headline and description for the current active product
	const content = {
		home: {
			headline: "Are they active on dating apps?",
			description:
				"Find their profile. See last active time, location, new photos.",
		},
		followingai: {
			headline: "Discover who they're really following",
			description:
				"AI-powered analysis of their social media activity and connections.",
		},
		facetrace: {
			headline: "Using fake photos?",
			description: "AI Face Search. Find matching photos and public profiles.",
		},
		"reverse-phone-lookup": {
			headline: "Reverse Phone Search:",
			description: "Who are they texting? / Who is behind this number?",
		},
		"name-search": {
			headline: "Name/Identity Search:",
			description: "Am I getting catfished? / Who is the person they're talking to?",
		},
		"address-search": {
			headline: "Reverse Address Search:",
			description: "Who lives in this address?",
		},
	}[activeItem];

  const isSearchActive = 
  activeItem === "reverse-phone-lookup" || 
  activeItem === "name-search" || 
  activeItem === "address-search";

	return (
		<div className="flex justify-center ">
			<div className={`flex justify-center w-350 mx-5 sm:mx-10 lg:mx-15 bg-white ${isSearchActive? "rounded-tl-2xl" : "rounded-tr-2xl"} `}>
				<div className="w-full">
					<div className="flex w-full px-6 justify-between space-x-4 mt-6">
						{isSearchActive ? (
							<>
								<Link
									href="/facetrace"
									className={`
                    rounded-2xl h-30 w-1/3 flex justify-center items-center text-center cursor-pointer hover:brightness-70 
                    border border-brand-blue `}
								>
									<div className="justify-center items-center flex flex-col space-y-1 md:space-y-2">
										<div
											className={`rounded-full w-10 h-10 bg-brand-blue items-center flex justify-center `}
										>
											<FaceIcon className="h-6 w-6 text-white" />
										</div>
										<h1
											className={`text-xs scale-80 md:scale-100 md:text-sm font-extrabold tracking-widest text-brand-blue`}
										>
											FACE TRACE
										</h1>
									</div>
								</Link>
								{tools.map((tool, index) => {
									const isActive = activeItem === tool.routeKey;
									return (
										<Link
											key={index}
											href={tool.href}
											className={`
                    rounded-2xl h-30 w-1/3 flex justify-center items-center text-center cursor-pointer hover:brightness-70 
                    ${isActive ? `border-2 border-b-10 border-brand-${tool.variant} ` : `border border-brand-${tool.variant} `}
                  `}
										>
											<div className="justify-center items-center flex flex-col space-y-1 md:space-y-2">
												<div
													className={`rounded-full w-12 h-12 bg-black text-white items-center flex justify-center `}
												>
													{tool.icon}
												</div>
												<h1
													className={`text-xs scale-80 md:scale-100 md:text-sm font-extrabold tracking-widest text-black`}
												>
													{tool.title}
												</h1>
											</div>
										</Link>
									);
								})}
							</>
						) : (
							items.map((item, index) => {
								const isActive = activeItem === item.routeKey;
								return (
									<Link
										key={index}
										href={item.href}
										className={`
                    rounded-2xl h-30 w-1/3 flex justify-center items-center text-center cursor-pointer hover:brightness-70 
                    ${isActive ? `border-2 border-b-10 border-${item.variant}-500 ` : `border border-${item.variant}-500 `}
                  `}
									>
										<div className="justify-center items-center flex flex-col space-y-1 md:space-y-2">
											<div
												className={`rounded-full w-10 h-10 bg-${item.variant}-500 items-center justify-center flex`}
											>
												{item.icon}
											</div>
											<h1
												className={`text-xs scale-80 md:scale-100 md:text-sm font-extrabold tracking-widest text-${item.variant}-500`}
											>
												{item.title}
											</h1>
										</div>
									</Link>
								);
							})
						)}
					</div>
					<div className="items-start px-6 mr-auto py-5">
						<p className="font-extrabold tracking-wider">
							{content.headline}
							<span className="font-normal ml-1 text-sm block md:inline tracking-widest">
								{content.description}
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
