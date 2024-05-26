import { NextRequest, NextResponse } from "next/server";

interface GetContext {
  params: { pnrVal: string };
}

export async function GET(request: NextRequest, context: GetContext) {
  const url = `https://pnr-status-indian-railway.p.rapidapi.com/pnr-check/${context.params.pnrVal}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.X_RapidAPI_Key || "",
      "X-RapidAPI-Host": "pnr-status-indian-railway.p.rapidapi.com",
    },
  };

  if (context.params.pnrVal === "8881014378") {
    return new NextResponse(
      JSON.stringify({
        status: true,
        code: 200,
        message: "Success.",
        error: "",
        data: {
          boardingInfo: {
            trainId: 237,
            stationId: 3206,
            arrivalTime: "15:20:00",
            departureTime: "15:20:00",
            haltTime: "00:00:00",
            stationCode: "NDLS",
            stationName: "New Delhi",
            travellingDay: 1,
            distance: "0",
            platform: "0",
          },
          destinationInfo: {
            trainId: 237,
            stationId: 3757,
            arrivalTime: "21:10:00",
            departureTime: "21:10:00",
            haltTime: "00:00:00",
            stationCode: "DDN",
            stationName: "Dehradun",
            travellingDay: 1,
            distance: "305",
            platform: "0",
          },
          seatInfo: {
            coach: "D6",
            berth: "19",
            noOfSeats: 2,
          },
          trainInfo: {
            trainNo: "12055",
            name: "DDN JANSHTBDI",
            boarding: "NDLS",
            destination: "DDN",
            dt: "21-12-2023",
            boardingDayCount: null,
            fromStationName: null,
            toStationName: null,
            origin: null,
          },
          passengerInfo: [
            {
              currentCoach: "D6",
              currentBerthNo: "19",
            },
            {
              currentCoach: "D6",
              currentBerthNo: "20",
            },
          ],
          trainRoutes: [
            {
              trainId: 237,
              stationId: 3206,
              arrivalTime: "15:20:00",
              departureTime: "15:20:00",
              haltTime: "00:00:00",
              stationCode: "NDLS",
              stationName: "New Delhi",
              travellingDay: 1,
              distance: "0",
              platform: "0",
            },
            {
              trainId: 237,
              stationId: 3146,
              arrivalTime: "15:53:00",
              departureTime: "15:55:00",
              haltTime: "00:02:00",
              stationCode: "GZB",
              stationName: "Ghaziabad",
              travellingDay: 1,
              distance: "26",
              platform: "0",
            },
            {
              trainId: 237,
              stationId: 3202,
              arrivalTime: "16:32:00",
              departureTime: "16:34:00",
              haltTime: "00:02:00",
              stationCode: "MTC",
              stationName: "Meerut City",
              travellingDay: 1,
              distance: "73",
              platform: "0",
            },
            {
              trainId: 237,
              stationId: 3198,
              arrivalTime: "17:12:00",
              departureTime: "17:14:00",
              haltTime: "00:02:00",
              stationCode: "MOZ",
              stationName: "Muzaffarnagar",
              travellingDay: 1,
              distance: "129",
              platform: "0",
            },
            {
              trainId: 237,
              stationId: 3111,
              arrivalTime: "17:32:00",
              departureTime: "17:34:00",
              haltTime: "00:02:00",
              stationCode: "DBD",
              stationName: "Deoband",
              travellingDay: 1,
              distance: "153",
              platform: "0",
            },
            {
              trainId: 237,
              stationId: 3269,
              arrivalTime: "18:09:00",
              departureTime: "18:11:00",
              haltTime: "00:02:00",
              stationCode: "TPZ",
              stationName: "Tapri",
              travellingDay: 1,
              distance: "180",
              platform: "0",
            },
            {
              trainId: 237,
              stationId: 3868,
              arrivalTime: "18:46:00",
              departureTime: "18:48:00",
              haltTime: "00:02:00",
              stationCode: "RK",
              stationName: "Roorkee",
              travellingDay: 1,
              distance: "212",
              platform: "0",
            },
            {
              trainId: 237,
              stationId: 3791,
              arrivalTime: "19:33:00",
              departureTime: "19:38:00",
              haltTime: "00:05:00",
              stationCode: "HW",
              stationName: "Haridwar Jn",
              travellingDay: 1,
              distance: "253",
              platform: "0",
            },
            {
              trainId: 237,
              stationId: 3757,
              arrivalTime: "21:10:00",
              departureTime: "21:10:00",
              haltTime: "00:00:00",
              stationCode: "DDN",
              stationName: "Dehradun",
              travellingDay: 1,
              distance: "305",
              platform: "0",
            },
          ],
        },
      })
    );
  }

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    return new NextResponse(result);
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ errorMessage: "Something at API side went wrong" }),
      { status: 500 }
    );
  }
}
