import { TrainDetails } from "./TrainBetweenStationsTypes";

export default function ShowContent({
  responseData,
}: {
  responseData: TrainDetails[] | null;
}) {
  return (
    <>
      <div className="w-full h-max p-10 flex flex-col">
        {responseData?.map((item) => {
          return (
            <div
              key={item.id}
              className="w-full border-b-2 border-black flex my-4 p-2 hover:bg-stone-200/50"
            >
              <div className="h-full justify-center w-1/12 flex items-center">
                {item.trainNumber}
              </div>
              <div className="flex flex-col items-center h-max w-10/12">
                <p>
                  <span className="text-xs text-black/75 mr-2 pr-2 border-r border-black/50">
                    {item.trainName}
                  </span>
                  <span className="text-xl font-bold">
                    {item.trainFullName}
                  </span>
                </p>
                <p>
                  <span
                    className={`text-xs ${
                      item.trainRunsOn.sunday
                        ? "text-black/75 font-bold"
                        : "text-black/25 font-light"
                    } mx-2 px-2 border-x border-black/50`}
                  >
                    SUN
                  </span>
                  <span
                    className={`text-xs ${
                      item.trainRunsOn.monday
                        ? "text-black/75 font-bold"
                        : "text-black/25 font-light"
                    } mr-2 pr-2 border-r border-black/50`}
                  >
                    MON
                  </span>
                  <span
                    className={`text-xs ${
                      item.trainRunsOn.tueday
                        ? "text-black/75 font-bold"
                        : "text-black/25 font-light"
                    } mr-2 pr-2 border-r border-black/50`}
                  >
                    TUE
                  </span>
                  <span
                    className={`text-xs ${
                      item.trainRunsOn.wednesday
                        ? "text-black/75 font-bold"
                        : "text-black/25 font-light"
                    } mr-2 pr-2 border-r border-black/50`}
                  >
                    WED
                  </span>
                  <span
                    className={`text-xs ${
                      item.trainRunsOn.thursday
                        ? "text-black/75 font-bold"
                        : "text-black/25 font-light"
                    } mr-2 pr-2 border-r border-black/50`}
                  >
                    THU
                  </span>
                  <span
                    className={`text-xs ${
                      item.trainRunsOn.friday
                        ? "text-black/75 font-bold"
                        : "text-black/25 font-light"
                    } mr-2 pr-2 border-r border-black/50`}
                  >
                    FRI
                  </span>
                  <span
                    className={`text-xs ${
                      item.trainRunsOn.saturday
                        ? "text-black/75 font-bold"
                        : "text-black/25 font-light"
                    } mr-2 pr-2 border-r border-black/50`}
                  >
                    SAT
                  </span>
                </p>
                <p>
                  {item.availableClasses.map((classes) => {
                    return (
                      <span
                        key={`${item.id}${classes}`}
                        className="mx-2 border-x border-black/25 text-xs px-2"
                      >
                        {classes}
                      </span>
                    );
                  })}
                </p>
              </div>
              <div className="h-full justify-center w-1/12 flex items-center">
                {item.returnTrainNumber}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
