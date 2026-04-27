import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Santiago Cattani — Technical Project Manager",
  description:
    "Senior TPM · AI, Fintech, SAP · LATAM & International. Personal portfolio of Santiago Cattani.",
  openGraph: {
    title: "Santiago Cattani — Technical Project Manager",
    description: "Senior TPM · AI, Fintech, SAP · LATAM & International.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0C0C0C] text-[#F2F2F2]">{children}</body>
    </html>
  );
}
