"use client";

import { ReactNode, useEffect, useState } from "react";

export default function ServicesSectionHover({
  idVal,
  children,
}: {
  idVal: string;
  children: ReactNode;
}) {
  const [widthOfElement, setWidthOfElement] = useState<string>();
  const [hoveredElement, setHoveredElement] = useState<HTMLElement>();

  const mouseEnterEvent =
    window.innerWidth < 1024
      ? () => {
          return;
        }
      : () => {
          hoveredElement.style.width = "100%";
          hoveredElement.style.textDecoration = "underline";
          hoveredElement.style.fontWeight = "600";
        };

  const mouseLeaveEvent =
    window.innerWidth < 1024
      ? () => {
          return;
        }
      : () => {
          hoveredElement.style.width = widthOfElement;
          hoveredElement.style.textDecoration = "none";
          hoveredElement.style.fontWeight = "400";
        };

  useEffect(() => {
    let tempElement = document.getElementById(idVal);
    let tempWidth =
      window.innerWidth < 1024
        ? tempElement.offsetWidth
        : tempElement.offsetWidth - 8.5 + "px";
    tempElement.style.width = tempWidth;
    setHoveredElement(tempElement);
    setWidthOfElement(tempWidth);
  }, []);

  return (
    <>
      <div className="w-max lg:cursor-pointer font-[500] lg:font-normal">
        <div
          id={idVal}
          className="whitespace-nowrap flex overflow-hidden duration-300 underline lg:no-underline"
          onMouseEnter={mouseEnterEvent}
          onMouseLeave={mouseLeaveEvent}
        >
          {children}
        </div>
      </div>
    </>
  );
}
