import { TrainSchedule } from "./TrainScheduleTypes";

export default function ShowContent({
  responseData,
}: {
  responseData: TrainSchedule | null;
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
        </div>
        <div className="w-full h-max flex mt-10 justify-between">
          <div className="mr-2 border-r border-black/70 pr-2">
            Sunday
            <p className="text-black/75 py-2 mt-3">
              {responseData?.trainRunsOn.sunday.toString()[0].toUpperCase()}
              {responseData?.trainRunsOn.sunday.toString().slice(1)}
            </p>
          </div>
          <div className="mx-2 border-r border-black/70 px-2">
            Monday
            <p className="text-black/75 py-2 mt-3">
              {responseData?.trainRunsOn.monday.toString()[0].toUpperCase()}
              {responseData?.trainRunsOn.monday.toString().slice(1)}
            </p>
          </div>
          <div className="mx-2 border-r border-black/70 px-2">
            Tuesday
            <p className="text-black/75 py-2 mt-3">
              {responseData?.trainRunsOn.tueday.toString()[0].toUpperCase()}
              {responseData?.trainRunsOn.tueday.toString().slice(1)}
            </p>
          </div>
          <div className="mx-2 border-r border-black/70 px-2">
            Wednesday
            <p className="text-black/75 py-2 mt-3">
              {responseData?.trainRunsOn.wednesday.toString()[0].toUpperCase()}
              {responseData?.trainRunsOn.wednesday.toString().slice(1)}
            </p>
          </div>
          <div className="mx-2 border-r border-black/70 px-2">
            Thursday
            <p className="text-black/75 py-2 mt-3">
              {responseData?.trainRunsOn.thursday.toString()[0].toUpperCase()}
              {responseData?.trainRunsOn.thursday.toString().slice(1)}
            </p>
          </div>
          <div className="mx-2 border-r border-black/70 px-2">
            Friday
            <p className="text-black/75 py-2 mt-3">
              {responseData?.trainRunsOn.friday.toString()[0].toUpperCase()}
              {responseData?.trainRunsOn.friday.toString().slice(1)}
            </p>
          </div>
          <div className="ml-2 border-r border-black/70 px-2">
            Saturday
            <p className="text-black/75 py-2 mt-3">
              {responseData?.trainRunsOn.saturday.toString()[0].toUpperCase()}
              {responseData?.trainRunsOn.saturday.toString().slice(1)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
