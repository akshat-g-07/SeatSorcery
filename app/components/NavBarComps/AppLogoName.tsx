import Image from "next/image";

export default function AppLogoName() {
  return (
    <>
      <div className="flex items-center px-5">
        <div className="flex items-center w-16">
          <Image src="/logo.png" alt="Logo" width={100} height={100} />
        </div>
        <div className="flex items-center font-LogoFont pr-1 text-2xl">
          Seat
          <span className="text-blue-500">Sorcery</span>
        </div>
      </div>
    </>
  );
}
