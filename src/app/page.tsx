import React from "react";
import HomeGrid from "@/components/layouts/home-grid";
import { readPosts } from "@/lib/notes";

export default function Home() {
  const posts = readPosts();

  return (
    <>
      <div>
        <h1 className="mb-5 text-xl font-semibold tracking-tight">
          Latest Posts
        </h1>
        <HomeGrid data={posts} />
      </div>
    </>
  );
}
