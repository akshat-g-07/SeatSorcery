"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <div className="w-full h-[calc(100vh-6rem)] flex">
        <div className="w-1/5 h-full p-5 flex flex-col justify-center bg-slate-300/50">
          <Link
            href={"/services/TrainNumberToInfo"}
            className={`py-1 hover:border-b-2 hover:border-primaryColor duration-100 my-3 ${
              pathname === "/services/TrainNumberToInfo"
                ? "border-b-2 border-primaryColor"
                : "border-0"
            }`}
          >
            Train Number to Information
          </Link>
          <Link
            href={"/services/SearchStations"}
            className={`py-1 hover:border-b-2 hover:border-primaryColor duration-100 my-3 ${
              pathname === "/services/SearchStations"
                ? "border-b-2 border-primaryColor"
                : "border-0"
            }`}
          >
            Search Stations
          </Link>
          <Link
            href={"/services/TrainBetweenStations"}
            className={`py-1 hover:border-b-2 hover:border-primaryColor duration-100 my-3 ${
              pathname === "/services/TrainBetweenStations"
                ? "border-b-2 border-primaryColor"
                : "border-0"
            }`}
          >
            Train Between Stations
          </Link>
          <Link
            href={"/services/LiveTrainStatus"}
            className={`py-1 hover:border-b-2 hover:border-primaryColor duration-100 my-3 ${
              pathname === "/services/LiveTrainStatus"
                ? "border-b-2 border-primaryColor"
                : "border-0"
            }`}
          >
            Live Train Status
          </Link>
          <Link
            href={"/services/PNR"}
            className={`py-1 hover:border-b-2 hover:border-primaryColor duration-100 my-3 ${
              pathname === "/services/PNR"
                ? "border-b-2 border-primaryColor"
                : "border-0"
            }`}
          >
            PNR Check
          </Link>
          <Link
            href={"/services/SeatAvailability"}
            className={`py-1 hover:border-b-2 hover:border-primaryColor duration-100 my-3 ${
              pathname === "/services/SeatAvailability"
                ? "border-b-2 border-primaryColor"
                : "border-0"
            }`}
          >
            Seat Availability
          </Link>
          <Link
            href={"/services/TrainSchedule"}
            className={`py-1 hover:border-b-2 hover:border-primaryColor duration-100 my-3 ${
              pathname === "/services/TrainSchedule"
                ? "border-b-2 border-primaryColor"
                : "border-0"
            }`}
          >
            Train Schedule
          </Link>
          <Link
            href={"/services/CoachLayout"}
            className={`py-1 hover:border-b-2 hover:border-primaryColor duration-100 my-3 ${
              pathname === "/services/CoachLayout"
                ? "border-b-2 border-primaryColor"
                : "border-0"
            }`}
          >
            Coach Layout
          </Link>
        </div>
        <div className="w-4/5 h-full p-5 overflow-y-auto bg-slate-200/25 flex flex-col items-center pt-16">
          {children}
        </div>
      </div>
    </>
  );
}
