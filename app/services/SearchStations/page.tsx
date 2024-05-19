"use client";

import { Autocomplete, TextField } from "@mui/material";
import CityStateArray from "./components/CityStateArray";
import { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from "react";
import {
  Station,
  CityStateArrayInterface,
} from "./components/StationNameTypes";
import ShowLoading from "./components/ShowLoading";
import ShowContent from "./components/ShowContent";
import ShowError from "../components/ShowError";

export default function SearchStationsPage() {
  const [cityStateArray, setCityStateArray] = useState<
    CityStateArrayInterface[] | null
  >(null);
  const [validInput, setValidInput] = useState<string | undefined>(undefined);
  const [response, setResponse] = useState<Station[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [responseError, setResponseError] = useState<string | null>(null);

  useEffect(() => {
    async function cityStateFunction() {
      const tempArray = (await CityStateArray()) || null;
      setCityStateArray(tempArray);
    }
    cityStateFunction();
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    setResponseError(null);
    setResponse(null);
    const apiResponse = await fetch(`/api/searchStations/${validInput}`);
    const apiResponseVal = await apiResponse.json();

    apiResponse.status === 200
      ? setResponse(JSON.parse(apiResponseVal))
      : setResponseError(apiResponseVal.errorMessage);

    setLoading(false);
  };

  return (
    <>
      {cityStateArray && (
        <Autocomplete
          disablePortal
          id="searchStationVal"
          options={cityStateArray}
          sx={{ width: "450px" }}
          renderInput={(params) => <TextField {...params} label="Place Name" />}
          getOptionLabel={(option) =>
            `${option.cityName} - ${option.stateCode}`
          }
          renderOption={(props, option) => {
            const { key, ...restProps } = props as DetailedHTMLProps<
              HTMLAttributes<HTMLDivElement>,
              HTMLDivElement
            >;
            return (
              <div
                key={`${option.stateCode}${option.cityName}`}
                className="flex p-2 cursor-pointer"
                {...restProps}
              >
                <div className="text-black/80 w-3/5 text-xl">
                  {option.cityName}
                </div>
                <div className="text-black/40 w-2/5 text-xs text-right flex items-end justify-end">
                  {option.stateName}
                </div>
              </div>
            );
          }}
          onChange={(_, value) => {
            value
              ? setValidInput(value?.cityName)
              : (() => {
                  setResponse(null);
                  setResponseError(null);
                })();
          }}
          onKeyDown={(event) => {
            event.key === "Enter" && validInput && handleSubmit();
          }}
        />
      )}
      <div>
        <button
          onClick={handleSubmit}
          disabled={!validInput}
          className={`border-2 mt-4 border-black w-20 rounded-lg ${
            !validInput
              ? "bg-stone-400 hover:bg-stone-400/75"
              : "bg-primaryColor hover:bg-primaryColor/75"
          }  p-2 font-bold text-white`}
        >
          Search
        </button>
      </div>
      {loading && <ShowLoading />}
      {(response || !!responseError) &&
        (responseError ? (
          <ShowError errorMessage={responseError} />
        ) : (
          <ShowContent responseData={response} />
        ))}
    </>
  );
}
