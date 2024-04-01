import { Station } from "./StationNameTypes";

export default function ShowContent({
  responseData,
}: {
  responseData: Station[] | null;
}) {
  return (
    <>
      <div className="w-full h-full font-semibold p-10 flex flex-wrap">
        {responseData?.map((item, index) => {
          return (
            <div
              key={index}
              className="w-[calc(50%-1rem)] p-2 m-2 h-16 flex items-center border-x border-black"
            >
              <span className="mr-2 text-black/75"> {index + 1}. </span>
              <span className="mr-2 text-black/50 text-sm font-light">
                {item[0]}
              </span>
              <span className="text-black text-xl font-semibold">
                {item[1]}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}
