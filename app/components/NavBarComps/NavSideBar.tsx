"use client";

import { useState, useEffect } from "react";
import SmallSideBar from "./SmallSideBar";

export default function NavSideBar() {
  const [screenSize, setScreenSize] = useState("small");

  const handleResize = () => {
    let tempScreenSize = window.innerWidth > 425 ? "large" : "small";
    setScreenSize(tempScreenSize);
  };

  useEffect(() => {
    let tempScreenSize = window.innerWidth > 425 ? "large" : "small";
    setScreenSize(tempScreenSize);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="h-full w-3/12">
      {screenSize === "small" ? <SmallSideBar /> : "LargeSideBar"}
    </div>
  );
}
