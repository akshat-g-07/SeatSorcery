"use client";

import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";

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
            document.getElementById("appLogoNameSpan").style.color = "#0048FF";
          } else {
            document.getElementById("appLogoNameSpan").style.color = "white";
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
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
