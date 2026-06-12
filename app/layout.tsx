import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ChatBot } from "@/components/ChatBot";
import { CookieConsent } from "@/components/CookieConsent";
import "./globals.css";

export const metadata: Metadata = {
  title: "AquaOasis-Web | Own it forever. No subscriptions.",
  description:
    "AquaOasis-Web helps small businesses and creators get found online with one-time payment websites, Google profiles, social setup, and optional SEO support.",
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
      </body>
    </html>
  );
}
