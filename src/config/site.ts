import { MainNavItem } from "@/types";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "NLog",
  github: "https://github.com/rohan-kiratsata/nlog",
  description:
    "An open source starter blog template built with latest Next.js 14 app router, Tailwindcss and shadcn/ui.",
  url: "https://nlog.rohankiratsata.com/",

  mainNav: [
    {
      title: "Home",
      items: [
        {
          title: "Blogs",
          href: "/blogs",
          description: "explore all the blogs",
          items: [],
        },
        {
          title: "GitHub",
          external: true,
          href: "https://github.com/rohan-kiratsata/nlog",
          description: "Clone this repository",
          items: [],
        },
        {
          title: "About",
          href: "/about",
          description: "a bit about the platform",
          items: [],
        },
      ],
    },
  ] satisfies MainNavItem[],
};
