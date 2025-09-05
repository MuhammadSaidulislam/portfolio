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
  title: "Saidul Islam",
  description: "MD Saidul Islam",
};

  //  <link rel="shortcut icon" href="assets/images/top.png">
  //   <link rel="shortcut icon" href="assets/images/top.png">
  //   <link rel="shortcut icon" sizes="72x72" href="assets/images/top.png">
  //   <link rel="shortcut icon" sizes="114x114" href="assets/images/top.png"></link>

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased white-vertion black-bg`}
      >
        {children}
      </body>
    </html>
  );
}
