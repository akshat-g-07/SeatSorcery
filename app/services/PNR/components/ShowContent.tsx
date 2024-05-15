import { PNRDetails } from "./PNRTypes";

export default function ShowContent({
  responseData,
}: {
  responseData: PNRDetails | null;
}) {
  const Date01 =
    responseData?.arrival_data.arrival_date &&
    new Date(responseData.arrival_data.arrival_date);
  const Date02 =
    responseData?.departure_data.departure_date &&
    new Date(responseData.departure_data.departure_date);
  const diffInMs =
    Date01 && Date02 && Math.abs(Date01.getTime() - Date02.getTime());
  const hours = diffInMs && Math.floor(diffInMs / 3600000);
  const minutes = diffInMs && Math.floor((diffInMs % 3600000) / 60000);

  return (
    <>
      <div className="w-full h-full font-semibold p-10 flex flex-col">
        <div className="w-full h-max flex items-end justify-center">
          <span className="border-r-2 border-l-2 px-2 border-black h-full items-end flex text-xs w-1/12">
            {responseData?.train_name.split("-")[1]}
          </span>
          <span className="border-r-2 px-2 border-black h-full items-end flex text-3xl font-bold w-6/12">
            {responseData?.train_name.split("-")[0]}
          </span>
        </div>
        <div className="w-full h-max flex mt-6">
          <div className="w-1/2 h-24 flex flex-col justify-center">
            <p className="text-2xl font-bold">
              {responseData?.boarding_station}
            </p>
            <p className="font-normal mt-4">
              {responseData?.departure_data.departure_date}
            </p>
          </div>
          <div className="w-[2px] h-24 flex flex-col items-center">
            <div className="w-full h-6 bg-black" />
            <div className="w-24 h-12 bg-slate-300/50 rounded-md sticky flex flex-col items-center justify-center">
              <p>
                {hours}:{minutes}
              </p>
              <p>{responseData?.class}</p>
            </div>
            <div className="w-full h-6 bg-black" />
          </div>
          <div className="w-1/2 h-24 flex flex-col justify-center text-right">
            <p className="text-2xl font-bold">
              {responseData?.reservation_upto}
            </p>
            <p className="font-normal mt-4">
              {responseData?.arrival_data.arrival_date}
            </p>
          </div>
        </div>
        <div className="w-full h-max flex mt-5 flex-wrap gap-x-5 justify-between">
          {responseData?.passenger.map((item) => {
            return (
              <div
                key={item.name}
                className="w-[45%] m-4 p-4 border-r-2 border-black"
              >
                <p className="text-xl font-semibold">Name: {item.name}</p>
                <p className="text-sm text-black/75">
                  Booking Status: {item.booking_status}
                </p>
                <p className="text-sm text-black/75">
                  Current Status: {item.current_status}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
