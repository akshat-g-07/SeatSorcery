import { TrainInfoSuccess } from "./TrainInfoTypes";

export default function ShowContent({
  responseData,
}: {
  responseData: TrainInfoSuccess | null;
}) {
  return (
    <>
      <div className="w-full h-full font-semibold p-10 flex flex-col">
        <div className="w-full h-max flex items-end">
          <span className="border-r-2 border-l-2 px-2 border-black h-full items-end flex text-xs w-1/12">
            {responseData?.trainNumber}
          </span>
          <span className="border-r-2 px-2 border-black h-full items-end flex w-2/12">
            {responseData?.trainName}
          </span>
          <span className="border-r-2 px-2 border-black h-full items-end flex text-3xl font-bold w-8/12">
            {responseData?.trainFullName}
          </span>
          <span className="border-r-2 px-2 border-black h-full items-end flex text-xs w-1/12">
            {responseData?.returnTrainNumber}
          </span>
        </div>
        <div className="w-full h-max flex mt-6">
          <div className="w-1/2 h-20">
            <p className="text-2xl font-bold">
              {responseData?.stationFrom.stationName}
            </p>
            <p className="text-lg">{responseData?.stationFrom.stationCode}</p>
            <p className="font-normal">{responseData?.departureTime}</p>
          </div>
          <div className="w-[2px] h-20 flex flex-col items-center">
            <div className="w-full h-5 bg-black" />
            <div className="w-24 h-10 bg-slate-300/50 rounded-md sticky flex items-center justify-center">
              {responseData?.duration}
            </div>
            <div className="w-full h-5 bg-black" />
          </div>
          <div className="w-1/2 h-20 text-right">
            <p className="text-2xl font-bold">
              {responseData?.stationTo.stationName}
            </p>
            <p className="text-lg">{responseData?.stationTo.stationCode}</p>
            <p className="font-normal">{responseData?.arrivalTime}</p>
          </div>
        </div>
        <div className="w-full h-max flex mt-5">
          <div className="w-1/2">
            <div className="p-1 my-1">Average Speed</div>
            <div className="border-l-2 border-black/50 p-1 my-1">
              {responseData?.avgSpeed}
            </div>
            <div className="p-1 my-1">Distance</div>
            <div className="border-l-2 border-black/50 p-1 my-1">
              {responseData?.distance}
            </div>
          </div>
          <div className="w-1/2">
            <div className="p-1 my-1">Pantry</div>
            <div className="border-l-2 border-black/50 p-1 my-1">
              {responseData?.hasPantry.toString()[0].toUpperCase()}
              {responseData?.hasPantry.toString().slice(1)}
            </div>
            <div className="p-1 my-1">Number of Stops</div>{" "}
            <div className="border-l-2 border-black/50 p-1 my-1">
              {responseData?.numberOfStops}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
