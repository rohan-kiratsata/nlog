import { siteConfig } from "@/config/site";
import MainNavbar from "./main-nav";
import MobileNavbar from "./mobile-nav";

export default function Header() {
  return (
    <header className="sticky top-0 w-full border-b bg-background">
      <div className="container flex h-16 items-center">
        <MainNavbar navItems={siteConfig.mainNav} />
      </div>
      {/* <MobileNavbar /> */}
    </header>
  );
}
