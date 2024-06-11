import { strict } from "assert";

export interface NavItem {
  title: string;
  href?: string;
  label?: string;
  description?: string;
  disabled?: boolean;
  external?: boolean;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}
export interface NavWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}
export type MainNavItem = NavWithOptionalChildren;

export type Author = {
  name: string;
  picture: string;
};

export type Tag = {
  name: string;
};

export type Category = {
  name: string;
  slug: string;
};

export type Post = {
  title: string;
  slug: string;
  date: string;
  coverImage: string;
  author: Author;
};

export type PostDirectory = {
  filePath: string;
  frontMatter: { [key: string]: any };
  content: string;
};

export type ReadPostOptions = {
  directory?: string;
  extensions?: string[];
};
