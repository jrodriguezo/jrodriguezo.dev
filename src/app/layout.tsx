import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const AUTHOR = "Jesus Rodriguez Ovejero";

export const metadata: Metadata = {
  title: `Learn more about ${AUTHOR}`,
  description: `${AUTHOR} is a Telecommunications Engineer specialized in Computer Science. Currently, he works as a Frontend Developer. Visit his little blog and take a look at his most recent projects.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}