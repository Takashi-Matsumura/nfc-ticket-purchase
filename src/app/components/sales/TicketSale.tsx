import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TicketSale = () => {
  return (
    <div className="flex">
      <Card className="w-96 mx-auto mt-10">
        <CardHeader>
          <CardTitle className="text-center">バラ</CardTitle>
          <CardDescription className="text-center text-sm">
            400円/枚
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col justify-center items-end border-2 rounded-lg p-10">
            <input
              type="number"
              className="text-center text-9xl font-bold w-full"
              defaultValue={0}
              min={0}
            />
            <p className="text-5xl">枚</p>
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};

export default TicketSale;
