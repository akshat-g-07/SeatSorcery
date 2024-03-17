import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ServicesSectionHover from "./ServiceSectionHover";

export default function ServicesSection() {
  var serviceContainerCSS =
    "flex flex-col lg:flex-row w-full h-auto items-center justify-evenly";
  var serviceTemplateCSS =
    "bg-green-500 h-48 rounded-md w-10/12 lg:w-1/3 m-5 flex items-end p-5";
  return (
    <>
      <div
        className="h-auto w-full"
        style={{
          backgroundColor: "red",
          background: "linear-gradient(180deg, #d1dff066 0%, #ffffff66 100%)",
        }}
      >
        <div className={serviceContainerCSS}>
          <div className={serviceTemplateCSS}>
            <ServicesSectionHover idVal="service01">
              Train Number Information
              <div className="w-auto flex h-[25px]">
                <ArrowOutwardIcon sx={{ fontSize: "15px" }} />
              </div>
            </ServicesSectionHover>
          </div>
          <div className={serviceTemplateCSS}>
            <ServicesSectionHover idVal="service02">
              Station Code to Name
              <div className="w-auto flex h-[25px]">
                <ArrowOutwardIcon sx={{ fontSize: "15px" }} />
              </div>
            </ServicesSectionHover>
          </div>
          <div className={serviceTemplateCSS}>
            <ServicesSectionHover idVal="service03">
              Train Number to Name
              <div className="w-auto flex h-[25px]">
                <ArrowOutwardIcon sx={{ fontSize: "15px" }} />
              </div>
            </ServicesSectionHover>
          </div>
        </div>
      </div>
      <div className={serviceContainerCSS}>
        <div className={`${serviceTemplateCSS} lg:!w-2/3`}>
          <ServicesSectionHover idVal="service04">
            Live Train Status
            <div className="w-auto flex h-[25px]">
              <ArrowOutwardIcon sx={{ fontSize: "15px" }} />
            </div>
          </ServicesSectionHover>
        </div>
        <div className={serviceTemplateCSS}>
          <ServicesSectionHover idVal="service05">
            PNR Check
            <div className="w-auto flex h-[25px]">
              <ArrowOutwardIcon sx={{ fontSize: "15px" }} />
            </div>
          </ServicesSectionHover>
        </div>
      </div>
      <div className={serviceContainerCSS}>
        <div className={serviceTemplateCSS}>
          <ServicesSectionHover idVal="service06">
            Seat Availability
            <div className="w-auto flex h-[25px]">
              <ArrowOutwardIcon sx={{ fontSize: "15px" }} />
            </div>
          </ServicesSectionHover>
        </div>
        <div className={serviceTemplateCSS}>
          <ServicesSectionHover idVal="service07">
            Train Schedule
            <div className="w-auto flex h-[25px]">
              <ArrowOutwardIcon sx={{ fontSize: "15px" }} />
            </div>
          </ServicesSectionHover>
        </div>
        <div className={serviceTemplateCSS}>
          <ServicesSectionHover idVal="service08">
            Coach Layout
            <div className="w-auto flex h-[25px]">
              <ArrowOutwardIcon sx={{ fontSize: "15px" }} />
            </div>
          </ServicesSectionHover>
        </div>
      </div>
    </>
  );
}
