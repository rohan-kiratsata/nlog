import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostDirectory, ReadPostOptions } from "@/types";

const defaultDirectory = path.join(process.cwd(), "posts");

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

      posts.push({
        filePath: full_path.replace(process.cwd(), ""),
        frontMatter: data,
        content,
      });
    }
  });

  return posts;
}

export default readPosts;
