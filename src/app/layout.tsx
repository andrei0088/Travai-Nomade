import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Travail Nomade",
  description: "Travail Nomade",
  icons: "/logo.png", // This will set the favicon
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <nav className="flex items-center ">
            <Link href="./" className="flex items-center">
              {" "}
              <img src="./logo.png" alt="" className="w-20" />
              <p className="text-gray-800 px-3 py-2 rounded hover:bg-gray-300">
                Home
              </p>
            </Link>
            <Link
              href="./#seccond"
              className="text-gray-800 px-3 py-2 rounded hover:bg-gray-300"
            >
              Différences{" "}
            </Link>
            <Link
              href="./#contact"
              className="text-gray-800 px-3 py-2 rounded hover:bg-gray-300"
            >
              Contact
            </Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
