import React from "react";
// import TweetEmbed from "@/components/ui/TweetEmbed";
import { motion } from "framer-motion";
import { Tweet } from 'react-tweet'
const tweetIds = [
	"1626595726569635840",
	"1826726572222808230",
	"1846267484930035846",
	"1825871427095973919",
	"1875638997265084480",
	"1849104785909178684",
	"1866269258595840063",
];

export default function TestimonialSection() {
	return (
    <div className="relative">
    <h1 className="absolute top-7 text-white/80 tracking-widest mx-5 sm:mx-10 lg:mx-15 font-bold text-sm">
            THE AI YOU&apos;VE SEEN  💥EVERYWHERE💥</h1>
			<div className="flex justify-center ">
        
				<div className="flex justify-center w-350 mx-5 sm:mx-10 lg:mx-15  overflow-hidden ">
					
            <div className="flex">
						<motion.div
							className="flex whitespace-nowrap tracking-widest  text-white"
							animate={{ x: ["0%", "-100%"] }}
							transition={{
								repeat: Infinity,
								duration: 20,
								ease: "linear",
							}}
						>
							{Array.from({ length: 1}).map((_, repeatIndex) =>
								tweetIds.map((tweetId, index) => {
									return (
										<div key={`${repeatIndex}-${index}`} className="w-70 scale-80 cursor-pointer">
                      <Tweet id={tweetId} />
										</div>
									);
								}),
							)}
						</motion.div>
					</div>
				</div>
			</div></div>
	);
}
