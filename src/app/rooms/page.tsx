"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/LangContext";
import { Wifi, Tv, Wind, Coffee, Shirt, Droplets, ArrowRight } from "lucide-react";

const rooms = [
  {
    id: "single",
    nameKey: "rooms.single.name",
    descKey: "rooms.single.desc",
    tags: ["Solo", "Business"],
    size: "18m²",
    maxGuests: 1,
    images: ["/img/room05_standardtwinjpg.jpg", "/img/room06_semidouble.jpg"],
  },
  {
    id: "connecting",
    nameKey: "rooms.connecting.name",
    descKey: "rooms.connecting.desc",
    tags: ["Family", "Groups"],
    size: "36m²",
    maxGuests: 4,
    images: ["/img/room01_connect1.jpg", "/img/room01_connect3.jpg"],
  },
  {
    id: "theater",
    nameKey: "rooms.theater.name",
    descKey: "rooms.theater.desc",
    tags: ["Unique", "Couples"],
    size: "22m²",
    maxGuests: 2,
    images: ["/img/room04_semidoubletwin.jpg", "/img/room06_semidouble.jpg"],
  },
  {
    id: "kids",
    nameKey: "rooms.kids.name",
    descKey: "rooms.kids.desc",
    tags: ["Family", "Kids"],
    size: "30m²",
    maxGuests: 3,
    images: ["/img/room03_familykids1.jpg", "/img/room01_connect1.jpg"],
  },
];

const amenities = [
  { icon: <Wifi size={18} />,      en: "Free Wi-Fi",        jp: "無料Wi-Fi" },
  { icon: <Tv size={18} />,        en: "Smart TV",          jp: "スマートTV" },
  { icon: <Wind size={18} />,      en: "Air Conditioning",  jp: "エアコン" },
  { icon: <Coffee size={18} />,    en: "Electric Kettle",   jp: "電気ケトル" },
  { icon: <Shirt size={18} />,     en: "Trouser Press",     jp: "ズボンプレッサー" },
  { icon: <Droplets size={18} />,  en: "Washlet Toilet",   jp: "ウォシュレット" },
];

const facilities = [
  { img: "/img/facility01.jpg", titleEn: "7F Large Bath & Sauna", titleJp: "7F大浴場・サウナ", descEn: "Open 15:00–00:00 and 05:00–10:00 daily.", descJp: "15:00〜24:00・翌5:00〜10:00営業" },
  { img: "/img/merit04.jpg",   titleEn: "Shampoo Bar",           titleJp: "シャンプーバー",    descEn: "Choose from 15+ premium shampoos.",     descJp: "15種以上のプレミアムシャンプー" },
  { img: "/img/merit08.jpg",   titleEn: "Manga Library",         titleJp: "漫画コーナー",      descEn: "1,000+ titles — free to borrow.",       descJp: "1,000冊以上を無料貸し出し" },
  { img: "/img/facility06.jpg",titleEn: "Coin Laundry",          titleJp: "コインランドリー",  descEn: "In-hotel laundry, open 24 hours.",       descJp: "24時間ご利用いただけます" },
];

export default function RoomsPage() {
  const { t, lang } = useLang();

  return (
    <>
      {/* ── Page hero ── */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-[#0F1C33]">
        <Image
          src="/img/room05_standardtwinjpg.jpg"
          alt="Rooms"
          fill
          className="object-cover object-center opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1C33]/20 to-[#0F1C33]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow text-[#C9924A]/80 mb-5"
          >
            {lang === "en" ? "Accommodation" : "宿泊タイプ"}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="serif-display text-5xl md:text-6xl text-white mb-5"
          >
            {t("rooms.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-white/50 text-lg max-w-xl"
          >
            {t("rooms.sub")}
          </motion.p>
        </div>
      </section>

      {/* ── Room cards — alternating layout ── */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-0">
          {rooms.map((room, i) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className={`grid md:grid-cols-2 border-b border-[#EAE6E1] last:border-0 ${i % 2 === 1 ? "md:grid-flow-dense" : ""}`}
            >
              {/* Image */}
              <div className={`relative h-72 md:h-[440px] overflow-hidden group ${i % 2 === 1 ? "md:col-start-2" : ""}`}>
                <Image
                  src={room.images[0]}
                  alt={t(room.nameKey)}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Tags */}
                <div className="absolute top-5 left-5 flex gap-2">
                  {room.tags.map(tag => (
                    <span key={tag} className="text-[10px] px-3 py-1 bg-black/50 backdrop-blur-sm text-white font-semibold tracking-wide">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Info */}
              <div className={`flex flex-col justify-center px-8 md:px-14 py-12 md:py-16 bg-white ${i % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}`}>
                <div className="gold-divider" />
                <h2 className="serif-display text-3xl md:text-4xl text-[#1B2A4A] mb-4">{t(room.nameKey)}</h2>
                <p className="text-[#6B6B6B] leading-relaxed mb-7">{t(room.descKey)}</p>

                <div className="flex gap-8 mb-8">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-[#6B6B6B] mb-1">{lang === "en" ? "Room Size" : "部屋面積"}</p>
                    <p className="text-lg font-semibold text-[#1B2A4A]">{room.size}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-[#6B6B6B] mb-1">{lang === "en" ? "Guests" : "定員"}</p>
                    <p className="text-lg font-semibold text-[#1B2A4A]">{lang === "en" ? `Up to ${room.maxGuests}` : `最大${room.maxGuests}名`}</p>
                  </div>
                </div>

                <Link
                  href="/reservation"
                  className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.12em] uppercase px-7 py-3.5 bg-[#1B2A4A] text-white hover:bg-[#C9924A] transition-colors w-fit"
                >
                  {t("rooms.book")} <ArrowRight size={13} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── All-room amenities ── */}
      <section className="py-20 px-6 lg:px-8 bg-[#F9F7F4]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="eyebrow justify-center">{lang === "en" ? "Every Room" : "全室共通"}</p>
            <h2 className="serif-display text-3xl md:text-4xl text-[#1B2A4A]">{t("rooms.amenities.title")}</h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {amenities.map((a, i) => (
              <motion.div
                key={a.en}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="flex items-center gap-3 bg-white border border-[#EAE6E1] p-4"
              >
                <span className="text-[#C9924A]">{a.icon}</span>
                <span className="text-sm font-medium text-[#1B2A4A]">{lang === "en" ? a.en : a.jp}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Facility spotlight grid ── */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="eyebrow">{lang === "en" ? "Hotel Facilities" : "館内施設"}</p>
            <h2 className="serif-display text-3xl md:text-4xl text-[#1B2A4A]">
              {lang === "en" ? "Exclusive Amenities" : "充実の館内サービス"}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {facilities.map((f, i) => (
              <motion.div
                key={f.titleEn}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group overflow-hidden bg-white border border-[#EAE6E1] card-hover"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={f.img}
                    alt={lang === "en" ? f.titleEn : f.titleJp}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-[#1B2A4A] text-sm mb-1">{lang === "en" ? f.titleEn : f.titleJp}</h3>
                  <p className="text-xs text-[#6B6B6B]">{lang === "en" ? f.descEn : f.descJp}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
