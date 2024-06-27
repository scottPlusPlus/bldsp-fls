import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import OgImage from '@/public/img/og_img.png';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "bldsp fls",
  description: "getting started with buildspace s5",
  openGraph: {
    images: [
      {
        url: OgImage.src,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "bldsp fls",
    description: "getting started with buildspace s5",
    creator: "@ScottPlusPlus",
    images:  OgImage.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}