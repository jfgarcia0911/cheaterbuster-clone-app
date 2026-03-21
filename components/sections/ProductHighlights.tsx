import React from "react";
import EChartsIcon from "../icons/EchartsIcon";
import FireIcon from "../icons/FireIcon";
import FaceIcon from "../icons/FaceIcon";

type HeroColor = "red" | "yellow" | "blue" | "gray";

interface ProductHighlightsProps {
	color: HeroColor;
}

export default function ProductHighlights({ color }: ProductHighlightsProps) {
	const items = [
		{
			title: "DATING APP SEARCH",
			icon: <EChartsIcon className="h-8 w-8 text-white" />,
			variant: "red",
		},
		{
			title: "FOLLOWING AI",
			icon: <FireIcon className="h-6 w-6 text-white" />,
			variant: "yellow",
		},
		{
			title: "FACE TRACE",
			icon: <FaceIcon className="h-7 w-7 text-white" />,
			variant: "blue",
		},
	];

	const content = {
		red: {
			headline: "Are they active on dating apps?",
			description:
				"Find their profile. See last active time, location, new photos.",
		},
		yellow: {
			headline: "Discover who they're really following",
			description: "AI-powered analysis of their social media activity and connections.",
		},
		blue: {
			headline: "Using fake photos?",
			description: "AI Face Search. Find matching photos and public profiles.",
		},
		gray: {
			headline: "Reverse Phone Search",
			description: "Who are they texting? / Who is behind this number?",
		},
	}[color];

	return (
		<>
			<div className="flex w-full px-6  justify-between space-x-4 mt-6">
				{items.map((item, index) => (
					<div
						key={index}
						className={`${item.variant === color ? "border-2 border-b-10" : "border"}  rounded-2xl  border-brand-${item.variant}  py-4 w-1/3 text-center cursor-pointer`}
					>
						<div className="justify-center items-center flex flex-col space-y-2">
							<div
								className={`rounded-full w-10 h-10 bg-brand-${item.variant} items-center justify-center flex`}
							>
								{item.icon}
							</div>
							<h1
								className={`text-sm font-bold tracking-widest text-brand-${item.variant}`}
							>
								{item.title}
							</h1>
						</div>
					</div>
				))}
			</div>
			<div className="items-start px-6 mr-auto py-5">
				<p className="font-extrabold tracking-wider">
					{content.headline}
					<span className="font-normal ml-1 text-sm block md:inline tracking-widest">
						{content.description}
					</span>
				</p>
			</div>
		</>
	);
}
