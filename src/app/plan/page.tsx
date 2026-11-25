"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLang } from "@/contexts/LangContext";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    id: "standard",
    nameKey: "plan.standard.name",
    descKey: "plan.standard.desc",
    badgeKey: "plan.badge.best",
    badgeColor: "#D4973B",
    priceFrom: 7800,
    featured: true,
    includes: ["en:All free lobby perks|jp:ロビー無料サービス全て", "en:Free Wi-Fi|jp:無料Wi-Fi", "en:7F Bath & Sauna access|jp:大浴場・サウナ利用", "en:Flexible cancellation|jp:柔軟なキャンセル"],
  },
  {
    id: "longstay",
    nameKey: "plan.longstay.name",
    descKey: "plan.longstay.desc",
    badgeKey: "plan.badge.longstay",
    badgeColor: "#1B2A4A",
    priceFrom: 6500,
    featured: false,
    includes: ["en:Everything in Standard|jp:スタンダードの全特典", "en:Reduced nightly rate|jp:割引宿泊料金", "en:Weekly linen refresh|jp:週1回リネン交換", "en:Extended checkout option|jp:レイトチェックアウト優先"],
  },
  {
    id: "family",
    nameKey: "plan.family.name",
    descKey: "plan.family.desc",
    badgeKey: "plan.badge.family",
    badgeColor: "#5B8A6A",
    priceFrom: 14000,
    featured: false,
    includes: ["en:Kids House or Connecting Room|jp:キッズハウス or コネクティング", "en:Children's pajamas & toys|jp:子供用パジャマ・おもちゃ", "en:All lobby perks|jp:ロビー特典全て", "en:Family-friendly support|jp:ファミリーサポート"],
  },
  {
    id: "solo",
    nameKey: "plan.solo.name",
    descKey: "plan.solo.desc",
    badgeKey: "plan.badge.solo",
    badgeColor: "#6B6B6B",
    priceFrom: 5500,
    featured: false,
    includes: ["en:Single room|jp:シングルルーム", "en:All lobby perks|jp:ロビー特典全て", "en:Best solo rate|jp:最安一人旅料金", "en:Free Wi-Fi|jp:無料Wi-Fi"],
  },
];

export default function PlanPage() {
  const { t, lang } = useLang();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#F0EDE8]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[#D4973B] text-xs tracking-[0.3em] uppercase font-semibold mb-3">Pricing</p>
          <h1 className="text-5xl font-bold text-[#1B2A4A] mb-4">{t("plan.title")}</h1>
          <p className="text-[#6B6B6B] text-lg max-w-xl mx-auto">{t("plan.sub")}</p>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.featured
                  ? "bg-[#1B2A4A] text-white shadow-2xl ring-2 ring-[#D4973B]"
                  : "bg-white text-[#1A1A1A] shadow-lg"
              }`}
            >
              {/* Badge */}
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-5 w-fit"
                style={{ backgroundColor: plan.badgeColor }}
              >
                {t(plan.badgeKey)}
              </span>

              <h2 className={`text-2xl font-bold mb-2 ${plan.featured ? "text-white" : "text-[#1B2A4A]"}`}>
                {t(plan.nameKey)}
              </h2>
              <p className={`text-sm leading-relaxed mb-6 ${plan.featured ? "text-white/70" : "text-[#6B6B6B]"}`}>
                {t(plan.descKey)}
              </p>

              <div className="mb-8">
                <span className={`text-xs uppercase tracking-wider ${plan.featured ? "text-white/50" : "text-[#6B6B6B]"}`}>
                  {t("plan.from")}
                </span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className={`text-4xl font-bold ${plan.featured ? "text-[#D4973B]" : "text-[#1B2A4A]"}`}>
                    ¥{plan.priceFrom.toLocaleString()}
                  </span>
                  <span className={`text-sm ${plan.featured ? "text-white/50" : "text-[#6B6B6B]"}`}>
                    {t("plan.pernight")}
                  </span>
                </div>
              </div>

              <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {plan.includes.map((item) => {
                  const [en, jp] = item.split("|");
                  const label = lang === "en" ? en.replace("en:", "") : jp.replace("jp:", "");
                  return (
                    <li key={item} className="flex items-center gap-2.5">
                      <Check
                        size={15}
                        className={plan.featured ? "text-[#D4973B]" : "text-[#5B8A6A]"}
                      />
                      <span className={`text-sm ${plan.featured ? "text-white/80" : "text-[#1A1A1A]"}`}>
                        {label}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <Link
                href="/reservation"
                className={`flex items-center justify-center gap-2 py-3 rounded-full text-sm font-semibold transition-all ${
                  plan.featured
                    ? "bg-[#D4973B] text-white hover:bg-[#C0862A]"
                    : "bg-[#1B2A4A] text-white hover:bg-[#243660]"
                }`}
              >
                {t("plan.cta")} <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Guarantee Banner */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto bg-[#D4973B]/10 border border-[#D4973B]/30 rounded-2xl p-8 text-center">
          <div className="text-3xl mb-3">🏆</div>
          <h3 className="text-xl font-bold text-[#1B2A4A] mb-2">{t("res.guarantee")}</h3>
          <p className="text-[#6B6B6B] max-w-lg mx-auto">{t("plan.guarantee")}</p>
        </div>
      </section>
    </>
  );
}

