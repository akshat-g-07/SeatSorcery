interface GetContext {
  params: { stationName: string };
}

export async function GET(request: Request, context: GetContext) {
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
      ? Response.json({ result })
      : Response.json({ status: 404 });
  } catch (error) {
    console.error(error);
    return Response.json({ status: 400 });
  }
}
