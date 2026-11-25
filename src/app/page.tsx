"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/LangContext";
import { ArrowRight, ChevronDown } from "lucide-react";

const meritStrip = [
  { icon: "🍺", key: "merit.drinks" },
  { icon: "♨️", key: "merit.sauna" },
  { icon: "🚶", key: "merit.location" },
  { icon: "🎬", key: "merit.rooms" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  }),
};

export default function HomePage() {
  const { t } = useLang();

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1480796927426-f609979314bd?w=1800&q=85"
          alt="Hakodate city view"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/70 via-[#0A1628]/50 to-[#0A1628]/80" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[#D4973B] text-xs tracking-[0.3em] uppercase font-semibold mb-4"
          >
            A-Gate Hotel · Hakodate
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
          >
            {t("hero.tagline")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          >
            {t("hero.sub")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/reservation"
              className="px-8 py-4 bg-[#D4973B] text-white font-semibold rounded-full hover:bg-[#C0862A] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 text-sm"
            >
              {t("hero.cta")}
            </Link>
            <Link
              href="/rooms"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-all text-sm"
            >
              {t("hero.explore")}
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
        >
          <ChevronDown size={28} />
        </motion.div>
      </section>

      {/* ── Merit Strip ─────────────────────────────────────────────── */}
      <section className="bg-[#1B2A4A] py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {meritStrip.map((m, i) => (
            <motion.div
              key={m.key}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center"
            >
              <div className="text-3xl mb-3">{m.icon}</div>
              <h3 className="text-white font-semibold text-sm mb-1">{t(`${m.key}.title`)}</h3>
              <p className="text-white/55 text-xs leading-relaxed">{t(`${m.key}.desc`)}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Rooms Preview ───────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-[#D4973B] text-xs tracking-[0.25em] uppercase font-semibold mb-2">
              Accommodation
            </p>
            <h2 className="text-4xl font-bold text-[#1B2A4A]">{t("rooms.title")}</h2>
            <p className="text-[#6B6B6B] mt-2 max-w-xl">{t("rooms.sub")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80", nameKey: "rooms.single.name", descKey: "rooms.single.desc", tags: ["Solo", "Business"], href: "/rooms" },
              { img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80", nameKey: "rooms.connecting.name", descKey: "rooms.connecting.desc", tags: ["Family", "Groups"], href: "/rooms" },
              { img: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80", nameKey: "rooms.theater.name", descKey: "rooms.theater.desc", tags: ["Unique", "🎬"], href: "/rooms" },
              { img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80", nameKey: "rooms.kids.name", descKey: "rooms.kids.desc", tags: ["Family", "Kids"], href: "/rooms" },
            ].map((room, i) => (
              <motion.div
                key={room.nameKey}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link href={room.href} className="group block relative overflow-hidden rounded-2xl bg-[#1B2A4A] h-72">
                  <Image
                    src={room.img}
                    alt={t(room.nameKey)}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex gap-2 mb-2">
                      {room.tags.map((tag) => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 bg-white/20 backdrop-blur-sm text-white rounded-full font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-white text-xl font-bold">{t(room.nameKey)}</h3>
                    <p className="text-white/70 text-sm mt-1 leading-relaxed line-clamp-2">{t(room.descKey)}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-[#D4973B] text-xs font-semibold group-hover:gap-2 transition-all">
                      View Room <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Big Merit Feature ────────────────────────────────────────── */}
      <section className="py-24 bg-[#1B2A4A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1575444758702-4a6b9222336e?w=1200&q=60"
            alt="Drinks"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-6xl mb-6">🍺</div>
            <p className="text-[#D4973B] text-xs tracking-[0.25em] uppercase font-semibold mb-4">Every Evening · Complimentary</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t("merit.page.drinks.title")}
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              {t("merit.page.drinks.desc")}
            </p>
            <Link
              href="/merit"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4973B] text-white font-semibold rounded-full hover:bg-[#C0862A] transition-all text-sm"
            >
              {t("merit.page.title")} <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Access Teaser ─────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#D4973B] text-xs tracking-[0.25em] uppercase font-semibold mb-3">Location</p>
            <h2 className="text-4xl font-bold text-[#1B2A4A] mb-5">{t("access.title")}</h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-6">{t("access.sub")}</p>
            <div className="flex flex-col gap-3 mb-8">
              {[
                { label: t("access.station.label"), value: t("access.station.value"), icon: "🚃" },
                { label: t("access.tram.label"), value: t("access.tram.value"), icon: "🚋" },
                { label: t("access.airport.label"), value: t("access.airport.value"), icon: "✈️" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 py-3 border-b border-[#E8E4DF]">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <p className="text-xs text-[#6B6B6B]">{item.label}</p>
                    <p className="text-sm font-semibold text-[#1B2A4A]">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/access" className="inline-flex items-center gap-2 text-sm font-semibold text-[#D4973B] hover:gap-3 transition-all">
              {t("access.map.label")} <ArrowRight size={15} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-80 md:h-96 rounded-2xl overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2926.324765!2d140.7265!3d41.7707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f9e469d1e20e9b1%3A0x11b2d7a2d4c3b1a0!2sA-GATE+HOTEL+%E5%87%BD%E9%A4%A8!5e0!3m2!1sen!2sjp!4v1700000000000"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Final CTA Banner ─────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#F0EDE8]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold text-[#1B2A4A] mb-4">{t("res.title")}</h2>
            <p className="text-[#6B6B6B] mb-8">{t("res.guarantee.desc")}</p>
            <Link
              href="/reservation"
              className="inline-flex items-center gap-2 px-10 py-4 bg-[#1B2A4A] text-white font-semibold rounded-full hover:bg-[#243660] transition-all text-sm shadow-lg"
            >
              {t("res.cta")} <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
