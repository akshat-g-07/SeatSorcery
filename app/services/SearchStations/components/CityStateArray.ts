"use server";

import { City, State } from "country-state-city";

const CityStateArray = async () => {
  return City.getCitiesOfCountry("IN")?.map((cityItem) => {
    const stateVal = State.getStatesOfCountry("IN").find((stateItem) => {
      return stateItem.isoCode === cityItem.stateCode;
    });
    return {
      cityName: cityItem.name,
      stateCode: cityItem.stateCode,
      stateName: stateVal?.name,
    };
  });
};

export default CityStateArray;
