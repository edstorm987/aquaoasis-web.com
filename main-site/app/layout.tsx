import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "AquaOasis-Web | Enter the digital age",
  description:
    "AquaOasis-Web helps local businesses, startups, and creators get online with Google Profile setup, websites, social presence, and growth support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
