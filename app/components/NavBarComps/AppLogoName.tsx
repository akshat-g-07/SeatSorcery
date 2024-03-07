import Image from "next/image";
import Link from "next/link";

export default function AppLogoName() {
  return (
    <>
      <div className="flex items-center px-5 w-9/12 md:w-4/12">
        <Link href={"/"} className="flex">
          <div className="flex items-center w-20 cursor-pointer">
            <Image src="/logo.png" alt="Logo" width={100} height={100} />
          </div>
          <div className="flex items-center font-LogoFont pr-1 text-4xl cursor-pointer">
            Seat
            <span
              className="duration-700 text-primaryColor"
              id="appLogoNameSpan"
            >
              Sorcery
            </span>
          </div>
        </Link>
      </div>
    </>
  );
}
