"use client";

import TextField from "@mui/material/TextField";
import { ChangeEvent, useState } from "react";
import ShowLoading from "./components/ShowLoading";
import ShowContent from "./components/ShowContent";
import ShowError from "../components/ShowError";
import { PNRDetails } from "./components/PNRTypes";

export default function PNRPage() {
  const [validInput, setValidInput] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [length, setLength] = useState<number | null>();
  const [responseError, setResponseError] = useState<string | null>(null);
  const [response, setResponse] = useState<PNRDetails | null>(null);

  const validateInput = (event: ChangeEvent<HTMLInputElement>) => {
    const regex = /^\d{10}$/;
    let tempValidVal = regex.test(event.target.value);
    setLength(event.target.value.length);
    setValidInput(!tempValidVal);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setResponse(null);
    setResponseError(null);
    const inputElement = document.getElementById("pnrVal");
    if (inputElement instanceof HTMLInputElement) {
      const inputElementValue = inputElement.value;
      const apiResponse = await fetch(`/api/PNR/${inputElementValue}`);
      const apiResponseVal = await apiResponse.json();

      apiResponseVal.code === 302
        ? setResponseError(apiResponseVal.error)
        : apiResponse.status === 500
        ? setResponseError(apiResponseVal.errorMessage)
        : setResponse(apiResponseVal);
      setLoading(false);
    }
  };

  return (
    <>
      <TextField
        id="pnrVal"
        sx={{ width: "450px" }}
        error={validInput}
        label="PNR"
        variant="outlined"
        onChange={validateInput}
        helperText={`${
          validInput ? "PNR should be 10 numeric digits. Eg. 1248735609" : ""
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
          <ShowError errorMessage={responseError} />
        ) : (
          <ShowContent responseData={response} />
        ))}
    </>
  );
}
