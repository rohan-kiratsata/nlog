import Link from "next/link";
import React from "react";
import { Logo } from "../icons";
import { siteConfig } from "@/config/site";

type Props = {};

export default function MainNavbar({}: Props) {
  return (
    <div className="hidden gap-6 lg:flex">
      <Link href={"/"} className="hidden items-center lg:flex">
        <Logo />
        <span className="hidden font-bold lg:inline-block">
          {siteConfig.name}
        </span>
      </Link>
    </div>
  );
}
