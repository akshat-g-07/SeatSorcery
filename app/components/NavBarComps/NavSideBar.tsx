"use client";

import { useState, useEffect } from "react";
import SmallSideBar from "./SmallSideBar";
import LargeSideBar from "./LargeSideBar";

export default function NavSideBar() {
  const [screenSize, setScreenSize] = useState<string>();

  const handleResize = () => {
    let tempScreenSize = window.innerWidth > 768 ? "large" : "small";
    setScreenSize(tempScreenSize);
  };

  const handleScroll = () => {
    const navElement = document.querySelector("nav");
    if (window.scrollY) {
      navElement.style.backgroundColor = "rgba(255,255,255,0.5)";
      navElement.style.boxShadow = "0 15px 30px rgba(0,0,0,0.1)";
      navElement.style.backdropFilter = "blur(5px)";
    } else {
      navElement.style.backgroundColor = "transparent";
      navElement.style.boxShadow = "none";
      navElement.style.backdropFilter = "none";
    }
  };

  useEffect(() => {
    let tempScreenSize = window.innerWidth > 768 ? "large" : "small";
    setScreenSize(tempScreenSize);
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-full w-3/12 md:w-8/12">
      {screenSize === "small" ? (
        <SmallSideBar />
      ) : (
        screenSize === "large" && <LargeSideBar />
      )}
    </div>
  );
}
