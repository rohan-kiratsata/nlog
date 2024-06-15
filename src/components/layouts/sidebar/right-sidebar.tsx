import { NewsletterCard } from "@/components/newsletter-card";
import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { categories } from "@/config/categories";
import { getTags } from "@/lib/notes";
import { Category } from "@/types";
import Link from "next/link";
import React from "react";

export default function RightSidebar() {
  const tags = getTags();
  console.log(tags);

  return (
    <>
      <aside className="">
        <Shell variant="sidebar">
          <ScrollArea className="h-screen w-[260px]">
            <Shell variant="sidebar" className="">
              <h6 className="text-base font-semibold tracking-tight">
                Popular Tags
              </h6>
              <div className="grid grid-cols-1 gap-2">
                {tags.map((tag: any) => (
                  <TagsItem key={tag} title={tag} />
                ))}
              </div>
            </Shell>
          </ScrollArea>
        </Shell>
      </aside>
    </>
  );
}

interface TagsItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
}

const TagsItem = React.forwardRef<React.ElementRef<"a">, TagsItemProps>(
  ({ title, ...props }, ref) => {
    return (
      <Link
        className="font-mono text-sm text-neutral-500 hover:text-white hover:underline"
        href={`/${title.toLowerCase()}`}
      >
        #{title}
      </Link>
    );
  },
);

TagsItem.displayName = "TagsItem";
