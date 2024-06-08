import { NewsletterCard } from "@/components/newsletter-card";
import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { categories } from "@/config/categories";
import { Category } from "@/types";
import Link from "next/link";
import React from "react";

export default function MainSidebar() {
  return (
    <>
      <aside className="">
        <Shell variant="sidebar">
          <ScrollArea className="h-screen w-[260px]">
            <NewsletterCard />
            <Shell variant="sidebar" className="">
              <h4 className="text-base font-semibold tracking-tight">
                Categories
              </h4>
              <div className="grid grid-cols-1 gap-2 ">
                {categories.map((category: Category) => (
                  <SidebarItem
                    key={category.name}
                    title={category.name}
                    href={category.slug}
                  />
                ))}
              </div>
            </Shell>
          </ScrollArea>
        </Shell>
      </aside>
    </>
  );
}

interface SidebarItemProps extends React.ComponentPropsWithoutRef<"button"> {
  title: string;
  href: string;
}

const SidebarItem = React.forwardRef<
  React.ElementRef<"button">,
  SidebarItemProps
>(({ title, href, ...props }, ref) => {
  return (
    <Button
      asChild
      ref={ref}
      variant="ghost"
      {...props}
      className="justify-start text-muted-foreground"
    >
      <Link href={href}>{title}</Link>
    </Button>
  );
});

SidebarItem.displayName = "SidebarItem";
