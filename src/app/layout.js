import { Inter } from "next/font/google";
import "./globals.css";
import og from "./images/og.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bi' Binene Sor Alırken, Satarken, Kullanırken",
  description:
    "Aracınla ilgili soru sormak, yorum yapmak veya soruları cevaplamak ister misin? Araç alım satım kararlarınızı daha bilinçli hale getirmek için deneyimli kullanıcıların yorumlarına ve puanlarına göz atabilirsin.",
  openGraph: {
    title: "Bi' Binene Sor Alırken, Satarken, Kullanırken",
    description:
      "Aracınla ilgili soru sormak, yorum yapmak veya soruları cevaplamak ister misin? Araç alım satım kararlarınızı daha bilinçli hale getirmek için deneyimli kullanıcıların yorumlarına ve puanlarına göz atabilirsin.",
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-video-preview': -1,
    'max-image-preview': 'large',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <meta name="og:image" content={og.src} />
        <meta name="twitter:image" content={og.src} />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
