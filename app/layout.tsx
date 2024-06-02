import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "@/components/NavbarDemo";





const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tsukuyomi",
  description: "Portfolio of Tsukuyomi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
    <NavbarDemo />

        {children}
        </body>
    </html>
  );
}
