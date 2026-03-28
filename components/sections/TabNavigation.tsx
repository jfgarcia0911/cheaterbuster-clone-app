import Link from "next/link";
import React from "react";

interface TabNavigationProps {
	activeItem: string | null;
}

export default function TabNavigation({
	activeItem = "/",
}: TabNavigationProps) {
	const getContent = () => {
		switch (activeItem) {
			case "/":
				return {
					text: "SEARCH ACROSS DATING APPS",
					color: "bg-brand-red",
				};
			case "/followingai":
				return {
					text: "ANALYZE ANY INSTAGRAM OR TIKTOK PEOPLE",
					color: "bg-brand-yellow",
				};
			case "/facetrace":
				return {
					text: "SUPERPOWERED AI FACE SEARCH FOR PHOTO MATCHES",
					color: "bg-brand-blue",
				};
			case "/reverse-phone-lookup":
				return {
					text: "REVERESE PHONE NAME AND ADDRESS SEARCH, ALL IN ONE",
					color: "bg-brand-gray",
				};
			default:
				// fallback when no item is active (e.g., initial state)
				return {
					text: "SEARCH ACROSS DATING APPS",
					color: "bg-brand-red",
				};
		}
	};
const isCheaterTab = ["/", "/followingai", "/facetrace"].includes(activeItem ?? "");


	const {  color } = getContent();
	return (
	
		<div className="flex items-center  justify-center">
			<div className="flex justify-center w-350 mx-5 sm:mx-10 lg:mx-15  ">
				<div className="flex w-full ">
					{isCheaterTab ? (
						<>
							<div  className="w-2/3 py-1 text-center rounded-t-2xl bg-white font-bold text-lg ">
								Bust a Cheater
							</div>
							<Link href="reverse-phone-lookup"
								className={`w-1/3 py-1 text-center rounded-t-2xl ${color} font-bold text-lg text-white mr-4`}
							>
								DateSafe Tools
							</Link>
						</>
					) : (
						<>
							<Link href="/" className="w-1/3 py-1 text-center rounded-t-2xl ${color} text-white font-bold text-lg bg-gray-500 ml-4">
								Bust a Cheater
							</Link>
							<div
								className={`w-2/3 py-1 text-center rounded-t-2xl bg-white   font-bold text-lg `}
							>
								<h1>DateSafe Tools</h1>
								
                {!isCheaterTab && <p className="text-xs lg:block hidden">
									Tools to stay safe when getting to know each other
								</p>}
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
}
