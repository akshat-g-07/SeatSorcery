"use client";

import TextField from "@mui/material/TextField";
import { ChangeEvent, useState } from "react";
import { TrainSchedule } from "./components/TrainScheduleTypes";
import ShowLoading from "./components/ShowLoading";
import ShowContent from "./components/ShowContent";
import ShowError from "../TrainNumberToInfo/components/ShowError";
export default function TrainNumberPage() {
  const [validInput, setValidInput] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [length, setLength] = useState<number | null>();
  const [responseError, setResponseError] = useState<boolean>(false);
  const [response, setResponse] = useState<TrainSchedule | null>(null);

  const validateInput = (event: ChangeEvent<HTMLInputElement>) => {
    const regex = /^\d{5}$/;
    let tempValidVal = regex.test(event.target.value);
    setLength(event.target.value.length);
    setValidInput(!tempValidVal);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setResponse(null);
    setResponseError(false);
    const inputElement = document.getElementById("trainScheduleVal");
    if (inputElement instanceof HTMLInputElement) {
      const inputElementValue = inputElement.value;
      const apiResponse = await fetch(
        `/api/trainSchedule/${inputElementValue}`
      );
      const apiResponseVal = await apiResponse.json();

      apiResponseVal.status
        ? setResponseError(true)
        : setResponse(apiResponseVal);
      setLoading(false);
    }
  };

  return (
    <>
      <TextField
        id="trainScheduleVal"
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
            length &&
            handleSubmit();
        }}
      />
      <div>
        <button
          onClick={handleSubmit}
          disabled={!length || validInput}
          className={`border-2 mt-4 border-black w-20 rounded-lg ${
            !length || validInput
              ? "bg-stone-400 hover:bg-stone-400/75"
              : "bg-primaryColor hover:bg-primaryColor/75"
          }  p-2 font-bold text-white`}
        >
          Search
        </button>
      </div>
      {loading && <ShowLoading />}
      {(response || responseError) &&
        (responseError ? (
          <ShowError />
        ) : (
          <ShowContent responseData={response} />
        ))}
    </>
  );
}
