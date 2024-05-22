import Skeleton from "@mui/material/Skeleton";

export default function ShowLoading() {
  return (
    <>
      <div className="w-full h-full p-10 flex flex-col justify-between">
        <Skeleton variant="rounded" sx={{ width: "100%", height: "100px" }} />
        <Skeleton
          variant="rounded"
          sx={{ width: "100%", height: "100px", marginTop: "10px" }}
        />
      </div>
    </>
  );
}
