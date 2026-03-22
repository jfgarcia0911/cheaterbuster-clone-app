import { motion } from "framer-motion";
import SearchIcon from "../icons/SearchIcon";
import FireIcon from "../icons/FireIcon";
import FaceIcon from "../icons/FaceIcon";
import ToolsIcon from "../icons/ToolsIcon";
import useScrollDirection from "@/hooks/useScrollDirection";

interface TopBannerProps {
	activeItem: string | null;
}

export default function TopBanner({ activeItem = "/" }: TopBannerProps) {
  const isScrollingDown = useScrollDirection()
	const getContent = () => {
		switch (activeItem) {
			case "/":
				return {
					text: "SEARCH ACROSS DATING APPS",
					icon: SearchIcon,
					color: "bg-brand-red",
				};
			case "/followingai":
				return {
					text: "ANALYZE ANY INSTAGRAM OR TIKTOK PEOPLE",
					icon: FireIcon,
					color: "bg-brand-yellow",
				};
			case "/facetrace":
				return {
					text: "SUPERPOWERED AI FACE SEARCH FOR PHOTO MATCHES",
					icon: FaceIcon,
					color: "bg-brand-blue",
				};
			case "/tools":
				return {
					text: "REVERESE PHONE NAME AND ADDRESS SEARCH, ALL IN ONE",
					icon: ToolsIcon,
					color: "bg-brand-gray",
				};
			default:
				// fallback when no item is active (e.g., initial state)
				return {
					text: "SEARCH ACROSS DATING APPS",
					icon: SearchIcon,
				};
		}
	};

	const { text, icon: Icon, color } = getContent();

	return (
		<div className={`overflow-hidden ${isScrollingDown? "mt-20" : ""}  ${color} brightness-110`}>
			<motion.div
				className="flex whitespace-nowrap tracking-widest "
				animate={{ x: ["0%", "-200%"] }}
				transition={{
					repeat: Infinity,
					duration: 30,
					ease: "linear",
				}}
			>
				{/* First set of items */}
				{Array.from({ length: 40 }).map((_, i) => (
					<div
						key={i}
						className={`flex items-center gap-2  text-white  text-xs font-bold p-2`}
					>
						<h1 className="font-extrabold">{text}</h1>
						<Icon className="h-4 w-4 " />
					</div>
				))}
				=
			</motion.div>
		</div>
	);
}
