interface GetContext {
  params: { trainId: string };
}

export async function GET(request: Request, context: GetContext) {
  try {
    const response = await fetch(
      "https://api.railwayapi.site/api/v1/trains/" + context.params.trainId
    );
    const responseVal = await response.json();
    const responseData = responseVal.data[0];
    return Response.json({ responseData });
  } catch (error) {
    return Response.json({ status: 404 });
  }
}
