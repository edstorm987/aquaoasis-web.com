import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ChatBot } from "@/components/ChatBot";
import { CookieConsent } from "@/components/CookieConsent";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "AquaOasis-Web | Get online and grow with confidence",
  description:
    "Practical websites, Google visibility, campaigns, business photography and custom software for businesses ready to get online and grow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        {children}
        <CookieConsent />
        <ChatBot />
        <Script
          src={process.env.NEXT_PUBLIC_AQUA_TAG_URL ?? "https://aqua-crm.com/aqua-tag.js"}
          data-site-key="aqua_public_aquaoasis_web_v1"
          data-property="aquaoasis-web"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
