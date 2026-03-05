import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { FooterOnBackground } from "@/components/FooterOnBackground";

export const metadata: Metadata = {
  title: "NorthPeak Climate",
  description: "HVAC & home comfort services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-dvh">
          <Navbar />
          {children}
          <FooterOnBackground />
        </div>
      </body>
    </html>
  );
}
