import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextKit ChatBot AI",
  description: "Assistant generative text you can use that uses Ollama AI with any model from the Ollama AI provider.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex-1 max-w-6xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
