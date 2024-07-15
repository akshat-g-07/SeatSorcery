"use server";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

export async function requestSeat(values: RequestFormData) {
  const user = await currentUser();

  const userEmail: string = user!.email as string;

  const { userTrainNumber, userTravelDate, userSeatDetails, userReqDetails } =
    values;
  try {
    const requestRaised = await db.requestSeat.create({
      data: {
        trainNumber: userTrainNumber,
        date: userTravelDate,
        seat: userSeatDetails,
        requestedSeat: userReqDetails,
        requestOpen: true,
        user: {
          connect: { email: userEmail },
        },
      },
    });

    return { success: "Request raised successfully!" };
  } catch (error) {
    if ((error as any).code === "P2002") {
      return {
        error: "You have already raised a request with these journey details!",
      };
    }
    return {
      error: "Something went wrong. Please try again!",
    };
  }
}
