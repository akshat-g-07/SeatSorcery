import { useEffect, useState, useTransition } from "react";
import CardWrapper from "../../auth/components/CardWrapper";
import { Input, InputAdornment } from "@mui/material";
import DatePicker from "./DatePicker";
import DirectionsRailwayIcon from "@mui/icons-material/DirectionsRailway";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import { Button } from "@/components/ui/button";
import WandSVG from "../../assests/WandSVG";
import BlankStar from "../../assests/BlankStar";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import FilledStar from "@/app/assests/FilledStart";

const RequestPage = () => {
  const [userRequestError, setUserRequestError] = useState<string>();
  const [isPending, startTransition] = useTransition();
  const form = useForm<RequestFormData>({
    defaultValues: {
      userTrainNumber: "",
      userTravelDate: undefined,
      userSeatDetails: "",
      userReqDetails: "",
    },
  });

  useEffect(() => {
    if (isPending) {
      const animatedDiv = document.getElementById("wandsvg");
      const blankStarDiv = document.querySelectorAll(".blankStar");
      const filledStarDiv = document.querySelectorAll(".filledStar");
      animatedDiv!.classList.remove("rotate-0");
      animatedDiv!.classList.add("rotate-6");
      setTimeout(() => {
        animatedDiv!.classList.remove("rotate-6");
        animatedDiv!.classList.add("-rotate-12");
      }, 300);
      setTimeout(() => {
        animatedDiv!.classList.remove("-rotate-12");
        animatedDiv!.classList.add("rotate-0");
      }, 600);
      blankStarDiv.forEach((item) => {
        setTimeout(() => {
          item.classList.add("animate-[spin_0.5s_linear_infinite]");
        }, 600);
        setTimeout(() => {
          item.classList.remove("animate-[spin_0.5s_linear_infinite]");
          item.classList.add("hidden");
        }, 1100);
        setTimeout(() => {
          item.classList.remove("hidden");
        }, 1000 * 30);
      });
      filledStarDiv.forEach((item) => {
        setTimeout(() => {
          item.classList.remove("hidden");
          item.classList.add("animate-[spin_0.5s_linear_infinite]");
        }, 1100);
        setTimeout(() => {
          item.classList.remove("animate-[spin_0.5s_linear_infinite]");
        }, 1600);
        setTimeout(() => {
          item.classList.add("hidden");
        }, 1000 * 30);
      });
    }
  }, [isPending]);

  const onSubmit = (data: RequestFormData) => {
    setUserRequestError("");

    const { userTrainNumber, userTravelDate, userSeatDetails, userReqDetails } =
      data;

    // if (!userTrainNumber) {
    //   setUserRequestError("Please Provide a Train Number!");
    //   return null;
    // }

    // if (userTrainNumber.length !== 5) {
    //   setUserRequestError("Train Number size should be 5!");
    //   return null;
    // }

    // const regex = /^\d{5}$/;
    // let tempValidVal = regex.test(userTrainNumber);

    // if (!tempValidVal) {
    //   setUserRequestError("Invalid Train Number!");
    //   return null;
    // }

    // if (!userTravelDate) {
    //   setUserRequestError("Please Choose A Date!");
    //   return null;
    // }

    // if (!userSeatDetails) {
    //   setUserRequestError("What is you seat?");
    //   return null;
    // }

    // if (!userReqDetails) {
    //   setUserRequestError("Where you want to switch?");
    //   return null;
    // }

    startTransition(async () => {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve("done");
        }, 1000);
      });
    });
  };

  return (
    <CardWrapper
      cardTitle={"Request A Seat Switch"}
      cardDescription={"Fill in the details to request a seat switch."}
      showSocial={false}
      footerButtonLink={""}
      footerButtonLabel={""}
    >
      <>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="w-96 flex flex-col items-center justify-center">
              <p className="my-2 text-xl">I am traveling</p>
              <div className="w-full flex items-start justify-center my-2">
                <p className="mx-3 text-lg">in</p>
                <div>
                  <FormField
                    control={form.control}
                    name="userTrainNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            startAdornment={
                              <InputAdornment position="start">
                                <DirectionsRailwayIcon />
                              </InputAdornment>
                            }
                            className="w-[240px] pl-1"
                            placeholder="Train Number"
                            id="userTrainNumber"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="w-full flex items-start justify-center my-2">
                <p className="mx-3 text-lg">on</p>
                <div>
                  <DatePicker form={form} />
                </div>
              </div>
              <div className="w-full flex items-start justify-center my-2">
                <p className="mx-3 text-lg">in</p>
                <div>
                  <FormField
                    control={form.control}
                    name="userSeatDetails"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            startAdornment={
                              <InputAdornment position="start">
                                <AirlineSeatReclineNormalIcon />
                              </InputAdornment>
                            }
                            className="w-[240px] pl-1"
                            placeholder="Seat, Coach Number"
                            id="userSeatDetails"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <p className="mb-2 mt-8 text-xl">and I am looking</p>
              <div className="w-full flex items-start justify-center my-2">
                <p className="mx-3 text-lg">in</p>
                <div>
                  <FormField
                    control={form.control}
                    name="userReqDetails"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            startAdornment={
                              <InputAdornment position="start">
                                <AirlineSeatReclineNormalIcon />
                              </InputAdornment>
                            }
                            className="w-[240px] pl-1"
                            placeholder="Coach Number"
                            id="userReqDetails"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              {userRequestError && (
                <FormMessage className="rounded-sm bg-destructive/90 p-2 mt-8">
                  <span className="text-destructive-foreground">
                    {userRequestError}
                  </span>
                </FormMessage>
              )}
              <div className="w-full flex items-start justify-center my-8">
                <Button type="submit">
                  Perform Sorcery
                  <div className="h-8 w-8">
                    <div className="h-2 w-full flex justify-around">
                      <div className="w-1/3 h-full">
                        <BlankStar classValues="blankStar w-full h-full" />
                        <FilledStar classValues="filledStar hidden w-full h-full" />
                      </div>
                      <div className="w-1/3 h-full translate-y-1">
                        <BlankStar classValues="blankStar w-full h-full" />
                        <FilledStar classValues="filledStar hidden w-full h-full" />
                      </div>
                    </div>
                    <div className="h-6 w-full flex justify-around">
                      <div className="w-1/3 h-full flex items-center translate-x-0.5 translate-y">
                        <BlankStar classValues="blankStar w-full h-full" />
                        <FilledStar classValues="filledStar hidden w-full h-full" />
                      </div>
                      <div
                        id="wandsvg"
                        className="w-2/3 h-full duration-300 origin-bottom-right"
                      >
                        <WandSVG classValues="h-full scale-105 w-full -rotate-90" />
                      </div>
                    </div>
                  </div>
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </>
    </CardWrapper>
  );
};

export default RequestPage;
