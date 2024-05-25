import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const fromStationName = request.nextUrl.searchParams.get("fromStation");
  const toStationName = request.nextUrl.searchParams.get("toStation");

  const url = new URL("https://api.railwayapi.site/api/v1/trainsBtwStations");
  url.searchParams.set("fromStation", fromStationName!);
  url.searchParams.set("toStation", toStationName!);

  try {
    const response = await fetch(url);
    const responseVal = await response.json();

    if (responseVal.errors)
      return new NextResponse(
        JSON.stringify({ errorMessage: "No Train Found" }),
        {
          status: 404,
        }
      );

    const responseData = responseVal.data;
    return new NextResponse(JSON.stringify(responseData), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ errorMessage: "Something on API side went wrong" }),
      { status: 500 }
    );
  }
}
