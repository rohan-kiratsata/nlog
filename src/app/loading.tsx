import React from "react";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

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
                <Skeleton className="h-4 w-10 rounded" />
                <CardDescription className="mt-2">
                  <Skeleton className="h-4 w-1/4 rounded" />
                </CardDescription>
                <CardDescription className="flex gap-2">
                  <Skeleton className="h-4 w-20 rounded" />
                  <Skeleton className="h-4 w-16 rounded" />
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
      </div>
    </div>
  );
}
