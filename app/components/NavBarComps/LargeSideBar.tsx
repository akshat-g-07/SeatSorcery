import Link from "next/link";
import SettingsIcon from "@mui/icons-material/Settings";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import LogInButton from "./LogInButton";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function LargeSideBar() {
  const pathname = usePathname();

  const LinkArray = [
    {
      hrefVal: "/sorcery",
      idVal: "sorceryNavBar",
      iconVal: (
        <AutoFixHighIcon sx={{ fontSize: "20px", marginBottom: "4px" }} />
      ),
      linkVal: "Start Sorcery",
    },
    {
      hrefVal: "/services",
      idVal: "servicesNavBar",
      iconVal: <SettingsIcon sx={{ fontSize: "20px", marginBottom: "4px" }} />,
      linkVal: "Services",
    },
    {
      hrefVal: "/support",
      idVal: "supportNavBar",
      iconVal: (
        <SupportAgentIcon sx={{ fontSize: "20px", marginBottom: "4px" }} />
      ),
      linkVal: "Support",
    },
  ];

  const mouseEntered = (idVal: string) => {
    document.getElementById(idVal)!.style.width = "110%";
  };

  const mouseLeft = (idVal: string) => {
    document.getElementById(idVal)!.style.width = "0";
  };

  useEffect(() => {
    if (pathname === "/sorcery") {
      document.getElementById("sorceryNavBar")!.style.width = "110%";
      document.getElementById("servicesNavBar")!.style.width = "0";
      document.getElementById("supportNavBar")!.style.width = "0";
    } else if (pathname.startsWith("/services")) {
      document.getElementById("sorceryNavBar")!.style.width = "0";
      document.getElementById("servicesNavBar")!.style.width = "110%";
      document.getElementById("supportNavBar")!.style.width = "0";
    } else if (pathname.startsWith("/support")) {
      document.getElementById("sorceryNavBar")!.style.width = "0";
      document.getElementById("servicesNavBar")!.style.width = "0";
      document.getElementById("supportNavBar")!.style.width = "110%";
    }
  }, [pathname]);

  return (
    <>
      <div className="w-full h-full flex justify-around items-center">
        {LinkArray.map((item) => {
          return (
            <Link
              key={item.linkVal}
              href={item.hrefVal}
              onMouseEnter={() => {
                !pathname.startsWith(item.hrefVal) && mouseEntered(item.idVal);
              }}
              onMouseLeave={() =>
                !pathname.startsWith(item.hrefVal) && mouseLeft(item.idVal)
              }
            >
              {item.iconVal} {"  "}
              {item.linkVal}
              <div
                id={item.idVal}
                className="w-0 h-2 bg-primaryColor duration-300"
              />
            </Link>
          );
        })}

        <Link href={"/login"}>
          <LogInButton />
        </Link>
      </div>
    </>
  );
}
