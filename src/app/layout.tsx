import "@Styles/globals.css";
import type { Metadata } from "next";
import { Cousine, Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const cousine = Cousine({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-cousine",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Framer Motion",
  description: "Scroll animations with Framer Motion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-background ${inter.className} ${cousine.variable} font-body text-text`}
      >
        {children}
      </body>
    </html>
  );
}
