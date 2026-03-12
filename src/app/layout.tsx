import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { FooterOnBackground } from "@/components/FooterOnBackground";

export const metadata: Metadata = {
  metadataBase: new URL("https://northpeak-climate.vercel.app/"), 

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
    url: "https://northpeak-climate.vercel.app/", 
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
    description: "Reliable heating, cooling, and maintenance services.",
    images: ["/npc-opengraph-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: "NorthPeak Climate",
  url: "https://northpeak-climate.vercel.app/", 
  telephone: "(555) 555-0199",
  email: "hello@northpeakclimate.com",
  description:
    "NorthPeak Climate provides reliable HVAC repair, installation, and maintenance with clear communication and professional service.",
  areaServed: "Your local area and nearby towns",
  serviceType: [
    "AC Repair",
    "Furnace Repair",
    "System Installation",
    "Seasonal Maintenance",
    "Indoor Air Quality",
  ],
  openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-14:00"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <div className="min-h-dvh">
          <Navbar />
          {children}
          <FooterOnBackground />
        </div>
      </body>
    </html>
  );
}
