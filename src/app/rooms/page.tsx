"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/LangContext";
import { Wifi, Tv, Wind, Coffee, Shirt, Droplets, ArrowRight } from "lucide-react";

const amenityIcons: Record<string, React.ReactNode> = {
  Wifi: <Wifi size={16} />,
  Tv: <Tv size={16} />,
  Wind: <Wind size={16} />,
  Coffee: <Coffee size={16} />,
  Shirt: <Shirt size={16} />,
  Droplets: <Droplets size={16} />,
};

const rooms = [
  {
    id: "single",
    nameKey: "rooms.single.name",
    descKey: "rooms.single.desc",
    tags: ["Solo", "Business"],
    size: "18m²",
    maxGuests: 1,
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
    ],
    accent: "#1B2A4A",
  },
  {
    id: "connecting",
    nameKey: "rooms.connecting.name",
    descKey: "rooms.connecting.desc",
    tags: ["Family", "Groups"],
    size: "36m²",
    maxGuests: 4,
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&q=80",
    ],
    accent: "#2D4A7A",
  },
  {
    id: "theater",
    nameKey: "rooms.theater.name",
    descKey: "rooms.theater.desc",
    tags: ["Unique", "Couples"],
    size: "22m²",
    maxGuests: 2,
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
    ],
    accent: "#0F1F38",
  },
  {
    id: "kids",
    nameKey: "rooms.kids.name",
    descKey: "rooms.kids.desc",
    tags: ["Family", "Kids"],
    size: "30m²",
    maxGuests: 3,
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&q=80",
    ],
    accent: "#D4973B",
  },
];

const amenities = [
  { icon: "Wifi", en: "Free Wi-Fi", jp: "無料Wi-Fi" },
  { icon: "Tv", en: "Smart TV", jp: "スマートTV" },
  { icon: "Wind", en: "Air Conditioning", jp: "エアコン" },
  { icon: "Coffee", en: "Electric Kettle", jp: "電気ケトル" },
  { icon: "Shirt", en: "Trouser Press", jp: "ズボンプレッサー" },
  { icon: "Droplets", en: "Washlet Toilet", jp: "ウォシュレット" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
};

export default function RoomsPage() {
  const { t, lang } = useLang();

  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-16 bg-[#1B2A4A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1400&q=60"
            alt="Rooms"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <p className="text-[#D4973B] text-xs tracking-[0.3em] uppercase font-semibold mb-3">Accommodation</p>
          <h1 className="text-5xl font-bold text-white mb-4">{t("rooms.title")}</h1>
          <p className="text-white/60 text-lg max-w-2xl">{t("rooms.sub")}</p>
        </div>
      </section>

      {/* Room Cards */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {rooms.map((room, i) => (
            <motion.div
              key={room.id}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className={`grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-xl ${
                i % 2 === 1 ? "md:grid-flow-dense" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative h-72 md:h-auto min-h-[320px] group ${i % 2 === 1 ? "md:col-start-2" : ""}`}>
                <Image
                  src={room.images[0]}
                  alt={t(room.nameKey)}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Tags */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {room.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 bg-white/90 text-[#1B2A4A] rounded-full font-semibold shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Info */}
              <div
                className="p-8 md:p-10 flex flex-col justify-center"
                style={{ backgroundColor: room.accent }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{t(room.nameKey)}</h2>
                <p className="text-white/70 leading-relaxed mb-6">{t(room.descKey)}</p>

                <div className="flex gap-6 mb-8">
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider">Size</p>
                    <p className="text-white font-semibold">{room.size}</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider">Guests</p>
                    <p className="text-white font-semibold">Up to {room.maxGuests}</p>
                  </div>
                </div>

                <Link
                  href="/reservation"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4973B] text-white text-sm font-semibold rounded-full hover:bg-[#C0862A] transition-all w-fit"
                >
                  {t("rooms.book")} <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 px-6 bg-[#F0EDE8]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#1B2A4A]">{t("rooms.amenities.title")}</h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {amenities.map((a, i) => (
              <motion.div
                key={a.en}
                custom={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm"
              >
                <span className="text-[#D4973B]">{amenityIcons[a.icon]}</span>
                <span className="text-sm font-medium text-[#1A1A1A]">{lang === "en" ? a.en : a.jp}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7F Bath & Sauna */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#D4973B] text-xs tracking-[0.25em] uppercase font-semibold mb-3">7F · Exclusive</p>
            <h2 className="text-3xl font-bold text-[#1B2A4A] mb-4">{t("rooms.bath.title")}</h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-5">{t("rooms.bath.desc")}</p>
            <p className="text-sm text-[#6B6B6B]">
              <strong className="text-[#1B2A4A]">Open:</strong> 15:00–00:00 · 05:00–10:00
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-72 rounded-2xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1663516920778-71e3c0ea7ea7?w=800&q=80"
              alt="Sauna"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Coin Laundry */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#1B2A4A] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-6">
            <div className="text-5xl">🫧</div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">{t("rooms.laundry.title")}</h3>
              <p className="text-white/60">{t("rooms.laundry.desc")}</p>
            </div>
            <Link
              href="/reservation"
              className="shrink-0 px-6 py-3 bg-[#D4973B] text-white text-sm font-semibold rounded-full hover:bg-[#C0862A] transition-colors"
            >
              {t("nav.book")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

