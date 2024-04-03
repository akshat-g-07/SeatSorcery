import Skeleton from "@mui/material/Skeleton";

export default function ShowLoading() {
  return (
    <>
      <div className="w-full h-full p-10 flex justify-between">
        <Skeleton variant="rounded" sx={{ width: "48%", height: "100%" }} />
        <Skeleton variant="rounded" sx={{ width: "48%", height: "100%" }} />
      </div>
    </>
  );
}
