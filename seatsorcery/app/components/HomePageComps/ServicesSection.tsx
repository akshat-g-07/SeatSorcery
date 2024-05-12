import ServicesSectionHover from "./ServiceSectionHover";

export default function ServicesSection() {
  var serviceContainerCSS =
    "flex flex-col lg:flex-row w-full h-auto items-center justify-evenly";

  return (
    <>
      <div
        className="h-auto w-full mb-5"
        style={{
          backgroundColor: "red",
          background: "linear-gradient(180deg, #d1dff066 0%, #ffffff66 100%)",
        }}
      >
        <div className="flex items-center justify-center -translate-y-3">
          <div className="w-max flex items-center justify-center rounded-lg bg-slate-200/75 hover:bg-slate-300/50">
            <div className="h-[2px] w-16 bg-slate-300" />
            <div className="font-bold mx-2">Other Services</div>
            <div className="h-[2px] w-16 bg-slate-300" />
          </div>
        </div>
        <div className={serviceContainerCSS}>
          <ServicesSectionHover idVal="service01" imgSrc="trainNumberInfo.jpg">
            Train Number Information
          </ServicesSectionHover>
          <ServicesSectionHover idVal="service02" imgSrc="stationCode.jpg">
            Search Stations
          </ServicesSectionHover>
          <ServicesSectionHover
            idVal="service03"
            imgSrc="trainbetweenStations.png"
          >
            Train Between Stations
          </ServicesSectionHover>
        </div>
        <div className={serviceContainerCSS}>
          <ServicesSectionHover idVal="service04" imgSrc="liveStatus.jpg">
            Live Train Status
          </ServicesSectionHover>
          <ServicesSectionHover idVal="service05" imgSrc="pnrCheck.png">
            PNR Check
          </ServicesSectionHover>
        </div>
        <div className={serviceContainerCSS}>
          <ServicesSectionHover idVal="service06" imgSrc="seatAvail.jpg">
            Seat Availability
          </ServicesSectionHover>
          <ServicesSectionHover idVal="service07" imgSrc="trainSchedule.png">
            Train Schedule
          </ServicesSectionHover>
          <ServicesSectionHover idVal="service08" imgSrc="trainLayout.jpg">
            Coach Layout
          </ServicesSectionHover>
        </div>
      </div>
    </>
  );
}
