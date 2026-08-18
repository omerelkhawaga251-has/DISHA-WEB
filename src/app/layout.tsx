import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Disha Elmasry | Creative Portfolio",
  description: "Creative portfolio for Disha Elmasry featuring warm aesthetics and clean design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body className={`${inter.className} bg-[#FFF7ED] text-stone-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
