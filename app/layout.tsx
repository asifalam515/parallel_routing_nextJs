import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Parallel Routing",
  description: "new way of routing",
};

export default function RootLayout({
  children,
  comments,
  members,
}: Readonly<{
  children: React.ReactNode;
  comments: React.ReactNode;
  members: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <h1>{children}</h1>
        <div className="flex">
          {comments}
          {members}
        </div>
      </body>
    </html>
  );
}
