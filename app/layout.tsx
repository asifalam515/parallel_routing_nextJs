import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Advance  Routing",
  description: "new way of routing",
};
type CP = {
  children: ReactNode;
  members: ReactNode;
  comments: ReactNode;
};
export default function RootLayout({ children, members, comments }: CP) {
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
