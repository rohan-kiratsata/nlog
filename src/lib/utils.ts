import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateSlug(name: string, customSlug?: string): string {
  if (customSlug) {
    return customSlug.startsWith("/") ? customSlug : `/${customSlug}`;
  }
  return `/${name.toLowerCase().replace(/\s+/g, "-")}`;
}
