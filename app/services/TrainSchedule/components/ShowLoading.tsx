import Skeleton from "@mui/material/Skeleton";

export default function ShowLoading() {
  return (
    <>
      <div className="w-full h-full p-10">
        <Skeleton variant="rounded" sx={{ width: "100%", height: "3.5rem" }} />
        <div className="w-full h-full flex justify-between">
          <Skeleton
            variant="rounded"
            sx={{ marginTop: "1.5rem", width: "12%", height: "6rem" }}
          />
          <Skeleton
            variant="rounded"
            sx={{ marginTop: "1.5rem", width: "12%", height: "6rem" }}
          />
          <Skeleton
            variant="rounded"
            sx={{ marginTop: "1.5rem", width: "12%", height: "6rem" }}
          />
          <Skeleton
            variant="rounded"
            sx={{ marginTop: "1.5rem", width: "12%", height: "6rem" }}
          />
          <Skeleton
            variant="rounded"
            sx={{ marginTop: "1.5rem", width: "12%", height: "6rem" }}
          />
          <Skeleton
            variant="rounded"
            sx={{ marginTop: "1.5rem", width: "12%", height: "6rem" }}
          />
          <Skeleton
            variant="rounded"
            sx={{ marginTop: "1.5rem", width: "12%", height: "6rem" }}
          />
        </div>
      </div>
    </>
  );
}
