"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

// Nav labels matching original a-gatehotel.com/hakodate exactly
const navLinks = [
  { href: "/",        keyEn: "Home",          keyJp: "ホーム" },
  { href: "/rooms",   keyEn: "Facilities",    keyJp: "施設案内" },
  { href: "/plan",    keyEn: "Pricing Plans", keyJp: "料金プラン" },
  { href: "/merit",   keyEn: "Merits",        keyJp: "メリット" },
  { href: "/faq",     keyEn: "FAQ",           keyJp: "よくある質問" },
  { href: "/access",  keyEn: "Access",        keyJp: "アクセス" },
  { href: "/contact", keyEn: "Company",       keyJp: "運営会社" },
];

export default function Header() {
  const { lang, setLang } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const diff = currentY - lastY;

      // Mark as scrolled past hero
      setScrolled(currentY > 60);

      // Hide when scrolling DOWN (and past threshold), show when scrolling UP
      if (diff > 6 && currentY > 120) {
        setHidden(true);
      } else if (diff < -6) {
        setHidden(false);
      }

      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Transparent on home hero, white/frosted when scrolled or on subpages
  const transparent = isHome && !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        } ${
          transparent
            ? "bg-transparent"
            : "bg-white/98 backdrop-blur-xl border-b border-[#E8E4DF] shadow-sm"
        }`}
      >
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

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-[13px] font-medium tracking-wide transition-colors ${
                    transparent
                      ? "text-white hover:text-amber-300"
                      : "text-[#2D2D2D] hover:text-[#C9924A]"
                  } ${active ? (transparent ? "text-amber-300" : "text-[#C9924A]") : ""}`}
                >
                  {lang === "en" ? link.keyEn : link.keyJp}
                  {/* Amber underline for active */}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#C9924A] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: lang toggle + Book Now */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "en" ? "jp" : "en")}
              className={`text-[11px] font-semibold tracking-widest px-3 py-1.5 border transition-all ${
                transparent
                  ? "border-white/50 text-white hover:bg-white hover:text-[#1B2A4A]"
                  : "border-[#1B2A4A]/30 text-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white"
              }`}
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
            className={`md:hidden p-2 transition-colors ${
              transparent ? "text-white" : "text-[#1B2A4A]"
            }`}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

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
          className={`absolute top-0 left-0 h-full w-72 bg-[#1B2A4A] shadow-2xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
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
                  className="py-4 px-6 text-sm font-medium text-white border-b border-white/10 hover:bg-white/10 transition-colors"
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
