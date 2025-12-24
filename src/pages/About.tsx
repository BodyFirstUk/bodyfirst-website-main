import { Link } from "react-router-dom";
import ScrollAnimation from "../components/ScrollAnimation";
import HeadingScrollAnimation from "../components/HeadingScrollAnimation";
import SEO from "../components/SEO";
import { siteContent } from "../data/content";
import { seoConfig } from "../data/seoConfig";
import AntigravityCanvas from "../components/AntigravityCanvas";

const About = () => {
  const aboutHeroImage = "/images/Aboutus/hero.png";

  return (
    <div className="bg-transparent">
      <SEO
        title={seoConfig.about.title}
        description={seoConfig.about.description}
      />

      {/* Header (Standardized Hero) */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-teal-900 py-12 lg:py-16">
        <div className="absolute inset-0">
          <img
            src={aboutHeroImage}
            alt="About Body First UK"
            className="w-full h-full object-cover transform scale-105"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900 via-teal-900/40 to-transparent" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl text-white">
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
              About Body <span className="text-teal-400">First UK</span>
            </h1>
            <p className="text-xl lg:text-2xl text-teal-50 font-light max-w-2xl leading-relaxed">
              Your trusted partner in health, recovery, and long-term wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story & Philosophy - Alternating Sections */}
      <section className="py-24 overflow-hidden bg-transparent">
        <div className="container px-4 relative z-10">
          {/* Mission / What We Do */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
            <ScrollAnimation variant="fade-up" className="lg:w-1/2 order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-4 bg-teal-500/10 rounded-[2rem] blur-2xl group-hover:bg-teal-500/20 transition-all duration-700" />
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop"
                    alt="Our Mission"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => (e.currentTarget.src = "/images/logo.jpg")}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </ScrollAnimation>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <HeadingScrollAnimation as="h2" className="text-4xl md:text-5xl font-black text-slate-900 mb-8" variant="slide-in-left">
                Our <span className="text-teal-600">Mission</span>
              </HeadingScrollAnimation>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>{siteContent.about.mission}</p>
                <div className="pt-4 flex flex-wrap gap-4">
                  <div className="px-6 py-2 rounded-full bg-teal-50 text-teal-700 font-bold border border-teal-100 italic">"Movement is Medicine"</div>
                  <div className="px-6 py-2 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-100">Professional Care</div>
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <HeadingScrollAnimation as="h2" className="text-4xl md:text-5xl font-black text-slate-900 mb-8 text-left" variant="slide-in-right">
                Our <span className="text-teal-600">Philosophy</span>
              </HeadingScrollAnimation>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>{siteContent.about.philosophy}</p>
                <p>We believe in treating the person, not just the symptom, ensuring long-term success and improved quality of life.</p>
              </div>
            </div>
            <ScrollAnimation variant="fade-up" className="lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-emerald-500/10 rounded-[2rem] blur-2xl group-hover:bg-emerald-500/20 transition-all duration-700" />
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?q=80&w=2069&auto=format&fit=crop"
                    alt="Our Philosophy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => (e.currentTarget.src = "/images/logo.jpg")}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Values Grid - High Impact Cards */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-slate-50/30 to-transparent opacity-10" />
        <AntigravityCanvas position="absolute" />
        <div className="container px-4 relative z-10">
          <div className="text-center mb-20">
            <HeadingScrollAnimation as="h2" className="text-4xl md:text-5xl font-black mb-6" variant="fade-up">
              The <span className="text-teal-400">Values</span> That Drive Us
            </HeadingScrollAnimation>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Our core principles define every interaction and treatment plan we build for our patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {siteContent.about.values.map((value, index) => (
              <ScrollAnimation
                key={index}
                variant="fade-up"
                delay={index * 100}
                className="group p-8 rounded-3xl bg-slate-800 border border-slate-600 shadow-sm hover:border-teal-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-4 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-teal-500/20 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">✨</div>
                <h3 className="text-xl font-bold mb-3 text-white">Value {index + 1}</h3>
                <p className="text-slate-300 leading-relaxed font-medium">{value}</p>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Refined & Modern */}
      <section id="team" className="py-24 bg-white/60 backdrop-blur-sm">
        <div className="container px-4 relative z-10">
          <div className="text-center mb-20">
            <HeadingScrollAnimation as="h2" className="text-4xl md:text-5xl font-black text-slate-900 mb-6" variant="scale">
              Meet Our <span className="text-teal-600">Experts</span>
            </HeadingScrollAnimation>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Highly qualified professionals dedicated to your recovery and physical excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {siteContent.team.map((member, index) => (
              <ScrollAnimation
                key={index}
                variant="fade-up"
                delay={index * 100}
                className="group"
              >
                <div className="relative rounded-[2.5rem] overflow-hidden mb-6 aspect-[4/5] shadow-xl group-hover:shadow-2xl transition-all duration-500">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = "/images/team/fallback.png";
                    }}
                  />
                  {/* Persistent Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                  {/* Persistent Description */}
                  <div className="absolute bottom-6 left-6 right-6 transition-transform duration-500 group-hover:-translate-y-2">
                    <p className="text-white text-sm font-medium leading-relaxed drop-shadow-md">{member.description}</p>
                  </div>
                </div>

                <div className="text-center lg:text-left px-2">
                  <h3 className="text-2xl font-black text-slate-900 mb-1 tracking-tight group-hover:text-teal-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-teal-600 font-black uppercase text-xs tracking-widest mb-3">
                    {member.role}
                  </p>
                  <div className="inline-block px-6 py-2 rounded-2xl bg-slate-100 text-slate-600 text-xs font-bold border border-slate-200 whitespace-pre-line mx-2">
                    {member.qualifications}
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Standards - Trust Building */}
      <section className="py-24 bg-transparent">
        <div className="container px-4 relative z-10">
          <div className="text-center mb-16">
            <HeadingScrollAnimation as="h2" className="text-4xl md:text-5xl font-black text-slate-900 mb-6" variant="blur-up">
              World-Class <span className="text-teal-600">Standards</span>
            </HeadingScrollAnimation>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12">
              Our therapists are fully registered with the UK's leading professional health bodies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto mb-20">
            {siteContent.accreditations.map((acc, index) => (
              <ScrollAnimation
                key={index}
                variant="fade-up"
                delay={index * 150}
                className="flex flex-col items-center hover:-translate-y-2 transition-transform duration-500"
              >
                <div className="h-24 px-4 py-2 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group w-full max-w-[200px]">
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

          <ScrollAnimation variant="fade-up" className="max-w-4xl mx-auto rounded-[2rem] bg-white p-10 shadow-xl border border-slate-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
            <div className="relative z-10">
              <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center">🤝</span>
                Excellence in Clinical Care
              </h3>
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
                {[
                  "Regulated by professional UK health bodies",
                  "Continuous professional development (CPD)",
                  "Fully insured clinical practitioners",
                  "Evidence-based treatment protocols",
                  "Highest hygiene & safety standards",
                  "Patient confidentiality & MDT coordination"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-slate-700 font-medium">
                    <span className="shrink-0 w-5 h-5 rounded-full bg-teal-500 flex items-center justify-center text-white text-[10px]">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Why Choose Us - Modern Grid */}
      <section className="py-24 bg-white/60 backdrop-blur-sm">
        <div className="container px-4 relative z-10">
          <div className="text-center mb-20">
            <HeadingScrollAnimation as="h2" className="text-4xl md:text-5xl font-black text-slate-900 mb-6" variant="slide-in-right">
              Why <span className="text-teal-600">Body First</span> UK
            </HeadingScrollAnimation>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: "🎓",
                title: "Elite Expertise",
                color: "teal",
                text: "Our team brings years of high-level clinical experience from elite sports to complex chronic cases."
              },
              {
                icon: "🤝",
                title: "Personalized Focus",
                color: "emerald",
                text: "We spend more time listening and assessing, ensuring a treatment plan as unique as your goals."
              },
              {
                icon: "📊",
                title: "Science-Driven",
                color: "teal",
                text: "Every technique we use is backed by the latest healthcare research and proven outcomes."
              },
              {
                icon: "⏱️",
                title: "Dedicated Time",
                color: "emerald",
                text: "We value quality over quantity, providing full, unhurried attention in every single session."
              }
            ].map((item, i) => (
              <ScrollAnimation
                key={i}
                delay={i * 100}
                className="group p-10 rounded-[2.5rem] bg-white border border-slate-200 shadow-sm hover:border-teal-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-4 transition-all duration-300 text-center"
              >
                <div className={`w-14 h-14 rounded-2xl bg-${item.color}-50 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{item.text}</p>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section >

      {/* Final CTA - Cinematic Impact */}
      < section className="relative py-32 overflow-hidden bg-slate-900" >
        <div className="absolute inset-0 opacity-40">
          <img src="/images/Aboutus/hero.png" alt="Recovery" className="w-full h-full object-cover grayscale" />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900 via-teal-900/80 to-teal-800/40" />
        </div>
        <AntigravityCanvas position="absolute" />
        <div className="container relative z-10 text-center px-4">
          <HeadingScrollAnimation as="h2" className="text-4xl lg:text-6xl font-black text-white mb-8" variant="scale">
            Your Recovery <span className="text-teal-400">Starts Here</span>
          </HeadingScrollAnimation>
          <p className="text-xl mb-12 text-teal-50 max-w-2xl mx-auto font-light leading-relaxed">
            Take the first step towards a revitalised, pain-free life with London's elite physiotherapy team.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://app.theclinicportal.com/?Email=info@bodyfirst.clinic#login"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-teal-500 text-white rounded-full font-black text-xl hover:bg-teal-400 hover:scale-105 transition-all shadow-[0_0_30px_rgba(20,184,166,0.4)]"
            >
              Book Your Priority Session
            </a>
            <Link
              to="/contact"
              className="px-10 py-5 border-2 border-white/30 text-white rounded-full font-black text-xl hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Contact Specialist
            </Link>
          </div>
        </div>
      </section >
    </div >
  );
};

export default About;
