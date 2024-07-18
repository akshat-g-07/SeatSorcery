"use client";

import CardWrapper from "@/app/auth/components/CardWrapper";
import { RequestSeat } from "@prisma/client";
import { useEffect, useState } from "react";
import RequestComponent from "./RequestComponent";

const MyReq = () => {
  const [myRequests, setMyRequests] = useState<RequestSeat[] | undefined>();
  useEffect(() => {
    const someFunc = async () => {
      const result = await fetch("/api/myRequests");
      const requests = await result.json();

      setMyRequests(requests);
    };

    someFunc();
  }, []);

  return (
    <CardWrapper
      cardTitle={"Requests Raised"}
      cardDescription={"All the requests you have raised."}
      showSocial={false}
      footerButtonLink={""}
      footerButtonLabel={""}
    >
      <>
        {myRequests &&
          myRequests.map((request) => {
            return (
              <div
                key={request.id}
                className="hover:bg-zinc-300 p-2 rounded pb-0"
              >
                <RequestComponent request={request} />
              </div>
            );
          })}
      </>
    </CardWrapper>
  );
};

export default MyReq;
