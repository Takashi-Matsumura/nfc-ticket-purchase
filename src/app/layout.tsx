import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "./components/layout/HomeLayout";

import { Toaster } from "@/components/ui/toaster";

// Noto_Sans_JP
import { Noto_Sans_JP } from "next/font/google";
import clsx from "clsx";
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "Ticket Counter",
  description: "Shadcn/UI Ticket Counter",
};

type LayoutProps = {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
};

export default function RootLayout({
  children,
  showHeader = true,
  showFooter = true,
}: LayoutProps) {
  return (
    <html lang="ja" className={clsx(notoSansJP.variable, "font-sans")}>
      <body>
        {showHeader && (
          <Header style={{ position: "fixed", top: 0, width: "100%" }} />
        )}
        <main style={{ paddingTop: "60px", paddingBottom: "60px" }}>
          {children}
        </main>
        <Toaster />
        {showFooter && (
          <Footer style={{ position: "fixed", bottom: 0, width: "100%" }} />
        )}
      </body>
    </html>
  );
}
