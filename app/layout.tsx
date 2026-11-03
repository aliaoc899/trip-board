import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Adriatic Table — Trip Board",
  description: "An interactive, day-by-day field journal for a food and culture trip.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
