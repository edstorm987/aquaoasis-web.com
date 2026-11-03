import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "AquaOasis-Web | Enter the digital age",
  description:
    "AquaOasis-Web helps local businesses, startups, and creators get online with Google Profile setup, websites, social presence, and growth support.",
};

const aquaBotChallengeSource = process.env.NEXT_PUBLIC_AQUA_BOT_CHALLENGE_URL?.trim()
  || (process.env.NODE_ENV === "production"
    ? "https://www.aqua-crm.co.uk/aqua-bot-challenge.js"
    : "http://localhost:3032/aqua-bot-challenge.js");

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          id="aqua-bot-challenge"
          src={aquaBotChallengeSource}
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
