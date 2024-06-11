import { readPosts } from "@/lib/notes";
import Image from "next/image";

export default function Home() {
  const posts = readPosts();
  console.log("posts:", posts);
  return <></>;
}
