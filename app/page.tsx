"use client";
import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import Marquee from "@/components/ui/Marquee";
import { useCloseProductsNavbar } from "@/hooks/useCloseProductsNavbar";
import { useState } from "react";

export default function Home() {
	const [open, setOpen] = useState<{ [key: string]: boolean }>({
		menu: false,
		productsNavbar: false,
		productsSidebar: false,
		learnMoreSidebar: false,
		learnMore: false,
	});
	const [activeItem, setActiveItem] = useState<string | null>("appSearch");

	useCloseProductsNavbar(1024, setOpen);

	const toggleOpen = (section: string) => {
		setOpen((prev) => ({ ...prev, [section]: !prev[section] }));
	};

	return (
		<div className={`${open.menu && "overflow-y-hidden h-screen"} `}>
			<Navbar
				open={open}
				toggleOpen={toggleOpen}
				activeItem={activeItem}
				setActiveItem={setActiveItem}
			/>

			{open.menu && (
				<Sidebar
					open={open}
					toggleOpen={toggleOpen}
					setActiveItem={setActiveItem}
				/>
			)}

			{/* <Marquee activeItem={activeItem} /> */}
      <Hero/>
		</div>
	);
}
