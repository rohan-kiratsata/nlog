import React from "react";
import { readPost } from "@/lib/notes";
import { MDXRemote } from "next-mdx-remote/rsc";
import { MDXComponents } from "@/components/mdx-component";
import rehypeHighlight from "rehype-highlight";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await readPost(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article className="prose prose-lg mx-auto dark:prose-invert">
      <h1>{post.frontMatter.title || post.slug}</h1>
      <div className="flex flex-col">
        <span className="text-base font-semibold text-white">
          {post.frontMatter.author ?? "Anonymous"}
        </span>
        <div className="">
          <span className="text-sm">1 min read</span> •{" "}
          <span className="text-sm">{post.frontMatter.date}</span>
        </div>
      </div>
      <MDXRemote
        source={post.content}
        components={MDXComponents}
        options={{
          mdxOptions: {
            rehypePlugins: [rehypeHighlight],
          },
        }}
      />
    </article>
  );
}
