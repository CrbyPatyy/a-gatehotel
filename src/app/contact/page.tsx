"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLang } from "@/contexts/LangContext";
import { Phone, Mail, Clock, ArrowRight, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#F0EDE8]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#D4973B] text-xs tracking-[0.3em] uppercase font-semibold mb-3">Support</p>
          <h1 className="text-5xl font-bold text-[#1B2A4A] mb-4">{t("contact.title")}</h1>
          <p className="text-[#6B6B6B] text-lg max-w-xl">{t("contact.sub")}</p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          {/* Contact info */}
          <div className="md:col-span-1">
            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-[#E8E4DF]">
                <Phone size={18} className="text-[#D4973B] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-[#6B6B6B] mb-0.5">{t("contact.phone.label")}</p>
                  <p className="font-semibold text-[#1B2A4A] text-sm">0138-27-5555</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-[#E8E4DF]">
                <Mail size={18} className="text-[#D4973B] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-[#6B6B6B] mb-0.5">Email</p>
                  <p className="font-semibold text-[#1B2A4A] text-sm">info@a-gatehotel.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-[#E8E4DF]">
                <Clock size={18} className="text-[#D4973B] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-[#6B6B6B] mb-0.5">{t("contact.hours.label")}</p>
                  <p className="font-semibold text-[#1B2A4A] text-sm">{t("contact.hours.value")}</p>
                </div>
              </div>
            </div>

            {/* FAQ prompt */}
            <div className="bg-[#1B2A4A]/5 rounded-xl p-5 border border-[#1B2A4A]/10">
              <p className="text-sm text-[#6B6B6B] mb-2">{t("contact.faq.prompt")}</p>
              <Link href="/faq" className="inline-flex items-center gap-1 text-[#D4973B] text-sm font-semibold hover:underline">
                {t("contact.faq.link")}
              </Link>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg border border-[#E8E4DF] p-8 md:p-10"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle size={48} className="text-[#5B8A6A] mb-4" />
                  <h3 className="text-2xl font-bold text-[#1B2A4A] mb-2">Message Sent!</h3>
                  <p className="text-[#6B6B6B]">{t("contact.success")}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#6B6B6B] uppercase tracking-wider mb-2">
                        {t("contact.name")} *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 border border-[#E8E4DF] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#D4973B]/40 focus:border-[#D4973B] transition-all"
                        placeholder="Tanaka Yuki"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#6B6B6B] uppercase tracking-wider mb-2">
                        {t("contact.email")} *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 border border-[#E8E4DF] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#D4973B]/40 focus:border-[#D4973B] transition-all"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#6B6B6B] uppercase tracking-wider mb-2">
                      {t("contact.subject")}
                    </label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 border border-[#E8E4DF] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#D4973B]/40 focus:border-[#D4973B] transition-all"
                      placeholder="Reservation inquiry…"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#6B6B6B] uppercase tracking-wider mb-2">
                      {t("contact.message")} *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 border border-[#E8E4DF] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#D4973B]/40 focus:border-[#D4973B] transition-all resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 py-4 bg-[#1B2A4A] text-white font-semibold rounded-xl hover:bg-[#243660] transition-all shadow-md"
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

