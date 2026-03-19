import { useState, useEffect } from "react";


export function useCloseProductsNavbar(
  breakpoint: number,
  setOpen: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>
) {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= breakpoint) {
        setOpen(prev => ({
          ...prev,
          productsNavbar: false, // only close this one
        }));
      }
      if (window.innerWidth >= breakpoint) {
        setOpen(prev => ({
          ...prev,
          menu: false, // only close this one
        }));
      }
    };

    // Run once on mount
    handleResize();

    // Listen for resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint, setOpen]);
}