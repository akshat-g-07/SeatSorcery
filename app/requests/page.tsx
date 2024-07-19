"use server";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MyReq from "./components/MyReq";

const SorceryPage = () => {
  return (
    <>
      <div className="h-fit w-full flex flex-col items-center mt-10">
        <Tabs defaultValue="my" className="w-fit flex flex-col items-center">
          <TabsList>
            <TabsTrigger value="my">My Requests</TabsTrigger>
            <TabsTrigger value="other">Others&apos; Requests</TabsTrigger>
          </TabsList>
          <TabsContent value="my">
            <MyReq />
          </TabsContent>
          <TabsContent value="other">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default SorceryPage;
