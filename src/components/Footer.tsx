"use client";
import Link from "next/link";
import { useLang } from "@/contexts/LangContext";
import { MapPin, Phone, Mail } from "lucide-react";

const footerLinks = [
  { href: "/rooms", key: "nav.rooms" },
  { href: "/plan", key: "nav.plan" },
  { href: "/merit", key: "nav.merit" },
  { href: "/faq", key: "nav.faq" },
  { href: "/access", key: "nav.access" },
  { href: "/contact", key: "contact.title" },
];

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-[#1B2A4A] text-white mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-sm bg-[#D4973B] flex items-center justify-center">
                <span className="text-white font-bold text-base leading-none">AG</span>
              </div>
              <div>
                <div className="font-bold text-sm tracking-widest uppercase">A-Gate Hotel</div>
                <div className="text-[10px] tracking-wider text-[#D4973B]">HAKODATE</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">{t("footer.tagline")}</p>
            <div className="flex flex-col gap-2 text-sm text-white/70">
              <span className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0 text-[#D4973B]" />
                {t("footer.address")}
              </span>
              <span className="flex items-center gap-2">
                <Phone size={14} className="shrink-0 text-[#D4973B]" />
                0138-27-5555
              </span>
              <span className="flex items-center gap-2">
                <Mail size={14} className="shrink-0 text-[#D4973B]" />
                info@a-gatehotel.com
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-[#D4973B] mb-5">
              {t("footer.links")}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {t(l.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Book CTA */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-[#D4973B] mb-5">
              {t("res.guarantee")}
            </h3>
            <p className="text-sm text-white/70 leading-relaxed mb-5">
              {t("plan.guarantee")}
            </p>
            <Link
              href="/reservation"
              className="inline-block px-6 py-3 bg-[#D4973B] text-white text-sm font-semibold rounded-full hover:bg-[#C0862A] transition-colors"
            >
              {t("nav.book")}
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <span>{t("footer.copyright")}</span>
          <Link href="/privacy" className="hover:text-white/70 transition-colors">
            {t("footer.privacy")}
          </Link>
        </div>
      </div>
    </footer>
  );
}

