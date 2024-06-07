import fs from "fs";
import path from "path";
import matter from "gray-matter";

const post_directory = path.join(process.cwd(), "_posts");

export function readPosts(directory = post_directory) {
  const files = fs.readdirSync(directory);
  let posts = [];
  console.log(posts);

  files.forEach((file) => {
    const full_path = path.join(directory, file);
    const stat = fs.statSync(full_path);

    if (stat.isDirectory()) {
      posts = posts.concat(readPosts(full_path));
    } else if (path.extname(file) === ".md") {
      const fileContents = fs.readFileSync(full_path, "utf8");
      const { data, content } = matter(fileContents);

      posts.push({
        filePath: full_path.replace(process.cwd(), ""),
        front_matter: data,
        content,
      });
    }
  });
}
