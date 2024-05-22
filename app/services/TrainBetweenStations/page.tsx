"use client";

import { Alert, Autocomplete, Snackbar, TextField } from "@mui/material";
import { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from "react";
import CityStateArray from "../SearchStations/components/CityStateArray";
import {
  CityStateArrayInterface,
  Station,
} from "../SearchStations/components/StationNameTypes";
import ShowError from "../components/ShowError";
import { TrainDetails } from "./components/TrainBetweenStationsTypes";
import ShowContent from "./components/ShowContent";
import ShowLoading from "./components/ShowLoading";

export default function TrainBetweenPage() {
  const [cityStateArray, setCityStateArray] = useState<
    CityStateArrayInterface[] | null
  >(null);
  const [fromStations, setFromStations] = useState<Station[] | null>(null);
  const [fromStationName, setFromStationName] = useState<string | null>(null);
  const [toStations, setToStations] = useState<Station[] | null>(null);
  const [toStationName, setToStationName] = useState<string | null>(null);
  const [stationNameError, setStationNameError] = useState<string | null>(null);
  const [response, setResponse] = useState<TrainDetails[] | null>(null);
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
    const apiResponse = await fetch(
      `/api/trainBetweenStations?fromStation=${fromStationName}&toStation=${toStationName}`
    );
    const apiResponseVal = await apiResponse.json();

    apiResponse.status === 200
      ? setResponse(apiResponseVal)
      : setResponseError(apiResponseVal.errorMessage);

    setLoading(false);
  };

  return (
    <>
      <div className="w-full flex justify-between p-4 h-max">
        <div className="w-5/12 h-48">
          <p className="font-bold my-2">From</p>
          <div className="my-4">
            {cityStateArray && (
              <Autocomplete
                disablePortal
                id="fromSearchPlaceVal"
                options={cityStateArray}
                sx={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField {...params} label="Place Name" />
                )}
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
                onChange={async (_, value) => {
                  if (value) {
                    const apiFromPlaceResponse = await fetch(
                      `/api/searchStations/${value.cityName}`
                    );
                    const apiFromPlaceResponseVal =
                      await apiFromPlaceResponse.json();

                    apiFromPlaceResponse.status === 200
                      ? setFromStations(JSON.parse(apiFromPlaceResponseVal))
                      : apiFromPlaceResponse.status === 404
                      ? setStationNameError(
                          `${value.cityName} doesn't have a station!`
                        )
                      : setStationNameError("Please try again!");
                  } else {
                    setFromStations(null);
                    setStationNameError(null);
                    setFromStationName(null);
                  }
                }}
              />
            )}
          </div>
          <div>
            {fromStations && (
              <Autocomplete
                disablePortal
                id="fromSearchStationVal"
                options={fromStations}
                sx={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField {...params} label="Station Name" />
                )}
                getOptionLabel={(option) => `${option[0]} - ${option[1]}`}
                renderOption={(props, option) => {
                  const { key, ...restProps } = props as DetailedHTMLProps<
                    HTMLAttributes<HTMLDivElement>,
                    HTMLDivElement
                  >;
                  return (
                    <div
                      key={`${option[0]}${option[1]}`}
                      className="flex p-2 cursor-pointer"
                      {...restProps}
                    >
                      <div className="text-black/80 w-3/5 text-xl">
                        {option[0]}
                      </div>
                      <div className="text-black/40 w-2/5 text-xs text-right flex items-end justify-end">
                        {option[1]}
                      </div>
                    </div>
                  );
                }}
                onChange={async (_, value) => {
                  if (value) setFromStationName(value[0] as unknown as string);
                  else setFromStationName(null);
                }}
              />
            )}
          </div>
        </div>
        <div className="w-5/12 h-48">
          <p className="font-bold my-2">To</p>
          <div className="my-4">
            {cityStateArray && (
              <Autocomplete
                disablePortal
                id="toSearchPlaceVal"
                options={cityStateArray}
                sx={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField {...params} label="Place Name" />
                )}
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
                onChange={async (_, value) => {
                  if (value) {
                    const apiToPlaceResponse = await fetch(
                      `/api/searchStations/${value.cityName}`
                    );
                    const apiToPlaceResponseVal =
                      await apiToPlaceResponse.json();

                    apiToPlaceResponse.status === 200
                      ? setToStations(JSON.parse(apiToPlaceResponseVal))
                      : apiToPlaceResponse.status === 404
                      ? setStationNameError(
                          `${value.cityName} doesn't have a station!`
                        )
                      : setStationNameError("Please try again!");
                  } else {
                    setToStations(null);
                    setStationNameError(null);
                    setToStationName(null);
                  }
                }}
              />
            )}
          </div>

          <div>
            {toStations && (
              <Autocomplete
                disablePortal
                id="toSearchStationVal"
                options={toStations}
                sx={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField {...params} label="Station Name" />
                )}
                getOptionLabel={(option) => `${option[0]} - ${option[1]}`}
                renderOption={(props, option) => {
                  const { key, ...restProps } = props as DetailedHTMLProps<
                    HTMLAttributes<HTMLDivElement>,
                    HTMLDivElement
                  >;
                  return (
                    <div
                      key={`${option[0]}${option[1]}`}
                      className="flex p-2 cursor-pointer"
                      {...restProps}
                    >
                      <div className="text-black/80 w-3/5 text-xl">
                        {option[0]}
                      </div>
                      <div className="text-black/40 w-2/5 text-xs text-right flex items-end justify-end">
                        {option[1]}
                      </div>
                    </div>
                  );
                }}
                onChange={async (_, value) => {
                  if (value) setToStationName(value[0] as unknown as string);
                  else setToStationName(null);
                }}
              />
            )}
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={handleSubmit}
          disabled={!toStationName || !fromStationName}
          className={`border-2 border-black w-20 rounded-lg ${
            !toStationName || !fromStationName
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
      <Snackbar
        open={!!stationNameError}
        autoHideDuration={6000}
        onClose={() => {
          setStationNameError(null);
        }}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <Alert
          onClose={() => {
            setStationNameError(null);
          }}
          severity="error"
          sx={{ width: "100%", backgroundColor: "red", color: "white" }}
        >
          {stationNameError}
        </Alert>
      </Snackbar>
    </>
  );
}
