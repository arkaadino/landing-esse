import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Essential Kopi - Premium Coffee Experience",
  description: "Discover the finest coffee blends and premium coffee experience at Essential Kopi. From single origin to house blends, we serve excellence in every cup.",
  keywords: "coffee, premium coffee, jakarta coffee, specialty coffee, single origin, house blend",
  authors: [{ name: "Essential Kopi Team" }],
  creator: "Essential Kopi",
  openGraph: {
    title: "Essential Kopi - Premium Coffee Experience",
    description: "Premium coffee for essential moments",
    url: "https://essentialkopi.com",
    siteName: "Essential Kopi",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Essential Kopi - Premium Coffee",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Essential Kopi - Premium Coffee Experience",
    description: "Premium coffee for essential moments",
    images: ["/og-image.jpg"],
    creator: "@essentialkopi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#8b4513' },
    ],
  },
  manifest: '/site.webmanifest',
  themeColor: '#8b4513',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#8b4513" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Essential Kopi" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-gradient-to-br from-amber-50 via-stone-50 to-yellow-50 min-h-screen`}
      >
        <div id="app-container">
          {children}
        </div>
      </body>
    </html>
  );
}