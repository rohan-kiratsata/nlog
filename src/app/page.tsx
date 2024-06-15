import { readPosts } from "@/lib/notes";
import Image from "next/image";

export default function Home() {
  const posts = readPosts();
  console.log("posts:", posts);
  return (
    <>
      <div>
        {/* {posts.map((post, index) => {
          return <div key={index}>{post.filePath}</div>;
        })} */}
        {/* {posts.map((post) => post.filePath)} */}
      </div>
    </>
  );
}
