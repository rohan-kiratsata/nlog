import { siteConfig } from "@/config/site";
import MainNavbar from "./main-nav";
import MobileNavbar from "./mobile-nav";
import { Button } from "../ui/button";
import { Github } from "../icons";
import { SearchDialog } from "../search-dialog";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background">
      <div className="container flex h-16 items-center">
        <MainNavbar navItems={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end gap-3">
          <SearchDialog />
          <Button size={"icon"} variant="outline" className="!p-1">
            <Github />
          </Button>
        </div>
      </div>
    </header>
  );
}
