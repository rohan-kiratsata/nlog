import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layouts/header";
import MainSidebar from "@/components/layouts/sidebar/main-sidebar";
import { Shell } from "@/components/shell";
import RightSidebar from "@/components/layouts/sidebar/right-sidebar";
import "highlight.js/styles/github-dark.css";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <Shell className="flex items-start justify-between">
            <MainSidebar />
            <Shell>{children}</Shell>
            <RightSidebar />
          </Shell>
        </ThemeProvider>
      </body>
    </html>
  );
}
