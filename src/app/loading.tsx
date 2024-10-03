import React from "react";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";

export default function Loading() {
  return (
    <div>
      <h1 className="mb-5 text-xl font-semibold tracking-tight">
        Latest Posts
      </h1>
      <div className="grid grid-cols-1 gap-3">
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <Card
              key={index}
              className="animate-pulse cursor-pointer hover:bg-neutral-800"
            >
              <CardHeader className="text-2xl font-semibold">
                <div className="max-h-16 min-h-[1.5em] overflow-hidden">
                  <div className="h-6 w-3/4 rounded bg-gray-600"></div>
                </div>
                <CardDescription className="mt-2">
                  <div className="h-4 w-1/4 rounded bg-gray-600"></div>
                </CardDescription>
                <CardDescription className="flex gap-2">
                  <div className="h-4 w-16 rounded bg-gray-600"></div>
                  <div className="h-4 w-16 rounded bg-gray-600"></div>
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
      </div>
    </div>
  );
}
