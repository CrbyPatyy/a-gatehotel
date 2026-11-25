import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/contexts/LangContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBookingBar from "@/components/StickyBookingBar";

export const metadata: Metadata = {
  title: "A-Gate Hotel Hakodate | Modern Comfort Near JR Hakodate Station",
  description:
    "A-Gate Hotel Hakodate — premium value hotel 5 minutes from JR Hakodate Station. Free evening drinks, sauna, shampoo bar & unique room types. Best rate guaranteed.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen flex flex-col bg-[#F8F7F4] text-[#1A1A1A] antialiased">
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
