import { PNRDetails } from "./PNRTypes";

export default function ShowContent({
  responseData,
}: {
  responseData: PNRDetails | null;
}) {
  const boardingTime =
    responseData?.data.boardingInfo.arrivalTime &&
    new Date("1970-01-01T" + responseData.data.boardingInfo.arrivalTime + "Z");
  const destinationTime =
    responseData?.data.destinationInfo.arrivalTime &&
    new Date(
      "1970-01-01T" + responseData.data.destinationInfo.arrivalTime + "Z"
    );
  const diffInMs =
    boardingTime &&
    destinationTime &&
    Math.abs(boardingTime.getTime() - destinationTime.getTime());
  const hours = diffInMs && Math.floor(diffInMs / 3600000);
  const minutes = diffInMs && Math.floor((diffInMs % 3600000) / 60000);

  return (
    <>
      <div className="w-full h-full font-semibold p-10 flex flex-col">
        <div className="w-full h-max flex items-end justify-center">
          <span className="border-r-2 border-l-2 px-2 border-black h-full items-end flex text-xs w-1/12">
            {responseData?.data.trainInfo.trainNo}
          </span>
          <span className="border-r-2 px-2 border-black h-full items-end flex text-3xl font-bold w-6/12">
            {responseData?.data.trainInfo.name}
          </span>
        </div>
        <div className="w-full h-max flex mt-6">
          <div className="w-1/2 h-24 flex flex-col justify-center">
            <p className="text-2xl font-bold">
              <span className="text-xs text-black/70 mr-2">
                {responseData?.data.boardingInfo.stationCode}
              </span>
              {responseData?.data.boardingInfo.stationName}
            </p>
            <p className="font-semibold text-lg">
              {responseData?.data.trainInfo.dt}&nbsp;
              <span className="text-sm text-black/50">
                +{Number(responseData?.data.boardingInfo.travellingDay) - 1}
              </span>
            </p>
            <p className="font-normal text-sm">
              {responseData?.data.boardingInfo.arrivalTime}
            </p>
          </div>
          <div className="w-[2px] h-24 flex flex-col items-center">
            <div className="w-full h-6 bg-black" />
            <div className="w-max px-4 h-12 bg-slate-300/50 rounded-md sticky flex flex-col items-center justify-center">
              <p>
                {hours}:{minutes}
              </p>
              <p>
                <span className="text-sm text-black/75">Journey Day(s):</span>
                {Number(responseData?.data.destinationInfo.travellingDay) -
                  Number(responseData?.data.boardingInfo.travellingDay) +
                  1}
              </p>
            </div>
            <div className="w-full h-6 bg-black" />
          </div>
          <div className="w-1/2 h-24 flex flex-col justify-center text-right">
            <p className="text-2xl font-bold">
              {responseData?.data.destinationInfo.stationName}
              <span className="text-xs text-black/70 ml-2">
                {responseData?.data.destinationInfo.stationCode}
              </span>
            </p>
            <p className="font-semibold text-lg">
              {responseData?.data.trainInfo.dt}&nbsp;
              <span className="text-sm text-black/50">
                +{Number(responseData?.data.destinationInfo.travellingDay) - 1}
              </span>
            </p>
            <p className="font-normal text-sm">
              {responseData?.data.destinationInfo.arrivalTime}
            </p>
          </div>
        </div>
        <div className="w-full h-max mt-5">
          <p>Seat(s):</p>
          <div className="w-full flex flex-wrap gap-x-5 justify-between">
            {responseData?.data.passengerInfo.map((item) => {
              return (
                <div
                  key={item.currentBerthNo}
                  className="w-[45%] m-4 p-4 border-r-2 border-black"
                >
                  <p className="text-sm text-black/75">
                    Booking Status: {item.currentCoach}
                  </p>
                  <p className="text-sm text-black/75">
                    Current Status: {item.currentBerthNo}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
