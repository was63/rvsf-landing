import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RVSF India — ERP for Vehicle Recycling & Scrap Facilities",
  description:
    "The complete cloud-based ERP solution for Registered Vehicle Scrapping Facilities (RVSF) in India. Manage vehicles, sales, GST compliance, vendors, and analytics in one platform.",
  keywords: [
    "RVSF",
    "vehicle scrapping",
    "vehicle recycling",
    "ERP",
    "scrap facility management",
    "GST compliance",
    "India",
  ],
  openGraph: {
    title: "RVSF India — ERP for Vehicle Recycling & Scrap Facilities",
    description:
      "The complete cloud-based ERP for Registered Vehicle Scrapping Facilities. Manage vehicles, sales, GST, vendors & analytics.",
    url: "https://rvsf-india.com",
    siteName: "RVSF India",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
