"use client";

import { ReactNode, useEffect, useState } from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Image from "next/image";

export default function ServicesSectionHover({
  idVal,
  imgSrc,
  children,
}: {
  idVal: string;
  imgSrc: string;
  children: ReactNode;
}) {
  var serviceTemplateCSS = `h-48 rounded-md w-10/12 m-5 flex items-end p-5 ${
    idVal === "service04" ? "lg:w-2/3" : "lg:w-1/3"
  }`;
  var arrowContainer = "w-auto flex h-[25px]";

  var primaryBGColor = "";
  var hoveredBGColor = "linear-gradient(180deg, #0448ff 0%, #022480 100%)";

  var topVal = "";
  var leftVal = "";

  switch (idVal) {
    case "service01":
      primaryBGColor = "#FFB50D";
      topVal = "17.5%";
      leftVal = "32.5%";
      break;
    case "service02":
      primaryBGColor = "#1A234E";
      topVal = "-17.5%";
      leftVal = "20%";
      break;
    case "service03":
      primaryBGColor = "#FD5659";
      topVal = "-17.5%";
      leftVal = "-20%";
      break;
    case "service04":
      primaryBGColor = "#28DE7C";
      topVal = "-15%";
      leftVal = "-10%";
      break;
    case "service05":
      primaryBGColor = "#1A234E";
      topVal = "-17.5%";
      leftVal = "50%";
      break;
    case "service06":
      primaryBGColor = "#0048FF";
      topVal = "10%";
      leftVal = "20%";
      break;
    case "service07":
      primaryBGColor = "#FFB50D";
      topVal = "-10%";
      leftVal = "32.5%";
      break;
    case "service08":
      primaryBGColor = "#FD5659";
      topVal = "-20%";
      leftVal = "-20%";
      break;
    default:
      break;
  }

  const [widthOfElement, setWidthOfElement] = useState<string>();
  const [hoveredElement, setHoveredElement] = useState<HTMLElement>();

  const outerMouseEnterEvent =
    window.innerWidth < 1024
      ? () => {
          return;
        }
      : () => {
          document.getElementById(`parent${idVal}`).style.background =
            hoveredBGColor;
        };

  const outerMouseLeaveEvent =
    window.innerWidth < 1024
      ? () => {
          return;
        }
      : () => {
          document.getElementById(`parent${idVal}`).style.background =
            primaryBGColor;
        };

  const innerMouseEnterEvent =
    window.innerWidth < 1024
      ? () => {
          return;
        }
      : () => {
          hoveredElement.style.width = "100%";
          hoveredElement.style.textDecoration = "underline";
          hoveredElement.style.fontWeight = "600";
        };

  const innerMouseLeaveEvent =
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
    let tempImageElement = document.getElementById(`image${idVal}`);
    tempImageElement.style.top = topVal;
    tempImageElement.style.left = leftVal;

    let tempParentElement = document.getElementById(`parent${idVal}`);
    tempParentElement.style.background = primaryBGColor;

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
      <div
        id={`parent${idVal}`}
        className={`${serviceTemplateCSS} lg:cursor-pointer overflow-hidden`}
        onMouseEnter={outerMouseEnterEvent}
        onMouseLeave={outerMouseLeaveEvent}
      >
        <div
          id={`image${idVal}`}
          className={`relative rounded-lg ${
            idVal === "service04" ? "h-full" : "h-5/6"
          } ${idVal === "service05" ? "w-1/3" : "w-5/6"} ${
            idVal === "service07" && "scale-y-150"
          }`}
        >
          <Image
            src={`/services/${imgSrc}`}
            fill={true}
            alt={idVal}
            style={{
              borderRadius: "7.5px",
            }}
          />
        </div>
        <div className="w-max font-[500] lg:font-normal absolute">
          <div
            id={idVal}
            className="whitespace-nowrap flex overflow-hidden duration-300 underline lg:no-underline text-white"
            onMouseEnter={innerMouseEnterEvent}
            onMouseLeave={innerMouseLeaveEvent}
          >
            {children}
            <div className={arrowContainer}>
              <ArrowOutwardIcon sx={{ fontSize: "15px" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
