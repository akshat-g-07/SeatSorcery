import Image from "next/image";
import AppLogoName from "../NavBarComps/AppLogoName";
import Tooltip from "@mui/material/Tooltip";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Link from "next/link";

export default function FooterSection() {
  return (
    <>
      <div className="w-full mt-10">
        <div className="flex flex-col items-center w-full">
          <div className="w-max">
            <AppLogoName />
          </div>
          <div className="text-sm font-semibold w-max opacity-60">
            Helping You With Your Train Journey
          </div>
          <div className="w-max font-bold mt-5">
            Made With Hard Work And ❤️ By Akshat Garg
          </div>
          <div className="w-max">
            <Link
              href={"https://www.linkedin.com/in/akshat-garg-580322241/"}
              target="_blank"
              className="mx-5 animate-pulse"
            >
              <Tooltip title="LinkedIn" arrow>
                <LinkedInIcon />
              </Tooltip>
            </Link>
            <Link
              href={"https://github.com/akshat-g-07/"}
              target="_blank"
              className="mx-5 animate-pulse"
            >
              <Tooltip title="Github" arrow>
                <GitHubIcon />
              </Tooltip>
            </Link>
            <Link
              href={"mailto:akshatg805@gmail.com"}
              className="mx-5 animate-pulse"
            >
              <Tooltip title="Email" arrow>
                <EmailIcon />
              </Tooltip>
            </Link>
            <Link
              href={"https://akshat-garg.netlify.app"}
              target="_blank"
              className="mx-5 animate-pulse"
            >
              <Tooltip title="Portfolio" arrow>
                <AccountBoxIcon />
              </Tooltip>
            </Link>
          </div>
          <div className="text-md opacity-40 mt-5">All rights reserved.</div>
        </div>
        <div className="w-full relative h-20 lg:h-48">
          <Image src="/footer.png" fill={true} alt="faqBG" />
        </div>
      </div>
    </>
  );
}
