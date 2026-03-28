import { motion } from "framer-motion";
import CustomImage from "../ui/CustomImage";

export default function BottomBanner() {
	const items = [
		{link: "/tmz.png", dimensions: "h-15 w-15", alt: "TNZ Logo"  },
		{ link: "/independent.png", dimensions: "h-15 w-40", alt: "Independent Logo" },
		{ link: "/call-her-daddy.png", dimensions: "h-15 w-60", alt: "Call Her Daddy Logo" },
		{ link: "/cosmopolitan.png", dimensions: "h-15 w-30" , alt: "Cosmopolitan Logo"},
		{ link: "/barstool-sports.png", dimensions: "h-15 w-20", alt: "Barstool Sports Logo" },
		{ link: "/vanity-fair.png", dimensions: "h-15 w-30", alt: "Vanity Fair Logo" },
		{ link: "/gma.png", dimensions: "h-15 w-20", alt: "GMA Logo" },
		{ link: "/buzz-feed.png", dimensions: "h-15 w-25", alt: "Buzz Feed Logo" },
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
						(item: { link: string; dimensions: string; alt: string; }, index: number) => (
							<CustomImage
								key={`${repeatIndex}-${index}`}
								link={item.link}
								dimensions={item.dimensions}
                alt={item.alt}
							/>
						),
					),
				)}
			</motion.div>
		</div>
	);
}
