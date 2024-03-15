import Image from "next/image";

export default function IntroSection() {
  return (
    <>
      <div className="bg-[#F0F8FF] h-auto w-screen flex flex-col lg:flex-row items-center justify-center py-10">
        <div className="font-bold lg:font-extrabold text-primaryColor text-center h-full w-10/12 lg:w-1/3 mx-20 text-base lg:text-3xl leading-7 lg:leading-[50px]">
          Empowering your train journey experience – Seamlessly Swap Seats and
          Unlock a World of Convenience for Your Ultimate Journey Experience!
        </div>
        <div className="bg-red-500 w-10/12 lg:w-2/3 mx-20 h-48 lg:h-96 relative mt-5 lg:mt-0">
          <Image src="" fill={true} alt="homepage" />
        </div>
      </div>
    </>
  );
}
