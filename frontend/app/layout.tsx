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
  title: "Kashish Lalwani — Data Scientist & Applied AI Engineer",
  description:
    "Portfolio of Kashish Lalwani — building production-grade AI systems, retrieval pipelines, experimentation infrastructure, and data-driven decision systems. MS Data Science, Stony Brook University.",
  openGraph: {
    title: "Kashish Lalwani — Data Scientist & Applied AI Engineer",
    description:
      "Production-grade AI, retrieval systems, and analytics engineering. Focused on fintech, real-time decisions, and measurable ML outcomes.",
    url: "https://kashishlalwani-portfolio.vercel.app",
    siteName: "Kashish Lalwani",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kashish Lalwani — Data Scientist & Applied AI Engineer",
    description:
      "Production-grade AI, retrieval systems, and analytics engineering.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
