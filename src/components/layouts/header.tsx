import Link from "next/link";
import { Logo } from "../icons";
import { siteConfig } from "@/config/site";
import { Button } from "../ui/button";
import { Github } from "lucide-react";
import MobileNavbar from "./mobile-nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Logo />
            <span className="inline-block font-bold">{siteConfig.name}</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="sm:inline-flex"
            >
              <Link href={siteConfig.github}>
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <MobileNavbar />
          </nav>
        </div>
      </div>
    </header>
  );
}
