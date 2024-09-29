import React from "react";
import HomeCard from "../home-card";

type Blog = {
  title: string;
  frontMatter: FrontMatter;
  content: string;
};

type FrontMatter = {
  title: string;
  date: string;
  tags: any;
};

export default function HomeGrid({ data }: { data: any[] }) {
  return (
    <div className="grid grid-cols-1 gap-5">
      {data.map((item, index) => (
        <HomeCard key={index} item={item} />
      ))}
    </div>
  );
}
