import React from "react";
import Link from "next/link";
import { readPosts } from "@/lib/notes";

export default function BlogPage() {
  const posts = readPosts();

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              {post.frontMatter.title || post.slug}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
