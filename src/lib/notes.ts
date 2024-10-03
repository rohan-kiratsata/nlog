import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostDirectory, ReadPostOptions } from "@/types";

const defaultDirectory = path.join(process.cwd(), "posts");

const postsDirectory = path.join(process.cwd(), "posts");

function readPosts(options: ReadPostOptions = {}): PostDirectory[] {
  const { directory = defaultDirectory, extensions = [".md"] } = options;

  const files = fs.readdirSync(directory);
  let posts: PostDirectory[] = [];

  files.forEach((file) => {
    const full_path = path.join(directory, file);
    const stat = fs.statSync(full_path);

    if (stat.isDirectory()) {
      posts = posts.concat(readPosts({ ...options, directory: full_path }));
    } else if (extensions.includes(path.extname(file))) {
      const fileContents = fs.readFileSync(full_path, "utf8");
      const { data, content } = matter(fileContents);

      const slug = `/blog/${path.basename(file, path.extname(file))}`;

      posts.push({
        filePath: full_path.replace(process.cwd(), ""),
        frontMatter: data,
        content,
        slug,
      });
    }
  });

  return posts;
}

function getTags(): any {
  const posts = readPosts();
  const tags: Set<string> = new Set();

  posts.forEach((post) => {
    if (post.frontMatter.tags) {
      post.frontMatter.tags.forEach((tag: string) => tags.add(tag));
    }
  });

  return Array.from(tags);
}

export { readPosts, getTags };

export function readPost(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug: `/blog/${slug}`,
    frontMatter: data,
    content,
  };
}
