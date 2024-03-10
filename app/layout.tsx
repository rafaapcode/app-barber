import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["500", "300", "400", "700"] });

export const metadata: Metadata = {
  title: "App Barber",
  description: "An app to help all barbershop's client",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("w-full h-full bg-[#000000] text-white", ubuntu.className)}>
        <Header />
        {children}
      </body>
    </html>
  );
}
