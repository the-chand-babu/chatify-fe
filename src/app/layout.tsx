import { Suspense } from "react";
import type { Metadata } from "next";
import { Atkinson_Hyperlegible, Nunito_Sans } from "next/font/google";
import "./globals.scss";

//font apply to the project
const atk = Atkinson_Hyperlegible({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const nunSans = Nunito_Sans({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

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
    <html
      lang="en"
      data-bs-theme="light"
      className={`${nunSans.className} ${atk.className}`}
    >
      <body>
        <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>
      </body>
    </html>
  );
}
