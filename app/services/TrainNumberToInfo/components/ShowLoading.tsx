import Skeleton from "@mui/material/Skeleton";

export default function ShowLoading() {
  return (
    <>
      <div className="w-full h-full p-10">
        <Skeleton variant="rounded" sx={{ width: "100%", height: "3.5rem" }} />
        <Skeleton
          variant="rounded"
          sx={{ marginTop: "1.5rem", width: "100%", height: "6rem" }}
        />
        <div className="w-full h-max flex justify-between mt-6">
          <Skeleton variant="rounded" sx={{ width: "45%", height: "4.5rem" }} />
          <Skeleton variant="rounded" sx={{ width: "45%", height: "4.5rem" }} />
        </div>
        <div className="w-full h-max flex justify-between mt-2">
          <Skeleton variant="rounded" sx={{ width: "45%", height: "4.5rem" }} />
          <Skeleton variant="rounded" sx={{ width: "45%", height: "4.5rem" }} />
        </div>
      </div>
    </>
  );
}
