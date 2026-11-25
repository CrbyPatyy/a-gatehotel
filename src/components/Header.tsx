"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

const navLinks = [
  { href: "/", key: "nav.home" },
  { href: "/rooms", key: "nav.rooms" },
  { href: "/plan", key: "nav.plan" },
  { href: "/merit", key: "nav.merit" },
  { href: "/faq", key: "nav.faq" },
  { href: "/access", key: "nav.access" },
];

export default function Header() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/img/logo.png"
              alt="A-Gate Hotel Hakodate"
              width={120}
              height={40}
              className={`object-contain transition-all ${scrolled ? "brightness-100" : "brightness-0 invert"}`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors relative group ${
                  pathname === link.href
                    ? scrolled ? "text-[#D4973B]" : "text-[#D4973B]"
                    : scrolled ? "text-[#1A1A1A] hover:text-[#D4973B]" : "text-white/90 hover:text-white"
                }`}
              >
                {t(link.key)}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[#D4973B] transition-all duration-200 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Right: Lang toggle + Book CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "en" ? "jp" : "en")}
              className={`text-xs font-semibold tracking-widest px-3 py-1.5 rounded-full border transition-all ${
                scrolled
                  ? "border-[#1B2A4A] text-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white"
                  : "border-white/60 text-white hover:border-white hover:bg-white/10"
              }`}
            >
              {lang === "en" ? "日本語" : "English"}
            </button>
            <Link
              href="/reservation"
              className="text-sm font-semibold px-5 py-2 rounded-full bg-[#D4973B] text-white hover:bg-[#C0862A] transition-colors shadow-sm"
            >
              {t("nav.book")}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-[#1B2A4A]" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="pt-20 px-6 pb-6 flex flex-col h-full">
            <nav className="flex flex-col gap-1 flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-[#1B2A4A] text-white"
                      : "text-[#1A1A1A] hover:bg-[#F8F7F4]"
                  }`}
                >
                  {t(link.key)}
                </Link>
              ))}
            </nav>
            <div className="border-t border-[#E8E4DF] pt-4 flex flex-col gap-3">
              <button
                onClick={() => setLang(lang === "en" ? "jp" : "en")}
                className="text-sm font-semibold py-2 px-4 rounded-full border border-[#1B2A4A] text-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white transition-colors"
              >
                {lang === "en" ? "日本語に切替" : "Switch to English"}
              </button>
              <Link
                href="/reservation"
                className="text-center text-sm font-semibold py-3 px-4 rounded-full bg-[#D4973B] text-white hover:bg-[#C0862A] transition-colors"
              >
                {t("nav.book")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

