import { Suspense } from "react";
import type { Metadata } from "next";
import "./globals.scss";
export const metadata: Metadata = {
  title: "Chatify",
  description: "A Web Chat Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-bs-theme="light">
      <body>
        <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>
      </body>
    </html>
  );
}
