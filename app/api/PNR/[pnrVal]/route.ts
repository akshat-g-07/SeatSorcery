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
        arrival_data: {
          arrival_date: "Tue, 09 Jun 04:45",
          arrival_time: "Tue, 09 Jun 04:45",
        },
        boarding_station: "Bhusaval Junction-BSL",
        chart_status: "Chart Prepared",
        class: "3A",
        departure_data: {
          departure_date: "Sun, 07 Jun  06:25",
          departure_time: "Sun, 07 Jun  06:25",
        },
        passenger: [
          {
            booking_status: "W/L  6,RLGN",
            current_status: "CNF B2 1",
            name: "Ram",
          },
          {
            booking_status: "W/L  7,RLGN",
            current_status: "CNF B2 4",
            name: "Shyam",
          },
          {
            booking_status: "W/L  8,RLGN",
            current_status: "RLWL  1",
            name: "Govind",
          },
          {
            booking_status: "W/L  9,RLGN",
            current_status: "RLWL  2",
            name: "Shiva",
          },
        ],
        quota: "",
        reservation_upto: "Patliputra Junction-PPTA",
        train_name: "LTT PPTA SPL-02141",
        train_number: "LTT PPTA SPL-02141",
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
