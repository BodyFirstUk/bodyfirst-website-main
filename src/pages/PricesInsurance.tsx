import { Link } from "react-router-dom";
import ScrollAnimation from "../components/ScrollAnimation";
import PricingCards from "../components/PricingCards";
import InsuranceMarquee from "../components/InsuranceMarquee";
import HeadingScrollAnimation from "../components/HeadingScrollAnimation";
import SEO from "../components/SEO";
import { siteContent } from "../data/content";
import { seoConfig } from "../data/seoConfig";

const PricesInsurance = () => {
  const pricesHeroImage = "/images/insurance/hero.png";

  return (
    <div className="bg-transparent">
      <SEO
        title={seoConfig.prices.title}
        description={seoConfig.prices.description}
      />

      {/* Header (Standardized Hero) */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-teal-900 py-12 lg:py-16">
        <div className="absolute inset-0">
          <img
            src={pricesHeroImage}
            alt="Pricing and insurance at Body First UK"
            className="w-full h-full object-cover transform scale-105"
            loading="lazy"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900 via-teal-900/40 to-transparent" />
        </div>

        <div className="container relative z-10 px-4">
          <div className="max-w-4xl text-white">
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
              Pricing & <span className="text-teal-400">Insurance</span>
            </h1>
            <p className="text-xl lg:text-2xl text-teal-50 font-light max-w-2xl leading-relaxed">
              Premium care with transparent pricing. We are registered with all major health insurance providers for seamless claims.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section - High End Board */}
      <section className="py-24 bg-transparent">
        <div className="container px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <HeadingScrollAnimation as="h2" className="text-4xl md:text-5xl font-black text-slate-900 mb-6" variant="fade-up">
                Treatment <span className="text-teal-600">Investment</span>
              </HeadingScrollAnimation>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Affordable luxury care. Our rates reflect our expertise and the high-end technology used in every treatment.
              </p>
            </div>

            <PricingCards />

            <ScrollAnimation variant="fade-up" className="mt-20 p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="lg:max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-teal-700 text-xs font-black">!</span>
                  <h3 className="text-xl font-bold text-slate-900">Self-Paying Patients</h3>
                </div>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Prices listed are for self-paying individuals. All initial appointments include a comprehensive 45-minute clinical assessment and a personalized recovery roadmap.
                </p>
              </div>
              <a
                href="https://app.theclinicportal.com/?Email=info@bodyfirst.clinic#login"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-teal-500 text-white rounded-full font-black text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_10px_30px_rgba(20,184,166,0.3)] shrink-0"
              >
                Book Your Assessment
                <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Insurance Coverage - Cinematic Integration */}
      <section className="py-24 bg-white/60 backdrop-blur-sm overflow-hidden">
        <div className="container px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <HeadingScrollAnimation as="h2" className="text-4xl md:text-5xl font-black text-slate-900 mb-8" variant="slide-in-left">
                Major <span className="text-teal-600">Insurance</span> Accepted
              </HeadingScrollAnimation>
              <p className="text-xl text-slate-600 leading-relaxed mb-10">
                We work directly with major health insurers to ensure your focus stays on recovery, not paperwork.
              </p>

              <div className="space-y-6 mb-10">
                {[
                  { q: "Direct Billing", a: "We can submit claims directly to many insurers on your behalf." },
                  { q: "Recognised Providers", a: "Fully registered with Bupa, AXA, Aviva, Vitality, and more." },
                  { q: "Receipts Provided", a: "Digital receipts sent instantly for policy reimbursement." }
                ].map((item, i) => (
                  <ScrollAnimation key={i} variant="fade-up" delay={i * 100} className="flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 font-bold">0{i + 1}</div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1">{item.q}</h4>
                      <p className="text-slate-500">{item.a}</p>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="p-12 rounded-[3rem] bg-slate-50 border border-slate-100 shadow-inner relative group overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
                <InsuranceMarquee items={siteContent.insurance.accepted} duration={25} />
                <div className="mt-12 p-8 bg-white rounded-3xl border border-slate-100 shadow-sm relative z-20">
                  <p className="text-slate-600 italic text-center font-medium">
                    "{siteContent.insurance.note}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment & Cancellation - Modern Grid */}
      <section className="py-24 bg-transparent">
        <div className="container px-4 text-center relative z-10">
          <HeadingScrollAnimation as="h2" className="text-3xl md:text-4xl font-black text-slate-900 mb-16" variant="blur-up">
            Payment & <span className="text-teal-600">Policies</span>
          </HeadingScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {[
              { icon: "💳", title: "Card Payments", desc: "All major credit and debit cards accepted, including contactless." },
              { icon: "💷", title: "Cash Accepted", desc: "We provide digital receipts for all cash transactions." },
              { icon: "🏥", title: "Insurance Billing", desc: "Available for Bupa, AXA, and other recognised providers." }
            ].map((item, i) => (
              <ScrollAnimation key={i} variant="fade-up" className="p-10 bg-white rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all duration-500 text-center group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation variant="fade-up" className="max-w-3xl mx-auto p-10 bg-slate-900 text-white rounded-[2.5rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
            <h3 className="text-2xl font-black mb-6 flex items-center justify-center gap-3">
              <span className="text-teal-400 text-3xl">⏰</span> Cancellation Policy
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              We value your time and ours. Appointments cancelled with less than <span className="text-white font-bold">24 hours' notice</span> may be subject to the full appointment fee. Please contact us as soon as possible if you need to reschedule.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Final CTA - Cinematic Impact */}
      <section className="relative py-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-40">
          <img src={pricesHeroImage} alt="Recovery" className="w-full h-full object-cover grayscale" />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900 via-teal-900/80 to-teal-800/40" />
        </div>
        <div className="container relative z-10 text-center px-4">
          <HeadingScrollAnimation as="h2" className="text-4xl lg:text-6xl font-black text-white mb-8" variant="scale">
            Ready to Start <span className="text-teal-400">Feeling Better?</span>
          </HeadingScrollAnimation>
          <p className="text-xl mb-12 text-teal-50 max-w-2xl mx-auto font-light leading-relaxed">
            Professional care is just a few clicks away. Secure your elite assessment today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://app.theclinicportal.com/?Email=info@bodyfirst.clinic#login"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-teal-500 text-white rounded-full font-black text-xl hover:bg-teal-400 hover:scale-105 transition-all shadow-[0_0_30px_rgba(20,184,166,0.4)]"
            >
              Book Now
            </a>
            <Link
              to="/contact"
              className="px-10 py-5 border-2 border-white/30 text-white rounded-full font-black text-xl hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Contact Specialist
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricesInsurance;
