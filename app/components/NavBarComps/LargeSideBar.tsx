import Link from "next/link";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LogInButton from "./LogInButton";

export default function LargeSideBar() {
  const mouseEntered = (idVal: string) => {
    document.getElementById(idVal).style.width = "110%";
  };

  const mouseLeft = (idVal: string) => {
    document.getElementById(idVal).style.width = "0";
  };
  return (
    <>
      <div className="w-full h-full flex justify-around items-center">
        <Link
          href={"/"}
          onMouseEnter={() => {
            mouseEntered("homeNavBar");
          }}
          onMouseLeave={() => mouseLeft("homeNavBar")}
        >
          <HomeIcon sx={{ fontSize: "20px", marginBottom: "4px" }} /> {"  "}
          Home
          <div
            id="homeNavBar"
            className="w-0 h-2 bg-primaryColor duration-300"
          />
        </Link>
        <Link
          href={"/services"}
          onMouseEnter={() => {
            mouseEntered("servicesNavBar");
          }}
          onMouseLeave={() => mouseLeft("servicesNavBar")}
        >
          <SettingsIcon sx={{ fontSize: "20px", marginBottom: "4px" }} /> {"  "}
          Services
          <div
            id="servicesNavBar"
            className="w-0 h-2 bg-primaryColor duration-300"
          />
        </Link>
        <Link
          href={"/support"}
          onMouseEnter={() => {
            mouseEntered("supportNavBar");
          }}
          onMouseLeave={() => mouseLeft("supportNavBar")}
        >
          <SupportAgentIcon sx={{ fontSize: "20px", marginBottom: "4px" }} />{" "}
          {"  "}Support
          <div
            id="supportNavBar"
            className="w-0 h-2 bg-primaryColor duration-300"
          />
        </Link>
        <Link href={"/login"}>
          <LogInButton />
        </Link>
      </div>
    </>
  );
}
