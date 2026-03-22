import React from "react";
import FaceIcon from "../icons/FaceIcon";
import EChartsIcon from "../icons/EchartsIcon";
import FireIcon from "../icons/FireIcon";
import PhoneIcon from "../icons/PhoneIcon";
import Container from "../ui/Container";
import BottomBanner from "./BottomBanner";

type Path = "home" | "followingai" | "facetrace" | "reverse-phone-lookup";

interface HeroTitleProps {
	activeItem: Path;
}

export default function HeroTitle({ activeItem  }: HeroTitleProps) {
	const content = {
		home: {
			title: (
				<>
					<h1 className="text-2xl md:text-3xl">
						THE <span className="font-bold">AI</span> THAT{" "}
					</h1>
					<h1 className="text-4xl lg:text-6xl">
						<span className="font-bold">CATCHES</span> CHEATER
					</h1>
				</>
			),
			icon: <EChartsIcon className="w-25 md:w-50 h-25 md:h-45 rotate-10" />,
		},
		followingai: {
			title: (
				<>
					<h1 className="text-2xl md:text-3xl">
						FOLLOWING <span className="font-bold">AI</span>
					</h1>
					<h1 className="text-4xl lg:text-6xl font-extrabold">
						SOCIAL PROFILE & <span className="block">FOLLOWERS DETECTOR</span>
					</h1>
				</>
			),
			icon: <FireIcon className="w-20 md:w-35 h-25 md:h-45 rotate-10" />,
		},
		facetrace: {
			title: (
				<>
					<h1 className="text-2xl md:text-3xl">
						<span className="font-bold">AI</span> FACE SEARCH
					</h1>
					<h1 className="text-4xl lg:text-6xl font-extrabold">
						REVERSE IMAGE & <span className="block">FACE RECOGNITION TOOL</span>
					</h1>
				</>
			),
			icon: <FaceIcon className="w-20 md:w-40 h-25 md:h-45 rotate-10" />,
		},
		"reverse-phone-lookup": {
			title: (
				<>
					<h1 className="text-2xl md:text-3xl font-bold">REVERSE</h1>
					<h1 className="text-4xl lg:text-6xl">PHONE LOOKUP</h1>
				</>
			),
			icon: <PhoneIcon className="w-20 md:w-40 h-25 md:h-45 rotate-10" />,
		},
	}[activeItem];

	return (
		<div className="flex items-center justify-center ">
			<div className="flex  justify-center w-350 mx-5 sm:mx-10 lg:mx-15 overflow-hidden">
				<div className="w-full">
					<div className="relative text-white flex flex-col items-start justify-start mt-5 w-full">
						{content.title}
						<p className="tracking-widest text-sm mt-1 font-light">
							Dating App Search ● Social Profile Analysis ● FaceTrace: Photo
							Search ● Reverse Phone/Name/Address Search
						</p>
						<div
							aria-hidden="true"
							className="absolute -top-3 md:-top-6 right-0 opacity-20 blur-[2px]"
						>
							{content.icon}
						</div>
					</div>
					<BottomBanner />
				</div>
			</div>
		</div>
	);
}
