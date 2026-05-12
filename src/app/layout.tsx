import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";


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
  keywords: ["portfolio", "developer", "react", "nextjs"],
  authors: [{ name: "Saidul Islam", url: "https://mdsaidulislam.com" }],
  openGraph: {
    title: "Saidul Islam Portfolio",
    description: "MD Saidul Islam - Web Developer",
    url: "https://mdsaidulislam.com",
    siteName: "Saidul Islam",
    images: [
      {
        url: "https://mdsaidulislam.com/portfolio.jpeg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saidul Islam Portfolio",
    description: "MD Saidul Islam - Web Developer",
    images: ["https://mdsaidulislam.com/portfolio.jpeg"],
  },
  icons: {
    icon: "/favicon.ico", // root of public folder
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.json",
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
        
    <Script
      id="schema-person"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Saidul Islam",
          url: "https://mdsaidulislam.com",
          image: "https://mdsaidulislam.com/portfolio.jpeg",
          sameAs: [
            "https://github.com/yourgithub",
            "https://linkedin.com/in/yourlinkedin"
          ],
          jobTitle: "Full Stack Developer",
        }),
      }}
    />
      </body>
      
    </html>
  );
}
