import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ChatBot } from "@/components/ChatBot";
import { CookieConsent } from "@/components/CookieConsent";
import "./globals.css";

export const metadata: Metadata = {
  title: "AquaOasis-Web | The all-in-one digital agency",
  description:
    "One joined-up team for Google visibility, converting websites, campaigns, original media and connected business software.",
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
