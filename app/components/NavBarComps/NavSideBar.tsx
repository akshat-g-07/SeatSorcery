"use client";

import { useState, useEffect } from "react";
import SmallSideBar from "./SmallSideBar";
import LargeSideBar from "./LargeSideBar";

export default function NavSideBar() {
  const [screenSize, setScreenSize] = useState("small");

  const handleResize = () => {
    let tempScreenSize = window.innerWidth > 768 ? "large" : "small";
    setScreenSize(tempScreenSize);
  };

  useEffect(() => {
    let tempScreenSize = window.innerWidth > 768 ? "large" : "small";
    setScreenSize(tempScreenSize);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="h-full w-3/12 md:w-8/12">
      {screenSize === "small" && window.innerWidth < 768 ? (
        <SmallSideBar />
      ) : (
        <LargeSideBar />
      )}
    </div>
  );
}
