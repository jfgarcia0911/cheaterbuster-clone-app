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
    myAccountSidebar: false,
    learnMore: false,
  });
  const [activeItem, setActiveItem] = useState<string | null>("appSearch");
  const pathname = usePathname();

  useCloseProductsNavbar(1024, setOpen);

  // Map route to gradient class (or background color)
  const getBackgroundClass = (path: string) => {
    switch (path) {
      case '/':
        return 'bg-linear-to-b from-red-700 to-black';
      case '/followingai':
        return 'bg-linear-to-b from-yellow-700 to-black';
      case '/facetrace':
        return 'bg-linear-to-b from-blue-700 to-black';
      case '/reverse-phone-lookup':
        return 'bg-linear-to-b from-gray-700 to-black';
      default:
        return 'bg-linear-to-b from-red-700 to-black'; // fallback
    }
  };

  const toggleOpen = (section: string) => {
    setOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className={`${open.menu && "overflow-y-hidden h-screen"} ${getBackgroundClass(pathname)}`}>
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
  );
}