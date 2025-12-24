import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';
import SEO from '../components/SEO';
import { seoConfig } from '../data/seoConfig';
import { siteContent } from '../data/content';
import HeadingScrollAnimation from '../components/HeadingScrollAnimation';
import AntigravityCanvas from '../components/AntigravityCanvas';

const WhyUs = () => {
  return (
    <div className="bg-transparent">
      <SEO
        title={seoConfig.whyUs.title}
        description={seoConfig.whyUs.description}
      />

      {/* Header (Standardized Hero) */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-teal-900 py-12 lg:py-16">
        <div className="absolute inset-0">
          <img
            src="/images/Aboutus/hero.png"
            alt="Why choose Body First UK"
            className="w-full h-full object-cover transform scale-105"
            loading="lazy"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900 via-teal-900/40 to-transparent" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl text-white">
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
              Why Choose <span className="text-teal-400">Body First UK</span>
            </h1>
            <p className="text-xl lg:text-2xl text-teal-50 font-light max-w-2xl leading-relaxed">
              We provide high-quality, evidence-based physiotherapy with compassionate, personalised care in the heart of London.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy & Excellence - Alternating Sections */}
      <section className="py-24 overflow-hidden bg-transparent">
        <div className="container px-4">
          {/* Excellence in Clinical Care */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
            <div className="lg:w-1/2">
              <HeadingScrollAnimation as="h2" className="text-4xl md:text-5xl font-black text-slate-900 mb-8" variant="slide-in-left">
                Elite <span className="text-teal-600">Clinical</span> Excellence
              </HeadingScrollAnimation>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  At Body First UK, we don't just treat symptoms; we identify the root cause of your pain. Our clinicians are HCPC and CSP registered, bringing over a decade of elite experience to every session.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  {[
                    "HCPC & CSP Registered",
                    "Advanced Education",
                    "Elite Sports Experience",
                    "Evidence-Based Methods"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 font-bold text-slate-700">
                      <span className="w-6 h-6 rounded-full bg-teal-500 text-white flex items-center justify-center text-[10px]">✓</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <ScrollAnimation variant="fade-up" className="lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-teal-500/10 rounded-[2.5rem] blur-2xl group-hover:bg-teal-500/20 transition-all duration-700" />
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop"
                    alt="Clinical Excellence"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => (e.currentTarget.src = "/images/Aboutus/hero.png")}
                  />
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Patient-Centred Approach */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <ScrollAnimation variant="fade-up" className="lg:w-1/2 order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-4 bg-emerald-500/10 rounded-[2.5rem] blur-2xl group-hover:bg-emerald-500/20 transition-all duration-700" />
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop"
                    alt="Patient Centred Care"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => (e.currentTarget.src = "/images/Aboutus/hero.png")}
                  />
                </div>
              </div>
            </ScrollAnimation>
            <div className="lg:w-1/2 order-1 lg:order-2 text-left">
              <HeadingScrollAnimation as="h2" className="text-4xl md:text-5xl font-black text-slate-900 mb-8" variant="slide-in-right">
                Your <span className="text-teal-600">Recovery</span>, Our Priority
              </HeadingScrollAnimation>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Every patient journey is unique. We provide a full 45-minute initial assessment to truly understand your goals, whether that's returning to professional sport or playing with your grandchildren.
                </p>
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="text-teal-600">★</span> Our Commitment
                  </h3>
                  <p className="text-slate-600 italic">
                    "We focus on measurable outcomes and open communication, creating treatment plans that fit your life, not just your symptoms."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Grid - High Impact */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <AntigravityCanvas position="absolute" />
        <div className="container px-4">
          <div className="text-center mb-20">
            <HeadingScrollAnimation as="h2" className="text-4xl md:text-5xl font-black mb-6" variant="fade-up">
              Why Patients <span className="text-teal-400">Trust</span> Us
            </HeadingScrollAnimation>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🏆", title: "Expert Clinicians", text: "HCPC & CSP registered with over 10 years of cross-specialty experience." },
              { icon: "🎯", title: "Personalised Plans", text: "Comprehensive assessments leading to tailored recovery programmes." },
              { icon: "⚡", title: "Modern Technology", text: "Access to Foot Scan, Shockwave, and advanced recovery modalities." },
              { icon: "📍", title: "Prime Location", text: "Centrally located in London with easy transport and parking access." },
              { icon: "🕐", title: "Flexible Timing", text: "Open late and on Sundays to accommodate your busy schedule." },
              { icon: "💷", title: "Insurance Direct", text: "Accepted by all major UK insurers with direct billing available." }
            ].map((item, i) => (
              <ScrollAnimation
                key={i}
                delay={i * 100}
                className="group p-10 rounded-[2rem] bg-slate-800 border border-slate-600 shadow-sm hover:border-teal-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-4 transition-all duration-300"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed font-medium">{item.text}</p>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Standards - Trust Building */}
      <section className="py-24 bg-white/60 backdrop-blur-sm">
        <div className="container px-4">
          <div className="text-center mb-16">
            <HeadingScrollAnimation as="h2" className="text-4xl md:text-5xl font-black text-slate-900 mb-6" variant="blur-up">
              Professional <span className="text-teal-600">Standards</span>
            </HeadingScrollAnimation>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our clinic and clinicians meet the highest regulatory and professional standards in the UK.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto mb-20">
            {siteContent.accreditations.map((acc, index) => (
              <ScrollAnimation
                key={index}
                variant="fade-up"
                delay={index * 150}
                className="flex flex-col items-center group"
              >
                <div className="h-24 px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center mb-6 w-full max-w-[200px] group-hover:-translate-y-2 transition-transform duration-500">
                  <img
                    src={acc.logo}
                    alt={acc.name}
                    className="max-h-full max-w-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 text-center mb-2">
                  {acc.name}
                </h3>
                <p className="text-slate-500 text-sm text-center font-medium">{acc.fullName}</p>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Cinematic Impact */}
      <section className="relative py-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-40">
          <img src="/images/Aboutus/hero.png" alt="Recovery" className="w-full h-full object-cover grayscale" />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900 via-teal-900/80 to-teal-800/40" />
        </div>
        <AntigravityCanvas position="absolute" />
        <div className="container relative z-10 text-center px-4">
          <HeadingScrollAnimation as="h2" className="text-4xl lg:text-6xl font-black text-white mb-8" variant="scale">
            Experience the <span className="text-teal-400">Difference</span>
          </HeadingScrollAnimation>
          <p className="text-xl mb-12 text-teal-50 max-w-2xl mx-auto font-light leading-relaxed">
            Join hundreds of satisfied patients who have reclaimed their mobility and life with Body First UK.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://app.theclinicportal.com/?Email=info@bodyfirst.clinic#login"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-teal-500 text-white rounded-full font-black text-xl hover:bg-teal-400 hover:scale-105 transition-all shadow-[0_0_30px_rgba(20,184,166,0.4)]"
            >
              Book Your Appointment
            </a>
            <Link
              to="/contact"
              className="px-10 py-5 border-2 border-white/30 text-white rounded-full font-black text-xl hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Speak to a Professional
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
