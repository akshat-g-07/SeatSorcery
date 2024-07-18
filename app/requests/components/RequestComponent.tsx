"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Chip } from "@mui/material";
import { RequestSeat } from "@prisma/client";
import { format } from "date-fns";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const RequestComponent = ({ request }: { request: RequestSeat }) => {
  const [trainName, setTrainName] = useState<string | undefined>();
  useEffect(() => {
    const fetchTrainName = async () => {
      const apiResponse = await fetch(
        `/api/trainNumberToInfo/${request.trainNumber}`
      );
      const apiResponseVal = await apiResponse.json();
      setTrainName(apiResponseVal.trainName);
    };

    fetchTrainName();
  }, [request.trainNumber]);

  return (
    <>
      <Accordion type="single" collapsible className="">
        <AccordionItem value="item-1">
          <AccordionTrigger className="hover:no-underline">
            <div>
              <div className="flex justify-around">
                <p>
                  {request.trainNumber} - {trainName}
                </p>
                <Chip
                  className="ml-16"
                  variant="outlined"
                  color={request.requestOpen ? "primary" : "default"}
                  label={request.requestOpen ? "Open" : "Closed"}
                  size="small"
                />
              </div>
              <div className="text-xs text-left text-slate-500">
                Date Of Journey : {format(request.date, "dd-LL-yyy")}
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex text-sm text-slate-700">
              <div className="w-5/12">
                <p>Your Seat:</p>
                {request.seat}
              </div>
              <div className="h-10 mr-2 w-[2px] bg-black/75" />
              <div className="w-5/12">
                <p>Requested Seat:</p>
                {request.requestedSeat}
              </div>
              <div className="w-1/12 mr-1">
                <AlertDialog>
                  <AlertDialogTrigger className="w-full h-full focus:outline-none">
                    <Button
                      variant="outline"
                      className="w-full rounded h-full p-0 hover:border hover:border-[#9c27b0]"
                      size="sm"
                    >
                      <EditIcon color="secondary" sx={{ fontSize: "15px" }} />
                    </Button>
                  </AlertDialogTrigger>
                  {request.requestOpen ? (
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Edit this request?</AlertDialogTitle>
                        <AlertDialogDescription></AlertDialogDescription>
                      </AlertDialogHeader>
                    </AlertDialogContent>
                  ) : (
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Action Can&apos;t Be Performed
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be performed. You cannot edit a
                          closed request.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogAction>Ok</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  )}
                </AlertDialog>
              </div>
              <div className="w-1/12">
                <AlertDialog>
                  <AlertDialogTrigger className="w-full h-full focus:outline-none">
                    <Button
                      variant="outline"
                      className="w-full rounded h-full p-0 hover:border hover:border-destructive"
                      size="sm"
                    >
                      <DeleteIcon color="error" sx={{ fontSize: "15px" }} />
                    </Button>
                  </AlertDialogTrigger>
                  {request.requestOpen ? (
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will delete your
                          raised request.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Delete</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  ) : (
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Action Can&apos;t Be Performed
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be performed. You cannot delete a
                          closed request.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogAction>Ok</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  )}
                </AlertDialog>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default RequestComponent;
