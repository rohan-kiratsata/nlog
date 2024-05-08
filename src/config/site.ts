import { MainNavItem } from "@/types";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "NLog",
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
          description: "all the blogs posted till now.",
          items: [],
        },
        {
          title: "GitHub",
          external: true,
          href: "https://github.com/rohan-kiratsata/nlog",
          description: "explore blog categories",
          items: [],
        },
        {
          title: "About",
          href: "/about",
          description: "a bit about us",
          items: [],
        },
      ],
    },

    // TODO: Map out categories here, when created
  ] satisfies MainNavItem[],
};
