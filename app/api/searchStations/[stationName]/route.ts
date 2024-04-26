import { NextRequest, NextResponse } from "next/server";

interface GetContext {
  params: { stationName: string };
}

export async function GET(request: NextRequest, context: GetContext) {
  const url = "https://rstations.p.rapidapi.com/";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "Content-Type": "application/json",
      "X-RapidAPI-Key": process.env.X_RapidAPI_Key || "",
      "X-RapidAPI-Host": "rstations.p.rapidapi.com",
    },
    body: JSON.stringify({ search: context.params.stationName }),
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    return result.length > 2
      ? new NextResponse(JSON.stringify(result), { status: 200 })
      : new NextResponse(
          JSON.stringify({ errorMessage: "Station Not Found" }),
          { status: 404 }
        );
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ errorMessage: "Something on API side went wrong" }),
      { status: 500 }
    );
  }
}
