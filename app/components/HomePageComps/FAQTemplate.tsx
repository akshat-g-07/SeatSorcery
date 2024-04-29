"use client";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

export default function FAQTemplate({
  ques,
  ans,
}: {
  ques: string;
  ans: string;
}) {
  const [expand, setExpand] = useState(false);

  return (
    <div
      className="w-full"
      style={{
        boxShadow: `${expand ? "none" : "rgba(0, 0, 0, 0.1) 0px 15px 30px"}`,
      }}
    >
      <div
        className="w-full flex bg-stone-300/70 py-5 cursor-pointer border-2 border-black"
        onClick={() => {
          setExpand(!expand);
        }}
      >
        <div className={`w-11/12 lg:text-xl font-semibold pl-2`}>{ques}</div>
        <div className="w-1/12 flex items-center">
          <ExpandMoreIcon
            sx={{
              transition: "all 300ms",
              transform: `${expand ? "rotate(180deg)" : "rotate(0deg)"}`,
            }}
          />
        </div>
      </div>
      <div
        className={`w-full mb-2 transition-[height] duration-700 overflow-y-hidden border-t-0 border border-stone-600 ${
          expand ? "h-52 lg:h-20" : "h-0"
        }`}
      >
        <div className="w-10/12 p-2">{ans}</div>
      </div>
    </div>
  );
}
