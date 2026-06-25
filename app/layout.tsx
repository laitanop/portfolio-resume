import type { Metadata } from "next";
import type { ReactNode } from "react";
import Navbar from "./components/Navbar";
import DotSpotlight from "./components/DotSpotlight";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Dark dotted background",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <DotSpotlight />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
