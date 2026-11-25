"use client";
import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/contexts/LangContext";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

const cols = [
  {
    title: { en: "Explore", jp: "サイトマップ" },
    links: [
      { href: "/rooms",       key: "nav.rooms" },
      { href: "/plan",        key: "nav.plan" },
      { href: "/merit",       key: "nav.merit" },
      { href: "/faq",         key: "nav.faq" },
    ],
  },
  {
    title: { en: "Information", jp: "インフォメーション" },
    links: [
      { href: "/access",      key: "nav.access" },
      { href: "/contact",     key: "contact.title" },
      { href: "/reservation", key: "nav.book" },
      { href: "/privacy",     key: "footer.privacy" },
    ],
  },
];

export default function Footer() {
  const { t, lang } = useLang();
  return (
    <footer className="bg-[#0F1C33] text-white">
      {/* Top strip */}
      <div className="border-b border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Image
              src="/img/logo.png"
              alt="A-Gate Hotel"
              width={100}
              height={32}
              className="object-contain brightness-0 invert mb-6"
            />
            <p className="text-white/55 text-sm leading-relaxed mb-6 max-w-xs">
              {t("footer.tagline")}
            </p>
            <div className="flex flex-col gap-2.5 text-sm text-white/50">
              <span className="flex items-start gap-2.5">
                <MapPin size={13} className="mt-0.5 shrink-0 text-[#C9924A]" />
                {t("footer.address")}
              </span>
              <a href="tel:0138275555" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Phone size={13} className="shrink-0 text-[#C9924A]" />
                0138-27-5555
              </a>
              <a href="mailto:info@a-gatehotel.com" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Mail size={13} className="shrink-0 text-[#C9924A]" />
                info@a-gatehotel.com
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {cols.map((col) => (
            <div key={col.title.en}>
              <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C9924A] mb-5">
                {lang === "en" ? col.title.en : col.title.jp}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/50 hover:text-white transition-colors inline-flex items-center gap-1 group"
                    >
                      {t(l.key)}
                      <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-60 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-white/30">
        <span>{t("footer.copyright")}</span>
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="hover:text-white/60 transition-colors">{t("footer.privacy")}</Link>
          <span>Designed with ♡ for Hakodate</span>
        </div>
      </div>
    </footer>
  );
}
