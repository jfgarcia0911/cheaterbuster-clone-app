import React from "react";
import { motion } from "framer-motion";
import CustomImage from "../ui/CustomImage";
import SearchIcon from "../icons/SearchIcon";
import EChartsIcon from "@/components/icons/EchartsIcon";
import FireIcon from "@/components/icons/FireIcon";
import FaceIcon from "@/components/icons/FaceIcon";
import Container from "../ui/Container";
import { MoveRight } from "lucide-react";

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
				<motion.div
					className="flex whitespace-nowrap tracking-widest "
					animate={{ x: ["0%", "-100%"] }}
					transition={{
						repeat: Infinity,
						duration: 20,
						ease: "linear",
					}}
				>
					{/* First set of items */}
					{Array.from({ length: 40 }).map((_, i) => (
						<div
							key={i}
							className={`flex items-center gap-2  text-white  text-xs  p-2`}
						>
							<h1 className="font-extrabold">SEARCH ACROSS DATING APPS</h1>
							<SearchIcon className="h-4 w-4 rotate-90" />
						</div>
					))}
					=
				</motion.div>
			</div>
			<div className="flex items-center justify-center ">
				<div className="flex  justify-center w-350 mx-5 sm:mx-10 md:mx-25 overflow-hidden">
					<div className=" text-white  flex flex-col items-start justify-start mt-5 w-full ">
						<h1 className="text-3xl">
							THE <span className="font-bold">AI</span> THAT{" "}
						</h1>
						<h1 className="text-6xl">
							<span className="font-bold">CATCHES</span> CHEATER{" "}
						</h1>
						<p className="tracking-wider text-sm mt-1 font-light">
							Dating App Search ● Social Profile Analysis ● FaceTrace: Photo
							Search ● Reverse Phone/Name/Address Search{" "}
						</p>
						<motion.div
							className="flex whitespace-nowrap tracking-widest space-x-6"
							animate={{ x: ["0%", "-100%"] }}
							transition={{
								repeat: Infinity,
								duration: 400,
								ease: "linear",
							}}
						>
							{Array.from({ length: 40 }).map((_, repeatIndex) =>
								items.map(
									(
										item: { link: string; dimensions: string },
										index: number,
									) => (
										<CustomImage
											key={`${repeatIndex}-${index}`}
											link={item.link}
											dimensions={item.dimensions}
										/>
									),
								),
							)}
						</motion.div>
					</div>
				</div>
			</div>
			<div className="flex  justify-center">
				<div className="flex justify-center w-350 mx-5 sm:mx-10 md:mx-25   rounded-t-2xl">
					<div className="flex w-full ">
						<div className="w-2/3 py-1 text-center rounded-t-2xl bg-white font-bold text-lg">
							Bust a Cheater
						</div>
						<div className="w-1/3 py-1 text-center rounded-t-2xl bg-brand-red font-bold text-lg text-white mr-4">
							DateSafe Tools
						</div>
					</div>
				</div>
			</div>
			<div className="flex  justify-center">
				<div className="flex justify-center w-350 mx-5 sm:mx-10 md:mx-25  bg-white  rounded-tr-2xl">
					<div className="flex w-full px-6  justify-between space-x-4">
						<div className="border-2 border-b-8 rounded-2xl  border-brand-red  py-4 w-1/3 text-center">
							<div className="justify-center items-center flex flex-col space-y-2">
								<EChartsIcon className="h-7 w-7 text-brand-red" />
								<h1 className="text-sm font-bold tracking-widest text-brand-red">
									DATING APP SEARCH
								</h1>
							</div>
						</div>
						<div className="border-2 rounded-2xl  border-brand-yellow  py-4 w-1/3 text-center">
							<div className="justify-center items-center flex flex-col space-y-2">
								<FireIcon className="h-7 w-7 text-brand-yellow" />
								<h1 className="text-sm font-bold tracking-widest text-brand-yellow">
									FOLLOWING AI
								</h1>
							</div>
						</div>
						<div className="border-2  rounded-2xl  border-brand-blue  py-4 w-1/3 text-center">
							<div className="justify-center items-center flex flex-col space-y-2">
								<FaceIcon className="h-7 w-7 text-brand-blue" />
								<h1 className="text-sm font-bold tracking-widest text-brand-blue">
									FACE TRACE
								</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Container>
				<div className="items-start px-6 mr-auto py-5">
					<p className="font-extrabold tracking-wider">
						Are they active on dating apps?{" "}
						<span className="font-normal text-sm">
							Find their profile. See last active time, location, new photos.
						</span>
					</p>
				</div>
			</Container>
			<Container>
				<div className="w-full">
					<div className="flex justify-between space-x-2 w-full px-6">
						<div className="w-2/3">
							<input
								type="text"
								name="first-name"
								placeholder="Enter first name only."
								className="border-3 w-full rounded-2xl py-4 pl-4 tracking-widest"
							/>
						</div>

						<div className="w-1/3 flex space-x-2 items-center justify-center py-4 rounded-xl text-white bg-brand-red opacity-70">
							<button className="font-bold">Get Results</button>
							<MoveRight className="w-6" />
						</div>
					</div>
          <div>p</div>
				</div>
			</Container>
		</div>
	);
}
