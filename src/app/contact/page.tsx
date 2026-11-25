"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLang } from "@/contexts/LangContext";
import { Phone, Mail, Clock, ArrowRight, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const { t, lang } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* ── Page hero ── */}
      <section className="pt-36 pb-20 bg-[#F9F7F4] border-b border-[#EAE6E1]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="eyebrow">{lang === "en" ? "Support" : "お問い合わせ"}</p>
          <h1 className="serif-display text-5xl md:text-6xl text-[#1B2A4A] mb-5">{t("contact.title")}</h1>
          <p className="text-[#6B6B6B] text-lg max-w-xl">{t("contact.sub")}</p>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          {/* Contact info */}
          <div className="md:col-span-1">
            <div className="flex flex-col divide-y divide-[#EAE6E1] bg-white border border-[#EAE6E1] px-6 mb-8">
              <div className="flex items-start gap-4 py-5">
                <Phone size={17} className="text-[#C9924A] mt-0.5 shrink-0" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[#6B6B6B] mb-1">{t("contact.phone.label")}</p>
                  <p className="font-semibold text-[#1B2A4A] text-sm">0138-27-5555</p>
                </div>
              </div>
              <div className="flex items-start gap-4 py-5">
                <Mail size={17} className="text-[#C9924A] mt-0.5 shrink-0" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[#6B6B6B] mb-1">Email</p>
                  <p className="font-semibold text-[#1B2A4A] text-sm">info@a-gatehotel.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4 py-5">
                <Clock size={17} className="text-[#C9924A] mt-0.5 shrink-0" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[#6B6B6B] mb-1">{t("contact.hours.label")}</p>
                  <p className="font-semibold text-[#1B2A4A] text-sm">{t("contact.hours.value")}</p>
                </div>
              </div>
            </div>

            {/* FAQ prompt */}
            <div className="bg-[#0F1C33] text-white p-6">
              <p className="text-sm text-white/70 mb-3">{t("contact.faq.prompt")}</p>
              <Link href="/faq" className="inline-flex items-center gap-1.5 text-[#C9924A] text-xs font-bold tracking-[0.1em] uppercase hover:gap-2.5 transition-all">
                {t("contact.faq.link")} <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-[#EAE6E1] p-8 md:p-10"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle size={48} className="text-[#C9924A] mb-4" />
                  <h3 className="serif-display text-3xl text-[#1B2A4A] mb-2">
                    {lang === "en" ? "Message Sent" : "送信完了"}
                  </h3>
                  <p className="text-[#6B6B6B] text-sm">{t("contact.success")}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-semibold text-[#6B6B6B] uppercase tracking-[0.18em] mb-2">
                        {t("contact.name")} *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 border border-[#EAE6E1] bg-[#F9F7F4]/50 text-sm focus:outline-none focus:border-[#C9924A] transition-colors"
                        placeholder="Tanaka Yuki"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold text-[#6B6B6B] uppercase tracking-[0.18em] mb-2">
                        {t("contact.email")} *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 border border-[#EAE6E1] bg-[#F9F7F4]/50 text-sm focus:outline-none focus:border-[#C9924A] transition-colors"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-[#6B6B6B] uppercase tracking-[0.18em] mb-2">
                      {t("contact.subject")}
                    </label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 border border-[#EAE6E1] bg-[#F9F7F4]/50 text-sm focus:outline-none focus:border-[#C9924A] transition-colors"
                      placeholder={lang === "en" ? "Reservation inquiry…" : "ご予約について…"}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-[#6B6B6B] uppercase tracking-[0.18em] mb-2">
                      {t("contact.message")} *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 border border-[#EAE6E1] bg-[#F9F7F4]/50 text-sm focus:outline-none focus:border-[#C9924A] transition-colors resize-none"
                      placeholder={lang === "en" ? "How can we help you?" : "お問い合わせ内容をご記入ください"}
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 py-4 bg-[#1B2A4A] text-white text-[12px] font-bold tracking-[0.12em] uppercase hover:bg-[#C9924A] transition-colors"
                  >
                    {t("contact.send")} <ArrowRight size={15} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
