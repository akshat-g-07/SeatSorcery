import Image from "next/image";

export default function AppLogoName() {
  return (
    <>
      <div className="flex items-center px-5 w-9/12">
        <div className="flex items-center w-20 cursor-pointer">
          <Image src="/logo.png" alt="Logo" width={100} height={100} />
        </div>
        <div className="flex items-center font-LogoFont pr-1 text-4xl cursor-pointer">
          Seat
          <span
            style={{ color: "#0048FF" }}
            className="duration-700"
            id="appLogoNameSpan"
          >
            Sorcery
          </span>
        </div>
      </div>
    </>
  );
}
