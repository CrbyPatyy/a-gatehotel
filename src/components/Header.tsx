"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

const navLinks = [
  { href: "/rooms",       key: "nav.rooms" },
  { href: "/plan",        key: "nav.plan" },
  { href: "/merit",       key: "nav.merit" },
  { href: "/faq",         key: "nav.faq" },
  { href: "/access",      key: "nav.access" },
];

export default function Header() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  const transparent = isHome && !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          transparent
            ? "bg-transparent"
            : "bg-white/98 backdrop-blur-xl shadow-[0_1px_0_rgba(27,42,74,0.08)]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-[72px] flex items-center justify-between">

          {/* ── Logo ── */}
          <Link
            href="/"
            className={`flex items-center group transition-all duration-300 ${
              transparent ? "" : "bg-[#1B2A4A] px-3 py-1.5"
            }`}
          >
            <Image
              src="/img/logo.png"
              alt="A-Gate Hotel Hakodate"
              width={110}
              height={36}
              className="object-contain"
              priority
            />
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-[13px] font-medium tracking-wide transition-colors ${
                    active
                      ? "text-[#C9924A]"
                      : transparent
                        ? "text-white/85 hover:text-white"
                        : "text-[#1B2A4A]/80 hover:text-[#1B2A4A]"
                  }`}
                >
                  {t(link.key)}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-px bg-[#C9924A] transition-transform origin-left duration-200 ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* ── Right actions ── */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Lang toggle */}
            <button
              onClick={() => setLang(lang === "en" ? "jp" : "en")}
              className={`text-[11px] font-semibold tracking-[0.14em] uppercase px-3 py-1.5 transition-colors ${
                transparent
                  ? "text-white/70 hover:text-white"
                  : "text-[#1B2A4A]/60 hover:text-[#1B2A4A]"
              }`}
            >
              {lang === "en" ? "日本語" : "English"}
            </button>

            <div className={`w-px h-4 ${transparent ? "bg-white/25" : "bg-[#1B2A4A]/15"}`} />

            {/* Book CTA */}
            <Link
              href="/reservation"
              className={`text-[11px] font-bold tracking-[0.12em] uppercase px-5 py-2.5 transition-all ${
                transparent
                  ? "bg-[#C9924A] text-white hover:bg-[#B87E38]"
                  : "bg-[#1B2A4A] text-white hover:bg-[#243660]"
              }`}
            >
              {t("nav.book")}
            </Link>
          </div>

          {/* ── Mobile burger ── */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              transparent ? "text-white" : "text-[#1B2A4A]"
            }`}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* ── Mobile full-screen drawer ── */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-400 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#0F1C33]/80 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-80 bg-[#F9F7F4] shadow-2xl transition-transform duration-400 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-5 right-5 p-2 text-[#1B2A4A]"
          >
            <X size={22} />
          </button>

          <div className="pt-20 px-8 pb-8 flex flex-col h-full">
            {/* Logo inside drawer */}
            <div className="mb-10 inline-block w-fit bg-[#1B2A4A] px-3 py-1.5">
              <Image src="/img/logo.png" alt="A-Gate" width={90} height={28} className="object-contain" />
            </div>

            <nav className="flex flex-col gap-1 flex-1">
              {[{ href: "/", key: "nav.home" }, ...navLinks].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-3 px-4 text-sm font-medium border-b border-[#EAE6E1] transition-colors ${
                    pathname === link.href
                      ? "text-[#C9924A]"
                      : "text-[#1B2A4A] hover:text-[#C9924A]"
                  }`}
                >
                  {t(link.key)}
                </Link>
              ))}
            </nav>

            <div className="pt-6 flex flex-col gap-3">
              <button
                onClick={() => setLang(lang === "en" ? "jp" : "en")}
                className="text-[12px] font-semibold tracking-widest uppercase py-2 px-4 border border-[#1B2A4A]/30 text-[#1B2A4A] hover:border-[#1B2A4A] transition-colors"
              >
                {lang === "en" ? "日本語に切替" : "Switch to English"}
              </button>
              <Link
                href="/reservation"
                className="text-center text-[11px] font-bold tracking-[0.12em] uppercase py-3 px-4 bg-[#C9924A] text-white hover:bg-[#B87E38] transition-colors"
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
