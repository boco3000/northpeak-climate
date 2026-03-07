import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { FooterOnBackground } from "@/components/FooterOnBackground";

export const metadata: Metadata = {
  metadataBase: new URL("https://northpeakclimate.com"), // change after deploy if needed

  title: {
    default: "NorthPeak Climate",
    template: "%s | NorthPeak Climate",
  },

  description:
    "NorthPeak Climate provides reliable HVAC repair, installation, and maintenance with clear communication and professional service.",

  applicationName: "NorthPeak Climate",

  openGraph: {
    title: "NorthPeak Climate",
    description:
      "Reliable heating, cooling, and maintenance services with clear communication and dependable scheduling.",
    url: "https://northpeakclimate.com", // change after deploy if needed
    siteName: "NorthPeak Climate",
    images: [
      {
        url: "/npc-opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "NorthPeak Climate HVAC Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "NorthPeak Climate",
    description:
      "Reliable heating, cooling, and maintenance services.",
    images: ["/npc-opengraph-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
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
