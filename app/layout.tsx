import type { Metadata } from "next";
import { Geist, Geist_Mono, Onest } from "next/font/google";
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

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin", "cyrillic"],
  weight: ["400","500","600", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dvasilevdesign.vercel.app"),

  title: "Дмитрий Васильев – Product designer",
  description: "Портфолио продуктового дизайнера",

  openGraph: {
    title: "Дмитрий Васильев – Product designer",
    description: "Проектирую высоконагруженные интерфейсы, дашборды, AI-продукты, корпоративные системы и личные кабинеты",
    images: [
      {
        url: "/portfolio_ogimage.jpg",
        width: 1200,
        height: 630,
        alt: "Дмитрий Васильев – Product designer",
      },
    ],
    type: "website",
    locale: "ru_RU",
  },

  twitter: {
    card: "summary_large_image",
    title: "Дмитрий Васильев – Product designer",
    description: "Проектирую высоконагруженные интерфейсы, дашборды, AI-продукты, корпоративные системы и личные кабинеты",
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
      className={`${geistSans.variable} ${geistMono.variable} ${onest.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}