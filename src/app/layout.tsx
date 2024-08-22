import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans",});

export const metadata: Metadata = {
  title: "SGM - Agentes",
  description: "Sistema para gestao de multas - Agentes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  className={cn("antialiased bg-slate-200-700 max-h-screen", inter.variable)}>{children}</body>
    </html>
  );
}
