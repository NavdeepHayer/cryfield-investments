import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cryfield Investments | Land Acquisition, Development & Investment",
  description:
    "Cryfield Investments is a privately owned company specialising in land acquisition, development, investment and funding in both private and public sectors. Over 500,000 sq ft developed across the UK and Europe.",
  keywords: [
    "property investment",
    "land acquisition",
    "property development",
    "UK investment",
    "real estate",
    "Cryfield Investments",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
