import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "./components/layout/HomeLayout";

// Noto_Sans_JP
import { Noto_Sans_JP } from "next/font/google";
import clsx from "clsx";
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "BBS: my Blogs",
  description: "My Personal Blog Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={clsx(notoSansJP.variable, "font-sans")}>
      <body>
        <Header style={{ position: "fixed", top: 0, width: "100%" }} />
        <div style={{ paddingTop: "60px", paddingBottom: "60px" }}>
          {children}
        </div>
        <Footer style={{ position: "fixed", bottom: 0, width: "100%" }} />
      </body>
    </html>
  );
}
