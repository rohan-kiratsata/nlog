import React from "react";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import Link from "next/link";

export default function HomeCard({ item }: { item: any }) {
  console.log(item);
  const { frontMatter, slug } = item;
  return (
    <Link href={slug}>
      <Card className="cursor-pointer hover:bg-neutral-800">
        <CardHeader className="text-2xl font-semibold">
          <div className="max-h-16 min-h-[1.5em] overflow-hidden">
            <h2 className="line-clamp-2">{frontMatter.title}</h2>
          </div>
          <CardDescription className="mt-2">{frontMatter.date}</CardDescription>
          <CardDescription className="flex gap-2">
            {frontMatter.tags &&
              frontMatter.tags.map((tag: string, index: number) => (
                <span key={index} className="text-xs text-primary">
                  #{tag}
                </span>
              ))}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-2"></CardContent>
      </Card>
    </Link>
  );
}
