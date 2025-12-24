import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';
import Hero from '../components/Hero';
import InsuranceMarquee from '../components/InsuranceMarquee';
import HeadingScrollAnimation from '../components/HeadingScrollAnimation';
import SEO from '../components/SEO';
import { seoConfig } from '../data/seoConfig';
import { siteContent } from '../data/content';
import { servicesData } from '../data/servicesData';
import AntigravityCanvas from '../components/AntigravityCanvas';

const Home = () => {
  return (
    <div>
      <SEO title={seoConfig.home.title} description={seoConfig.home.description} canonical={'https://bodyfirst.uk/'} />
      {/* Hero Section (your existing Hero; will look teal if Option A is applied) */}
      <Hero
        title="Move Better Feel Stronger"
        subtitle="Elite Physiotherapy & Wellness"
        description="At Body First UK, we combine expert physiotherapy with cutting-edge wellness treatments to help you move better, feel stronger, and live pain-free."
        ctaPrimary="Book Now"
        ctaSecondary="Contact Us"
        backgroundVideo="/videos/hero.mp4"
      />

      {/* Quick Overview Cards - Separated Section */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="container px-4 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/what-we-treat" className="group">
              <div className="h-full p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-teal-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-4 transition-all duration-300">
                <div className="w-14 h-14 mb-6 rounded-2xl bg-teal-50 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-500">🩺</div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">What We Treat</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Expert treatment for a wide range of musculoskeletal conditions and injuries.
                </p>
                <span className="flex items-center font-bold text-teal-600 group-hover:gap-2 transition-all">
                  Learn more <span className="opacity-0 group-hover:opacity-100 transition-all">→</span>
                </span>
              </div>
            </Link>

            <Link to="/services" className="group">
              <div className="h-full p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-teal-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-4 transition-all duration-300">
                <div className="w-14 h-14 mb-6 rounded-2xl bg-teal-50 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-500">⚕️</div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Our Services</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Physiotherapy, sports massage, dry needling, and advanced wellness treatments.
                </p>
                <span className="flex items-center font-bold text-teal-600 group-hover:gap-2 transition-all">
                  View services <span className="opacity-0 group-hover:opacity-100 transition-all">→</span>
                </span>
              </div>
            </Link>

            <Link to="/prices" className="group">
              <div className="h-full p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-teal-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-4 transition-all duration-300">
                <div className="w-14 h-14 mb-6 rounded-2xl bg-teal-50 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-500">💷</div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Pricing</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Transparent pricing from £65. We work with all major private health insurance providers.
                </p>
                <span className="flex items-center font-bold text-teal-600 group-hover:gap-2 transition-all">
                  See pricing <span className="opacity-0 group-hover:opacity-100 transition-all">→</span>
                </span>
              </div>
            </Link>

            <a href="https://app.theclinicportal.com/?Email=info@bodyfirst.clinic#login" target="_blank" rel="noopener noreferrer" className="group">
              <div className="h-full p-8 rounded-3xl bg-teal-600 shadow-[0_20px_50px_rgba(20,184,166,0.3)] hover:shadow-[0_25px_60px_rgba(20,184,166,0.4)] transition-all duration-500 hover:-translate-y-2 border border-teal-500">
                <div className="w-14 h-14 mb-6 rounded-2xl bg-white/20 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-500">📅</div>
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight">Book Now</h3>
                <p className="text-teal-50 mb-6 leading-relaxed">
                  Easy online booking. Same-day appointments often available at our London clinic.
                </p>
                <span className="flex items-center font-bold text-white group-hover:gap-2 transition-all">
                  Book online <span className="opacity-0 group-hover:opacity-100 transition-all">→</span>
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Featured Services - Modernized Grid */}
      <section className="py-24 bg-transparent">
        <div className="container px-4 text-center lg:text-left relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-8 text-center lg:text-left">
            <div>
              <HeadingScrollAnimation as="h2" className="text-4xl md:text-5xl font-black text-slate-900 mb-6" variant="fade-up">
                Elite <span className="text-teal-600">Care</span> Solutions
              </HeadingScrollAnimation>
              <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
                Comprehensive physiotherapy and wellness treatments tailored to your unique recovery journey.
              </p>
            </div>
            <Link to="/services" className="group shrink-0 inline-flex items-center gap-3 bg-white px-8 py-4 rounded-full border border-slate-200 font-bold text-slate-900 hover:bg-slate-900 hover:text-white transition-all shadow-sm">
              Explore All Services
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {servicesData.slice(0, 4).map((service) => (
              <ScrollAnimation
                key={service.slug}
                variant="fade-up"
                className="bg-white rounded-3xl p-6 group overflow-hidden border border-slate-200 shadow-md hover:border-teal-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-4 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6 text-left h-full">
                  {/* Service Image */}
                  <div className="w-full md:w-40 h-40 flex-shrink-0 overflow-hidden rounded-2xl shadow-inner bg-slate-100">
                    <img
                      src={service.heroImage || '/images/logo.jpg'}
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-teal-600 transition-colors leading-tight">
                        {service.name}
                      </h3>
                      <p className="text-slate-600 mb-4 line-clamp-2 leading-relaxed text-sm">
                        {service.shortDescription}
                      </p>
                    </div>
                    <div className="mt-auto">
                      <Link
                        to={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-teal-600 transition-all group/btn shadow-md"
                      >
                        Explore Treatment
                        <svg
                          className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-3 px-8 py-4 bg-teal-50 text-teal-700 rounded-full font-black hover:bg-teal-100 transition-all shadow-sm"
            >
              View All Services
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials - Elegant Staggered Layout */}
      <section className="py-24 bg-white/60 backdrop-blur-sm overflow-hidden">
        <div className="container px-4 relative z-10">
          <div className="text-center mb-20">
            <HeadingScrollAnimation as="h2" className="text-4xl md:text-5xl font-black text-slate-900 mb-6" variant="slide-in-left">
              Voices of <span className="text-teal-600">Recovery</span>
            </HeadingScrollAnimation>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Trusted by hundreds of patients across London for professional, life-changing care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 px-2">
            {siteContent.testimonials.map((testimonial, index) => (
              <ScrollAnimation
                key={index}
                variant="fade-up"
                className={`p-8 rounded-3xl bg-white border border-slate-200 hover:border-teal-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-4 transition-all duration-300 ${index % 2 !== 0 ? 'lg:translate-y-8' : ''}`}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-slate-700 mb-8 italic text-lg leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center font-bold text-teal-700">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-black text-slate-900 leading-none mb-1">{testimonial.name}</p>
                    <p className="text-sm text-teal-600 font-medium">{testimonial.service}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <div className="flex flex-col items-center">
            <div className="inline-flex items-center gap-4 bg-slate-900 text-white px-8 py-5 rounded-3xl shadow-2xl mb-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-teal-500 flex items-center justify-center text-[10px] font-bold">BF</div>
                ))}
              </div>
              <div className="h-8 w-px bg-white/20 mx-2" />
              <div className="text-left">
                <div className="text-2xl font-black flex items-center gap-2">
                  4.9/5 <span className="text-amber-400 text-base">★★★★★</span>
                </div>
                <div className="text-xs text-slate-400 uppercase tracking-widest font-bold">200+ Google Reviews</div>
              </div>
            </div>

            <a
              href="https://www.google.com/search?q=bodyfirst+uk&rlz=1C5CHFA_enLK1074LK1074&oq=body&gs_lcrp=EgZjaHJvbWUqBggCEEUYOzIGCAAQRRg8MgYIARBFGDwyBggCEEUYOzIGCAMQRRg7MgYIBBBFGDsyBggFEEUYOTIGCAYQRRg8MgYIBxBFGDzSAQgxNjY4ajBqN6gCCLACAQ&sourceid=chrome&ie=UTF-8#lrd=0x48760b5ea482eda5:0xb1dababe47d75f95,1,,,,"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-900 font-black flex items-center gap-2 hover:text-teal-600 transition-colors"
            >
              Watch All Google Reviews <span className="text-teal-600">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Insurance Partners - Integrated View */}
      <section className="py-24 bg-transparent">
        <div className="container px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-8 text-center lg:text-left">
            <div className="max-w-xl">
              <HeadingScrollAnimation as="h2" className="text-4xl font-black text-slate-900 mb-4" variant="scale">
                Insurance <span className="text-teal-600">Coverage</span>
              </HeadingScrollAnimation>
              <p className="text-lg text-slate-600">
                Seamlessly integrated with all major health insurance providers for your ease of treatment.
              </p>
            </div>
            <Link to="/prices" className="shrink-0 inline-flex items-center gap-2 font-bold text-teal-600 hover:gap-3 transition-all">
              Verify your coverage <span>→</span>
            </Link>
          </div>

          <div className="p-12 rounded-[3rem] bg-white border border-slate-100 shadow-sm relative overflow-hidden group">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white/70 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white/70 to-transparent z-10 pointer-events-none" />
            <InsuranceMarquee items={siteContent.insurance.accepted} duration={25} />
          </div>
        </div>
      </section>

      {/* Team Section - Premium Layout */}
      <section className="py-24 bg-white/60 backdrop-blur-sm">
        <div className="container px-4 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20 gap-8">
            <div className="text-center lg:text-left">
              <HeadingScrollAnimation as="h2" className="text-4xl md:text-5xl font-black text-slate-900 mb-6" variant="blur-up">
                The <span className="text-teal-600">Experts</span>
              </HeadingScrollAnimation>
              <p className="text-xl text-slate-600 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                Highly qualified professionals dedicated to your recovery and specialized in elite care.
              </p>
            </div>
            <Link to="/about#team" className="group shrink-0 inline-flex items-center gap-3 bg-slate-900 px-8 py-4 rounded-full font-bold text-white hover:bg-teal-600 transition-all shadow-lg">
              Meet Full Team
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {siteContent.team.map((member, index) => (
              <ScrollAnimation
                key={index}
                className="group relative"
                variant="fade-up"
              >
                <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 relative shadow-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = "/images/team/fallback.png";
                    }}
                  />
                  {/* Persistent Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                  {/* Persistent Description */}
                  <div className="absolute bottom-6 left-6 right-6 transition-transform duration-500 group-hover:-translate-y-2">
                    <p className="text-xs uppercase tracking-widest font-black text-teal-400 mb-2 drop-shadow-md">{member.qualifications}</p>
                    <p className="text-sm font-medium leading-relaxed text-white drop-shadow-md">{member.description}</p>
                  </div>
                </div>

                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-black text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-teal-600 font-bold uppercase tracking-widest text-xs">{member.role}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Standards - Refined Icons */}
      <section className="py-24 bg-transparent">
        <div className="container px-4 relative z-10">
          <div className="text-center mb-16">
            <HeadingScrollAnimation as="h2" className="text-3xl font-black text-slate-900 mb-4" variant="blur-up">
              Professional <span className="text-teal-600">Standards</span>
            </HeadingScrollAnimation>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              All our physiotherapists are fully qualified and registered with professional bodies, ensuring the highest level of care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {siteContent.accreditations.map((acc, index) => (
              <ScrollAnimation
                key={index}
                className="group p-10 rounded-[2.5rem] bg-white border border-slate-200 shadow-sm hover:border-teal-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-4 transition-all duration-300 text-center"
              >
                <div className="h-20 mb-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <img
                    src={acc.logo}
                    alt={acc.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">{acc.name}</h3>
                <p className="text-slate-500 text-sm font-medium tracking-wide uppercase">{acc.fullName}</p>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - High Impact Grid */}
      <section className="py-24 bg-white/60 backdrop-blur-sm relative overflow-hidden">
        {/* Abstract background shape */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-50 rounded-full blur-[120px] opacity-50 -z-10" />

        <div className="container px-4 relative z-10">
          <div className="text-center mb-20">
            <HeadingScrollAnimation as="h2" className="text-4xl md:text-5xl font-black text-slate-900 mb-6" variant="slide-in-right">
              Why <span className="text-teal-600">Body First</span> UK?
            </HeadingScrollAnimation>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We combine clinical excellence with a patient-first philosophy to ensure the fastest, safest recovery possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🏆", title: "Expert Team", color: "bg-teal-50 text-teal-600", desc: "HCPC and CSP registered physiotherapists with years of clinical experience." },
              { icon: "🎯", title: "Personalised Care", color: "bg-emerald-50 text-emerald-600", desc: "Tailored treatment plans designed specifically for your unique recovery goals." },
              { icon: "⚡", title: "Advanced Techniques", color: "bg-teal-50 text-teal-600", desc: "Latest evidence-based treatments and cutting-edge rehabilitation equipment." },
              { icon: "📍", title: "Central Location", color: "bg-slate-50 text-slate-600", desc: "Convenient London location with excellent transport links and local parking." },
              { i: "🕐", title: "Flexible Hours", color: "bg-teal-50 text-teal-600", desc: "Extended opening hours including evenings and Sundays to fit your busy life." },
              { icon: "💷", title: "Transparent Pricing", color: "bg-emerald-50 text-emerald-600", desc: "No hidden fees. Affordable professional care with major insurance accepted." }
            ].map((item, index) => (
              <ScrollAnimation key={index} className="group p-10 rounded-[2.5rem] bg-white border border-slate-200 shadow-sm hover:border-teal-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-4 transition-all duration-300" variant="fade-up">
                <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center text-3xl mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>{item.icon || (item as any).i}</div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
              </ScrollAnimation>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/why-us"
              className="group inline-flex items-center gap-3 font-black text-slate-900 hover:text-teal-600 transition-colors text-lg"
            >
              Discover our story <span className="group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA - Ultra Premium */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900" />
        <AntigravityCanvas position="absolute" />
        {/* Animated accent gradient */}
        <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-teal-600 rounded-full blur-[150px] opacity-20 animate-pulse" />

        <div className="container px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <HeadingScrollAnimation as="h2" className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1.1]" variant="fade-up">
              Start Your Journey to <span className="text-teal-400">Peak Performance</span>
            </HeadingScrollAnimation>
            <p className="text-xl text-teal-50/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              Don't let pain define your limits. Book an elite assessment today and rediscover your body's full potential.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="https://app.theclinicportal.com/?Email=info@bodyfirst.clinic#login"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-12 py-6 bg-teal-500 text-white rounded-full font-black text-xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(20,184,166,0.5)]"
              >
                <span className="relative z-10">Book Elite Assessment</span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-10 py-6 border-2 border-white/20 hover:border-white text-white rounded-full font-bold text-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all"
              >
                Contact Specialist
              </Link>
            </div>

            <p className="mt-12 text-sm text-slate-500 font-bold tracking-[0.3em] uppercase">
              Same day appointments often available
            </p>
          </div>
        </div>
      </section>
    </div >
  );
};

export default Home;



