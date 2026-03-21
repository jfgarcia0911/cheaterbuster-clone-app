import React from "react";
import { motion } from "framer-motion";
import CustomImage from "../ui/CustomImage";
import { div } from "framer-motion/client";

export default function BottomBanner() {
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
		<div className="flex">
			<motion.div
				className="flex whitespace-nowrap tracking-widest space-x-6 text-white"
				animate={{ x: ["0%", "-100%"] }}
				transition={{
					repeat: Infinity,
					duration: 400,
					ease: "linear",
				}}
			>
				{Array.from({ length: 40 }).map((_, repeatIndex) =>
					items.map(
						(item: { link: string; dimensions: string }, index: number) => (
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
	);
}
