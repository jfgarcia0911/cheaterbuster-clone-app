"use client";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import { useState } from "react";

export default function Home() {
	const [open, setOpen] = useState<{ [key: string]: boolean }>({
		menu: false,
		productsNavbar: false,
		productsSidebar: false,
		learnMoreSidebar: false,
		learnMore: false,
	});

	const toggleOpen = (section: string) => {
		setOpen((prev) => ({ ...prev, [section]: !prev[section] }));
	};

	return (
		<div className={`${open.menu && "overflow-y-hidden h-screen"} `}>
			<Navbar open={open} toggleOpen={toggleOpen} />

			{open.menu && (
				<Sidebar open={open} toggleOpen={toggleOpen} />
			)}
		</div>
	);
}
