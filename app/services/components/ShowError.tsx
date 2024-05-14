import WarningIcon from "@mui/icons-material/Warning";
import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";

export default function ShowError({ errorMessage }: { errorMessage: string }) {
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
          {errorMessage}
        </Alert>
      </Snackbar>
    </>
  );
}
