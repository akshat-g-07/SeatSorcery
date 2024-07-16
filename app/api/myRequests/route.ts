import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const user = await currentUser();
  const userEmail = user!.email as string;

  const userRequests = await db.requestSeat.findMany({
    where: {
      userEmail,
    },
    orderBy: {
      date: "desc",
    },
  });

  return new NextResponse(JSON.stringify(userRequests), { status: 200 });
}
