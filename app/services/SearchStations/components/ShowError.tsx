import WarningIcon from "@mui/icons-material/Warning";
import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";

export default function ShowError({ errorCode }: { errorCode: number }) {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div className="w-full h-full flex items-center justify-center font-bold text-2xl opacity-60 cursor-default">
        <WarningIcon />
        &nbsp;Please try again!
      </div>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => {
          setOpen(false);
        }}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity="error"
          onClose={() => {
            setOpen(false);
          }}
        >
          {errorCode === 404
            ? "No Station At Selected Place"
            : "Something was not right!"}
        </Alert>
      </Snackbar>
    </>
  );
}
