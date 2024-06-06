"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  CommandDialog,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
} from "@/components/ui/command";
import { Search } from "lucide-react";
import { Kbd } from "./kbd";
import { useDebounce } from "use-debounce";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Skeleton } from "./ui/skeleton";
import { categories } from "@/config/categories";

export function SearchDialog() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const deboundedQuery = useDebounce(query, 500);
  const [loading, setLoading] = React.useState(false);

  // TODO: Code to fetch the blogs from list and show them in dialog.
  React.useEffect(() => {
    if (deboundedQuery.length <= 0) {
      // If no blogs are available set data use-state to `null`
      return;
    }
    /*  async function fetchData() {
      setLoading(true);
      const {data, error} = await functionToFetchData()

      if(error){
        setLoading(false)
        return
      }
      else{
        setData()
        setLoading(false)
      }
    } */
    // fetchData()
  }, [deboundedQuery]);

  // Open dialog on key press
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const onSelect = React.useCallback((callback: () => unknown) => {
    setOpen(false);
    callback();
  }, []);

  return (
    <>
      <Button
        variant={"outline"}
        className="relative size-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
        onClick={() => setOpen(true)}
      >
        <Search className="size-4 xl:mr-2" aria-label="true" />
        <span className="hidden xl:inline-flex">Search blogs...</span>
        <Kbd
          title="Control"
          className="pointer-events-none absolute right-1.5 top-1.5 hidden xl:block"
        >
          Ctrl + K
        </Kbd>
      </Button>
      <CommandDialog
        open={open}
        onOpenChange={(open) => {
          setOpen(open);
          if (!open) {
            setQuery("");
          }
        }}
      >
        <CommandInput
          placeholder="Search blogs..."
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          <CommandGroup heading="Explore categories">
            {/* TODO: [FEATURE] List top 5 categories by number of blogs. */}
          </CommandGroup>
          <CommandEmpty
            className={cn(loading ? "hidden" : "py-6 text-center text-sm")}
          >
            Opps! I think I need to write about this...
          </CommandEmpty>
          {loading ? (
            <div className="space-y-1 overflow-hidden px-1 py-2">
              <Skeleton className="h-4 w-10 rounded" />
              <Skeleton className="h-8 rounded-sm" />
              <Skeleton className="h-8 rounded-sm" />
            </div>
          ) : // Map the blogs
          null}
        </CommandList>
      </CommandDialog>
    </>
  );
}
