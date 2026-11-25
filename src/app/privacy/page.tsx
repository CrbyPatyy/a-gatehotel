"use client";
import { useLang } from "@/contexts/LangContext";

export default function PrivacyPage() {
  const { lang } = useLang();
  return (
    <>
      <section className="pt-36 pb-16 bg-[#F9F7F4] border-b border-[#EAE6E1]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="overline">{lang === "en" ? "Legal" : "規定"}</p>
          <h1 className="font-serif-display text-4xl md:text-5xl text-[#1B2A4A]">
            {lang === "en" ? "Privacy Policy" : "プライバシーポリシー"}
          </h1>
        </div>
      </section>
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-[#6B6B6B] leading-relaxed space-y-6 text-sm md:text-base">
          <p>{lang === "en" ? "A-Gate Hotel Hakodate takes the protection of your personal information seriously. This policy outlines how we collect, use, and safeguard your data." : "A-GATEホテル函館は、お客様の個人情報の保護を重要視しています。"}</p>
          <h2 className="font-serif-display text-2xl text-[#1B2A4A] pt-2">{lang === "en" ? "Information We Collect" : "収集する情報"}</h2>
          <p>{lang === "en" ? "We collect information you provide when making a reservation, contacting us, or using our services." : "予約・お問い合わせ・サービスご利用時に提供いただいた情報を収集します。"}</p>
          <h2 className="font-serif-display text-2xl text-[#1B2A4A] pt-2">{lang === "en" ? "How We Use Your Information" : "情報の利用目的"}</h2>
          <p>{lang === "en" ? "Your information is used solely to process reservations, respond to inquiries, and improve our services." : "ご予約処理・お問い合わせ対応・サービス改善のみに使用します。"}</p>
          <h2 className="font-serif-display text-2xl text-[#1B2A4A] pt-2">{lang === "en" ? "Contact" : "お問い合わせ"}</h2>
          <p>{lang === "en" ? "For privacy-related questions, please contact us at info@a-gatehotel.com." : "プライバシーに関するご質問は info@a-gatehotel.com までご連絡ください。"}</p>
        </div>
      </section>
    </>
  );
}
