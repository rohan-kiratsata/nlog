import { Shell } from "@/components/shell";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getTags } from "@/lib/notes";
import Link from "next/link";
import React from "react";

export default function RightSidebar() {
  const tags = getTags();
  console.log(tags);

  return (
    <>
      <aside className="">
        <Shell variant="default">
          <ScrollArea className="h-screen w-[260px]">
            <Shell variant="sidebar" className="">
              <h6 className="text-base font-semibold tracking-tight">
                Popular Tags
              </h6>
              <div className="flex flex-wrap gap-3">
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
        className="rounded-md bg-muted px-3 py-1 font-mono text-sm font-medium hover:bg-accent hover:text-accent-foreground"
        href={`/${title.toLowerCase()}`}
      >
        #{title}
      </Link>
    );
  },
);

TagsItem.displayName = "TagsItem";
