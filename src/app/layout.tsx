import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Chatify",
  description: "A Web Chat Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
