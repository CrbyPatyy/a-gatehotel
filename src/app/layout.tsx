import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/contexts/LangContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBookingBar from "@/components/StickyBookingBar";

export const metadata: Metadata = {
  title: "A-Gate Hotel Hakodate | 函館駅前 モダンホテル",
  description:
    "A-Gate Hotel Hakodate — JR函館駅から徒歩5分。毎晩無料ドリンク、7F大浴場・サウナ、シャンプーバーなど嬉しい特典多数。公式サイト最安値保証。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        {/* Google Fonts — loaded via <link> to avoid CSS @import ordering issues */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&family=Noto+Sans+JP:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F9F7F4] text-[#1A1A1A] antialiased">
        <LangProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <StickyBookingBar />
        </LangProvider>
      </body>
    </html>
  );
}
