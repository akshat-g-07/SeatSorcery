"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LogInButton from "./LogInButton";

export default function SmallSideBar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <div
        className={`h-full flex items-center justify-center rounded-lg scale-125 origin-bottom-left border-2 duration-1000 ${
          navOpen ? "border-white bg-transparent" : "border-[#0048FF] bg-white"
        }`}
        onClick={() => {
          if (navOpen) {
            document.getElementById("appLogoNameSpan")!.style.color = "#0048FF";
          } else {
            document.getElementById("appLogoNameSpan")!.style.color = "white";
          }
          setNavOpen(!navOpen);
        }}
      >
        <div className="translate-y-2 -translate-x-2">
          {navOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>
      <AnimatePresence>
        {navOpen && (
          <motion.div
            className="h-screen w-screen fixed top-0 left-0 -z-10 bg-[#0048FF]"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "tween",
              duration: "0.7",
            }}
          >
            <div className="h-28 w-full border-b-4 mb-10" />
            <Link href={"/"} className="text-xl ml-5">
              <HomeIcon sx={{ fontSize: "20px", marginBottom: "4px" }} /> {"  "}
              Home
              <div className="w-full h-1 bg-blue-800 mb-10" />
            </Link>
            <Link href={"/services"} className="text-xl ml-5">
              <SettingsIcon sx={{ fontSize: "20px", marginBottom: "4px" }} />{" "}
              {"  "}
              Services
              <div className="w-full h-1 bg-blue-800 mb-10" />
            </Link>
            <Link href={"/support"} className="text-xl ml-5">
              <SupportAgentIcon
                sx={{ fontSize: "20px", marginBottom: "4px" }}
              />{" "}
              {"  "}Support
              <div className="w-full h-1 bg-blue-800 mb-10" />
            </Link>
            <div className="w-full flex justify-center">
              <Link href={"/login"}>
                <LogInButton />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
