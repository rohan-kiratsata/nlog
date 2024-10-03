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
    <article className="prose prose-lg dark:prose-invert mx-auto">
      <h1>{post.frontMatter.title || post.slug}</h1>
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
