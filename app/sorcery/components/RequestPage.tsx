import { useEffect, useState, useTransition } from "react";
import CardWrapper from "../../auth/components/CardWrapper";
import { Input, InputAdornment } from "@mui/material";
import DirectionsRailwayIcon from "@mui/icons-material/DirectionsRailway";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import SorceryButton from "@/app/assests/SorceryButton";
import { SorceryAnimation } from "@/app/assests/SorceryAnimation";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "@radix-ui/react-icons";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { format } from "date-fns";
import { requestSeat } from "@/actions/requestSeat";

const RequestPage = () => {
  const [userRequestError, setUserRequestError] = useState<string>();
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState<string | undefined>();
  const [error, setError] = useState<string | undefined>();
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
      SorceryAnimation();
    }
  }, [isPending]);

  const onSubmit = (values: RequestFormData) => {
    setUserRequestError("");
    setSuccess(undefined);
    setError(undefined);

    const { userTrainNumber, userTravelDate, userSeatDetails, userReqDetails } =
      values;

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
      requestSeat(values).then((data) => {
        setSuccess(data.success);
        setError(data.error);
        data.success && form.reset();
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
                    disabled={isPending}
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
                  <FormField
                    disabled={isPending}
                    control={form.control}
                    name="userTravelDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-[240px] justify-start text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {field.value ? (
                                format(field.value, "dd-LL-yyy")
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              fixedWeeks
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              initialFocus
                              disabled={(date) => date < new Date()}
                            />
                          </PopoverContent>
                        </Popover>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="w-full flex items-start justify-center my-2">
                <p className="mx-3 text-lg">in</p>
                <div>
                  <FormField
                    disabled={isPending}
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
                    disabled={isPending}
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
              {(error || success) && (
                <FormMessage
                  className={`rounded-sm ${
                    error ? "bg-destructive/90" : "bg-emerald-500/90"
                  } p-2 mt-8`}
                >
                  <span
                    className={`${
                      error ? "text-destructive-foreground" : "text-white"
                    }`}
                  >
                    {error || success}
                  </span>
                </FormMessage>
              )}
              <div className="w-full flex items-start justify-center my-8">
                <Button type="submit" disabled={isPending}>
                  Perform Sorcery
                  <SorceryButton />
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
