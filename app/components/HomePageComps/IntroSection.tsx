import Image from "next/image";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function IntroSection() {
  return (
    <>
      <div className="bg-[#F0F8FF] h-auto w-screen py-9">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="font-bold lg:font-extrabold text-primaryColor text-center h-full w-10/12 lg:w-1/3 mx-20 text-base lg:text-3xl leading-7 lg:leading-[50px]">
            Empowering your train journey experience – Seamlessly Swap Seats and
            Unlock a World of Convenience for Your Ultimate Journey Experience!
          </div>
          <div className="bg-red-500 w-10/12 lg:w-2/3 mx-20 h-48 lg:h-96 relative mt-5 lg:mt-0">
            <Image src="" fill={true} alt="homepage" />
          </div>
        </div>
        <div className="py-5 text-center text-gray-700/90 font-semibold leading-7 text-base lg:text-lg mt-6 w-10/12 mx-auto">
          You travelling in a train and want to switch seats with fellow
          passenger for some reason. Don&apos;t worry!
          <br />
          <span className="text-primaryColor font-bold">SeatSorcery</span> is
          here to help you to. Along with that, there are multiple other
          services to help you with your journey.
          <br />
        </div>
        <Link href={"/login"}>
          <div className="w-36 h-auto text-black flex justify-evenly items-center mx-auto lg:hover:opacity-50">
            Get Started
            <ArrowForwardIcon className="text-primaryColor" />
          </div>
        </Link>
      </div>
    </>
  );
}
