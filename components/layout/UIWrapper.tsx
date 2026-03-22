'use client'
import React from 'react'
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import { useCloseProductsNavbar } from "@/hooks/useCloseProductsNavbar";
import { useState } from "react";
import Footer from './Footer';
import { usePathname } from 'next/navigation';

export default function UIWrapper({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState<{ [key: string]: boolean }>({
		menu: false,
		productsNavbar: false,
		productsSidebar: false,
		learnMoreSidebar: false,
		learnMore: false,
	});
  const [activeItem, setActiveItem] = useState<string | null>("appSearch");
const pathname = usePathname();
  useCloseProductsNavbar(1024, setOpen);

  const getContent = (pathname) => {
      switch (activeItem) {
        case "/":
          return {
            color: "bg-brand-red",
          };
        case "/followingai":
          return {
            color: "bg-brand-yellow",
          };
        case "/facetrace":
          return {
            color: "bg-brand-blue",
          };
        case "/tools":
          return {
            color: "bg-brand-gray",
          };
        default:
          // fallback when no item is active (e.g., initial state)
          return {
            color: "bg-brand-red",
          };
      }
    };
  const toggleOpen = (section: string) => {
    setOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className={`${open.menu && "overflow-y-hidden h-screen"} bg-linear-to-b from-red-700  to-black `}>
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
      <main>{children}</main>
      <Footer/>
    </div>

  )
}
