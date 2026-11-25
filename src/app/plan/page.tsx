"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLang } from "@/contexts/LangContext";
import { Check, ArrowRight, ExternalLink } from "lucide-react";

const plans = [
  {
    id: "standard",
    nameKey: "plan.standard.name",
    descKey: "plan.standard.desc",
    badgeKey: "plan.badge.best",
    featured: true,
    includes: [
      "en:All free lobby perks|jp:ロビー無料サービス全て",
      "en:Free Wi-Fi|jp:無料Wi-Fi",
      "en:7F Bath & Sauna access|jp:大浴場・サウナ利用",
      "en:Flexible cancellation|jp:柔軟なキャンセル",
    ],
  },
  {
    id: "longstay",
    nameKey: "plan.longstay.name",
    descKey: "plan.longstay.desc",
    badgeKey: "plan.badge.longstay",
    featured: false,
    includes: [
      "en:Everything in Standard|jp:スタンダードの全特典",
      "en:Reduced nightly rate|jp:割引宿泊料金",
      "en:Weekly linen refresh|jp:週1回リネン交換",
      "en:Extended checkout option|jp:レイトチェックアウト優先",
    ],
  },
  {
    id: "family",
    nameKey: "plan.family.name",
    descKey: "plan.family.desc",
    badgeKey: "plan.badge.family",
    featured: false,
    includes: [
      "en:Kids House or Connecting Room|jp:キッズハウス or コネクティング",
      "en:Children's pajamas & toys|jp:子供用パジャマ・おもちゃ",
      "en:All lobby perks|jp:ロビー特典全て",
      "en:Family-friendly support|jp:ファミリーサポート",
    ],
  },
  {
    id: "solo",
    nameKey: "plan.solo.name",
    descKey: "plan.solo.desc",
    badgeKey: "plan.badge.solo",
    featured: false,
    includes: [
      "en:Single room|jp:シングルルーム",
      "en:All lobby perks|jp:ロビー特典全て",
      "en:Best solo rate|jp:最安一人旅料金",
      "en:Free Wi-Fi|jp:無料Wi-Fi",
    ],
  },
];

export default function PlanPage() {
  const { t, lang } = useLang();

  return (
    <>
      {/* ── Page hero ── */}
      <section className="pt-24 pb-20 bg-[#0F1C33] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/img/featuren04.jpg')] bg-cover bg-center" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow justify-center text-[#C9924A]/80 mb-5"
          >
            {lang === "en" ? "Pricing & Plans" : "ご宿泊プラン"}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="serif-display text-5xl md:text-6xl text-white mb-5"
          >
            {t("plan.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-white/50 text-lg max-w-xl mx-auto"
          >
            {t("plan.sub")}
          </motion.p>
        </div>
      </section>

      {/* ── Plans grid ── */}
      <section className="py-24 px-6 lg:px-8 bg-[#F9F7F4]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`relative flex flex-col p-8 md:p-10 ${
                plan.featured
                  ? "bg-[#1B2A4A] text-white shadow-2xl"
                  : "bg-white text-[#1A1A1A] shadow-sm border border-[#EAE6E1]"
              }`}
            >
              {/* Featured corner badge */}
              {plan.featured && (
                <div className="absolute top-0 right-0 bg-[#C9924A] text-white text-[9px] font-bold tracking-[0.15em] uppercase px-4 py-1.5">
                  {t(plan.badgeKey)}
                </div>
              )}

              {/* Badge for others */}
              {!plan.featured && (
                <span className="inline-block text-[10px] font-bold tracking-[0.15em] uppercase text-[#C9924A] border border-[#C9924A]/40 px-3 py-1 w-fit mb-4">
                  {t(plan.badgeKey)}
                </span>
              )}

              <h2 className={`serif-display text-2xl md:text-3xl mb-2 mt-${plan.featured ? "6" : "2"} ${plan.featured ? "text-white" : "text-[#1B2A4A]"}`}>
                {t(plan.nameKey)}
              </h2>
              <p className={`text-sm leading-relaxed mb-6 ${plan.featured ? "text-white/60" : "text-[#6B6B6B]"}`}>
                {t(plan.descKey)}
              </p>

              {/* Price inquiry block */}
              <div className={`mb-8 py-5 border-y ${plan.featured ? "border-white/10" : "border-[#EAE6E1]"}`}>
                <p className={`text-[10px] uppercase tracking-[0.18em] mb-1 ${plan.featured ? "text-white/40" : "text-[#6B6B6B]"}`}>
                  {lang === "en" ? "Rate" : "料金"}
                </p>
                <p className={`text-lg font-semibold ${plan.featured ? "text-[#C9924A]" : "text-[#1B2A4A]"}`}>
                  {lang === "en" ? "Inquire for rates" : "要問合せ"}
                </p>
                <p className={`text-xs mt-0.5 ${plan.featured ? "text-white/35" : "text-[#6B6B6B]"}`}>
                  {lang === "en" ? "Best rate guaranteed on official site" : "公式サイト最安値保証"}
                </p>
              </div>

              {/* Includes */}
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.includes.map((item) => {
                  const [en, jp] = item.split("|");
                  const label = lang === "en" ? en.replace("en:", "") : jp.replace("jp:", "");
                  return (
                    <li key={item} className="flex items-start gap-3">
                      <Check
                        size={14}
                        className={`mt-0.5 shrink-0 ${plan.featured ? "text-[#C9924A]" : "text-[#C9924A]"}`}
                      />
                      <span className={`text-sm ${plan.featured ? "text-white/75" : "text-[#1A1A1A]"}`}>{label}</span>
                    </li>
                  );
                })}
              </ul>

              {/* CTA */}
              <Link
                href="/reservation"
                className={`flex items-center justify-center gap-2 py-3.5 text-[11px] font-bold tracking-[0.12em] uppercase transition-colors ${
                  plan.featured
                    ? "bg-[#C9924A] text-white hover:bg-[#B87E38]"
                    : "bg-[#1B2A4A] text-white hover:bg-[#243660]"
                }`}
              >
                {t("plan.cta")} <ArrowRight size={13} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Guarantee Banner ── */}
      <section className="pb-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-[#1B2A4A] text-white p-10 md:p-12 text-center">
          <div className="text-4xl mb-4">🏆</div>
          <h3 className="serif-display text-2xl md:text-3xl text-white mb-3">{t("res.guarantee")}</h3>
          <p className="text-white/60 max-w-lg mx-auto mb-7">{t("plan.guarantee")}</p>
          <Link
            href="/reservation"
            className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.12em] uppercase px-7 py-3.5 bg-[#C9924A] text-white hover:bg-[#B87E38] transition-colors"
          >
            {lang === "en" ? "Book Direct" : "公式予約はこちら"} <ExternalLink size={13} />
          </Link>
        </div>
      </section>
    </>
  );
}
