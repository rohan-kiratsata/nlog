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
