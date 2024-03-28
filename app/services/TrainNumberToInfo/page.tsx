"use client";

import TextField from "@mui/material/TextField";
import { ChangeEvent, useState } from "react";
import { TrainInfoSuccess } from "./components/TrainInfoTypes";
import ShowContent from "./components/ShowContent";
import ShowError from "./components/ShowError";

export default function TrainNumberPage() {
  const [validInput, setValidInput] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [responseError, setResponseError] = useState<boolean>(false);
  const [response, setResponse] = useState<TrainInfoSuccess | null>(null);

  const validateInput = (event: ChangeEvent<HTMLInputElement>) => {
    const regex = /^\d{5}$/;
    let tempValidVal = regex.test(event.target.value);
    setValidInput(!tempValidVal);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setResponse(null);
    setResponseError(false);
    const inputElement = document.getElementById("trainNumberToInfoVal");
    if (inputElement instanceof HTMLInputElement) {
      const inputElementValue = inputElement.value;
      const response = await fetch(
        `/api/trainNumberToInfo/${inputElementValue}`
      );
      const responseVal = await response.json();

      responseVal.status
        ? setResponseError(true)
        : setResponse(responseVal.responseData);
      setLoading(false);
    }
  };

  return (
    <>
      <TextField
        id="trainNumberToInfoVal"
        sx={{ width: "450px" }}
        error={validInput}
        label="Train Number"
        variant="outlined"
        onChange={validateInput}
        helperText={`${
          validInput ? "Train Number should be 5 numeric digits. Eg. 12487" : ""
        }`}
        onKeyDown={(event) => {
          event.key === "Enter" &&
            !validInput &&
            event.target instanceof HTMLInputElement &&
            event.target.value.length &&
            handleSubmit();
        }}
      />
      <div>
        <button
          onClick={handleSubmit}
          disabled={validInput}
          className="border-2 mt-4 border-black w-20 rounded-lg bg-primaryColor hover:bg-primaryColor/75 p-2 font-bold text-white"
        >
          Search
        </button>
      </div>
      {loading && "loading..."}
      {(response || responseError) &&
        (responseError ? (
          <ShowError />
        ) : (
          <ShowContent responseData={response} />
        ))}
    </>
  );
}
