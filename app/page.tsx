'use client'
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import { useState,  } from "react";

export default function Home() {
  const [openSidebar, setOpenSidebar] = useState(false);



  return (
    <div className={`${openSidebar && "overflow-y-hidden h-screen"} `}  >
      <Navbar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}/>
      
      {openSidebar && <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}/>}
      
    </div>
  );
}
