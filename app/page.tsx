"use client";
import Hero from "@/components/layout/Hero";
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

	useCloseProductsNavbar(1024, setOpen);
	
	return (
		<div className={`${open.menu && "overflow-y-hidden h-screen "} `}>
				<Hero />
		</div>
	);
}
