import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter_Tight } from "next/font/google";
import './globals.css';
import './portfolio.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin", "cyrillic"],
  weight: ["600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dvasilevdesign.vercel.app"),

  title: "Дмитрий Васильев Product Designer",
  description: "Портфолио продуктового дизайнера",

  openGraph: {
    title: "Дмитрий Васильев Product Designer",
    description: "Портфолио продуктового дизайнера",
    images: [
      {
        url: "/portfolio_ogimage.jpg",
        width: 1200,
        height: 630,
        alt: "Дмитрий Васильев — Product Designer",
      },
    ],
    type: "website",
    locale: "ru_RU",
  },

  twitter: {
    card: "summary_large_image",
    title: "Дмитрий Васильев Product Designer",
    description: "Портфолио продуктового дизайнера",
    images: ["/portfolio_ogimage.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} ${interTight.variable} h-full antialiased`}
    >
      <body className="home min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}