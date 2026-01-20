import type { Metadata } from "next";
import { Zen_Old_Mincho, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const zenOldMincho = Zen_Old_Mincho({
  weight: ["400", "500", "600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-zen-old-mincho",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "富山地方鉄道 車内メロディクリエイト体験 | Toyama Railway",
  description: "あなたの作ったメロディが、電車で流れる。一生胸を張れる、限定5枠の特別な体験。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${zenOldMincho.variable} ${notoSansJP.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
