import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { siteUrl } from "./site-config";
import { ScrollProgressBar } from "@/components/sites/www-abhirammangipudi-tech-b8d20eae/shared/ScrollProgressBar";
import { CookieConsent } from "@/components/sites/www-abhirammangipudi-tech-b8d20eae/shared/CookieConsent";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const title = "Momin | momibat";
const description =
  "Muhammad Momin — Cybersecurity student at GIKI, pentesting, AI security, and hardware hacking.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | momibat",
  },
  description,
  keywords: [
    "Muhammad Momin",
    "momibat",
    "cybersecurity",
    "penetration testing",
    "AI security",
    "GIKI",
  ],
  authors: [{ name: "Muhammad Momin" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: "momibat",
  },
  twitter: {
    card: "summary",
    title,
    description,
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
      className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} ${spaceGrotesk.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#08090b]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-[#8b5cf6] focus:text-[#08090b] focus:font-semibold focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <ScrollProgressBar />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
