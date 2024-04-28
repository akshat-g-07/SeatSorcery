import { NextRequest, NextResponse } from "next/server";

interface GetContext {
  params: { trainId: string };
}

export async function GET(request: NextRequest, context: GetContext) {
  try {
    const response = await fetch(
      "https://api.railwayapi.site/api/v1/trains/" + context.params.trainId
    );
    const responseVal = await response.json();

    if (responseVal.errors)
      return new NextResponse(
        JSON.stringify({ errorMessage: "Train Not Found" }),
        {
          status: 404,
        }
      );

    const responseData = responseVal.data[0];
    const { trainNumber, trainName, trainFullName, trainRunsOn, ...restProps } =
      responseData;

    return new NextResponse(
      JSON.stringify({
        trainNumber,
        trainName,
        trainFullName,
        trainRunsOn,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ errorMessage: "Something on API side went wrong" }),
      { status: 500 }
    );
  }
}
