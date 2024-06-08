import { NewsletterCard } from "@/components/newsletter-card";
import { Shell } from "@/components/shell";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

export default function MainSidebar() {
  return (
    <>
      <aside className="w-[300px]">
        <Shell variant={"sidebar"}>
          <ScrollArea>
            <NewsletterCard />
          </ScrollArea>
        </Shell>
      </aside>
    </>
  );
}
