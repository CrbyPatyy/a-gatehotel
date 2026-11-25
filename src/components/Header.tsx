"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

// Original site nav items — matches a-gatehotel.com/hakodate exactly
const navLinks = [
  { href: "/",            keyEn: "Home",             keyJp: "ホーム" },
  { href: "/rooms",       keyEn: "Facilities",        keyJp: "施設案内" },
  { href: "/plan",        keyEn: "Pricing Plans",     keyJp: "料金プラン" },
  { href: "/merit",       keyEn: "Merits",            keyJp: "メリット" },
  { href: "/faq",         keyEn: "FAQ",               keyJp: "よくある質問" },
  { href: "/access",      keyEn: "Access",            keyJp: "アクセス" },
  { href: "/contact",     keyEn: "Management Co.",    keyJp: "運営会社" },
];

// Original nav background colour — dark olive from the screenshot
const NAV_BG = "#4B4535";

export default function Header() {
  const { lang, setLang } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* ══════════════════════════════════════════
          TOP STRIP — logo + lang toggle + booking
      ══════════════════════════════════════════ */}
      <div className="bg-white w-full border-b border-[#E8E4DF]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-[72px] flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/img/logo.png"
              alt="A-Gate Hotel Hakodate"
              width={140}
              height={48}
              className="object-contain"
              priority
            />
          </Link>

          {/* Right: lang + reservation */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "en" ? "jp" : "en")}
              className="text-[11px] font-semibold tracking-widest px-3 py-1.5 border border-[#4B4535]/30 text-[#4B4535] hover:bg-[#4B4535] hover:text-white transition-all"
            >
              {lang === "en" ? "日本語" : "English"}
            </button>
            <Link
              href="/reservation"
              className="text-[11px] font-bold tracking-[0.1em] uppercase px-5 py-2.5 bg-[#C9924A] text-white hover:bg-[#B87E38] transition-colors"
            >
              {lang === "en" ? "Book Now" : "ご予約"}
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-[#4B4535]"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          NAV BAR — dark olive, full width
          Matches original a-gatehotel.com/hakodate
      ══════════════════════════════════════════ */}
      <nav
        className="w-full hidden md:block sticky top-0 z-50"
        style={{ backgroundColor: NAV_BG }}
      >
        <div className="max-w-7xl mx-auto flex">
          {navLinks.map((link) => {
            // Active = exact match, or /rooms matches any /rooms subpath
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative flex-1 text-center py-3.5 text-sm font-medium text-white transition-colors hover:bg-black/15"
                style={{
                  borderBottom: active ? "3px solid #C9924A" : "3px solid transparent",
                  backgroundColor: active ? "rgba(0,0,0,0.18)" : undefined,
                }}
              >
                {lang === "en" ? link.keyEn : link.keyJp}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* ══════════════════════════════════════════
          MOBILE DRAWER
      ══════════════════════════════════════════ */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setMenuOpen(false)}
        />
        {/* Slide-in panel */}
        <div
          className={`absolute top-0 left-0 h-full w-72 shadow-2xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{ backgroundColor: NAV_BG }}
        >
          <div className="flex justify-between items-center p-5 border-b border-white/20">
            <Image
              src="/img/logo.png"
              alt="A-Gate"
              width={90}
              height={30}
              className="object-contain brightness-0 invert"
            />
            <button onClick={() => setMenuOpen(false)} className="text-white p-1">
              <X size={22} />
            </button>
          </div>

          <div className="flex flex-col">
            {navLinks.map((link) => {
              const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-4 px-6 text-sm font-medium text-white border-b border-white/10 hover:bg-black/20 transition-colors"
                  style={{
                    borderLeft: active ? "3px solid #C9924A" : "3px solid transparent",
                  }}
                >
                  {lang === "en" ? link.keyEn : link.keyJp}
                </Link>
              );
            })}
          </div>

          <div className="p-5 mt-2 flex flex-col gap-3">
            <button
              onClick={() => setLang(lang === "en" ? "jp" : "en")}
              className="text-sm font-semibold py-2 px-4 border border-white/40 text-white hover:bg-white/10 transition-colors"
            >
              {lang === "en" ? "日本語に切替" : "Switch to English"}
            </button>
            <Link
              href="/reservation"
              onClick={() => setMenuOpen(false)}
              className="text-center text-sm font-bold py-3 px-4 bg-[#C9924A] text-white hover:bg-[#B87E38] transition-colors"
            >
              {lang === "en" ? "Book Now" : "ご予約"}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
