import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import Script from "next/script";
import { AquaBotEmbed } from "@/components/AquaBotEmbed";
import { ChatBot } from "@/components/ChatBot";
import { CookieConsent } from "@/components/CookieConsent";
import { RevealObserver } from "@/components/site/RevealObserver";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { AQUACRM_ORIGIN, SITE_URL } from "@/lib/site";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage", display: "swap" });
const body = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AquaOasis-Web | Enter the digital age. We sort you out.",
    template: "%s | AquaOasis-Web",
  },
  description:
    "Websites, social media, Google and local SEO, ecommerce and campaigns for small and growing businesses. Done for you, in plain English.",
  openGraph: {
    siteName: "AquaOasis-Web",
    type: "website",
    locale: "en_GB",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1020",
};

const aquaBotChallengeSource = process.env.NEXT_PUBLIC_AQUA_BOT_CHALLENGE_URL?.trim()
  || `${AQUACRM_ORIGIN}/aqua-bot-challenge.js`;
const aquaTagSource = process.env.NEXT_PUBLIC_AQUA_TAG_URL?.trim() || `${AQUACRM_ORIGIN}/aqua-tag.js`;
const aquaBotId = process.env.NEXT_PUBLIC_AQUA_BOT_ID?.trim();

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-GB" data-scroll-behavior="smooth" className={`${display.variable} ${body.variable}`}>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <RevealObserver />
        <CookieConsent />
        {aquaBotId ? <AquaBotEmbed botId={aquaBotId} /> : <ChatBot />}
        {/* After hydration: the challenge injects its widget into forms, which must not happen before React hydrates them. */}
        <Script id="aqua-bot-challenge" src={aquaBotChallengeSource} strategy="afterInteractive" />
        <Script
          src={aquaTagSource}
          data-site-key="aqua_public_aquaoasis_web_v1"
          data-property="aquaoasis-web"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
