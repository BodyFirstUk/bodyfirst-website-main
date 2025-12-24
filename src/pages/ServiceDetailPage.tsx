// src/pages/ServiceDetailPage.tsx

import { useParams, Link, Navigate } from "react-router-dom";
import { findServiceBySlug } from "../data/servicesData";
import { useEffect } from "react";
import SEO from '../components/SEO';

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? findServiceBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Helper to determine section style based on title
  const getSectionType = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes("what is")) return "intro";
    if (t.includes("who is it for")) return "who";
    if (t.includes("conditions")) return "conditions";
    if (t.includes("expect")) return "expect";
    if (t.includes("benefits")) return "benefits";
    return "default";
  };

  return (
    <div className="min-h-screen bg-transparent">
      <SEO
        title={`${service.name} | ${'Body First UK'}`}
        description={service.shortDescription || service.heroDescription || 'Expert physiotherapy services at Body First UK in Hampton Hill, London.'}
        canonical={`https://bodyfirst.uk/services/${service.slug}`}
      />
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          {service.heroImage ? (
            <img
              src={service.heroImage}
              alt={service.heroAlt ?? service.name}
              className="w-full h-full object-cover scale-105 animate-slow-zoom"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900" />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-slate-50/50 z-10" />
        </div>

        <div className="container relative z-20 pt-20 pb-12 lg:pt-32 lg:pb-24">
          <nav className="mb-8" aria-label="Breadcrumb">
            <Link
              to="/services"
              className="group inline-flex items-center text-teal-100 hover:text-white transition-all duration-300"
            >
              <span className="p-2 bg-white/10 rounded-full mr-3 group-hover:bg-white/20 transition-all">
                <svg
                  className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </span>
              <span className="font-medium tracking-wide uppercase text-xs">Explore All Services</span>
            </Link>
          </nav>

          <div className="max-w-4xl mx-auto lg:mx-0">
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              {service.name}
              <span className="block h-1.5 w-24 bg-teal-400 mt-4 rounded-full"></span>
            </h1>
            <p className="text-xl lg:text-2xl text-teal-50/90 max-w-2xl leading-relaxed font-light mb-8">
              {service.heroDescription}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://app.theclinicportal.com/?Email=info@bodyfirst.clinic#login"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-500 hover:bg-teal-400 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 hover:shadow-2xl shadow-teal-500/20"
              >
                Book Your Session
              </a>
              <Link
                to="/contact"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Info Bar */}
      <div className="container -mt-10 lg:-mt-16 relative z-30 px-4">
        <div className="bg-white rounded-3xl shadow-2xl shadow-teal-900/10 p-6 lg:p-10 border border-teal-50 flex flex-col md:flex-row items-center justify-between divide-y md:divide-y-0 md:divide-x divide-teal-100">
          <div className="py-4 md:py-0 md:px-8 text-center flex-1 w-full">
            <span className="block text-teal-600 font-bold text-lg mb-1">Expert Care</span>
            <span className="text-gray-500 text-sm">Certified Professionals</span>
          </div>
          <div className="py-4 md:py-0 md:px-8 text-center flex-1 w-full border-t md:border-t-0">
            <span className="block text-teal-600 font-bold text-lg mb-1">Modern Clinic</span>
            <span className="text-gray-500 text-sm">State-of-the-art Tech</span>
          </div>
          <div className="py-4 md:py-0 md:px-8 text-center flex-1 w-full border-t md:border-t-0">
            <span className="block text-teal-600 font-bold text-lg mb-1">Tailored Plans</span>
            <span className="text-gray-500 text-sm">Personalized Recovery</span>
          </div>
        </div>
      </div>

      {/* Content Blocks */}
      <div className="py-16 lg:py-24 space-y-24 lg:space-y-32">
        {service.sections.map((section, index) => {
          const type = getSectionType(section.title);
          const isEven = index % 2 === 0;

          if (type === "intro") {
            return (
              <section key={index} className="container px-4">
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}>
                  <div className="flex-1 space-y-6">
                    <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-teal-600">Introduction</h2>
                    <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                      {section.title}
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {section.body}
                    </p>
                  </div>
                  <div className="flex-1 relative group w-full">
                    <div className="absolute -inset-4 bg-teal-100 rounded-[2rem] transform -rotate-2 group-hover:rotate-0 transition-transform duration-500 z-0"></div>
                    <div className="relative z-10 overflow-hidden rounded-[2rem] shadow-2xl aspect-[4/3]">
                      <img
                        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
                        alt="Physiotherapy session"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      />
                    </div>
                  </div>
                </div>
              </section>
            );
          }

          if (type === "conditions") {
            return (
              <section key={index} className="bg-slate-900 py-24 lg:py-32 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 blur-[100px] rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 blur-[100px] rounded-full"></div>

                <div className="container relative z-10 px-4">
                  <div className="max-w-3xl mb-16">
                    <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-teal-400 mb-4">Therapeutic Scope</h2>
                    <h3 className="text-4xl lg:text-5xl font-extrabold mb-6 font-primary">{section.title}</h3>
                    <p className="text-lg text-slate-300">{section.body}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.bullets?.map((bullet, i) => (
                      <div key={i} className="group bg-slate-800 border border-slate-600 p-6 rounded-2xl transition-all duration-300 shadow-sm hover:border-teal-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-4">
                        <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mb-6 text-teal-400 group-hover:bg-teal-400 group-hover:text-white transition-colors">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-bold mb-2 group-hover:text-teal-400 transition-colors">{bullet}</h4>
                        <p className="text-sm text-slate-400">Our expert team provides targeted therapy to resolve {bullet.toLowerCase()} and restore full function.</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          }

          if (type === "who") {
            return (
              <section key={index} className="container px-4">
                <div className="bg-white rounded-[3rem] p-12 lg:p-20 shadow-xl border border-slate-100 relative overflow-hidden">
                  <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                      <div className="inline-block px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-bold tracking-wider">SUITABILITY</div>
                      <h3 className="text-4xl lg:text-5xl font-bold text-slate-900">{section.title}</h3>
                      <p className="text-lg text-slate-600 leading-relaxed">{section.body}</p>

                      <div className="space-y-4">
                        {section.bullets?.map((bullet, i) => (
                          <div key={i} className="flex items-center gap-4 group">
                            <span className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                            </span>
                            <span className="text-slate-700 font-medium">{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute -inset-4 bg-teal-50 rounded-[2rem] transform rotate-3 -z-10"></div>
                      <img
                        src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
                        alt="Patients training"
                        className="rounded-[2.5rem] shadow-2xl w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </section>
            );
          }

          if (type === "expect") {
            return (
              <section key={index} className="container px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-4">The Journey</h2>
                  <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">{section.title}</h3>
                  <p className="text-lg text-slate-600">{section.body}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { t: "Assessment", d: "Deep dive into your condition and habits." },
                    { t: "Treatment", d: "Hands-on therapy and expert guidance." },
                    { t: "Recovery", d: "Long-term planning for sustained health." }
                  ].map((step, i) => (
                    <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-lg hover:border-teal-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-4 transition-all duration-300 text-center">
                      <div className="w-16 h-16 bg-teal-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black mx-auto mb-6 transform rotate-3">
                        {i + 1}
                      </div>
                      <h4 className="text-2xl font-bold mb-3">{step.t}</h4>
                      <p className="text-slate-500">{step.d}</p>
                    </div>
                  ))}
                </div>
              </section>
            );
          }

          return (
            <section key={index} className="container px-4">
              <div className="bg-slate-100/50 p-10 lg:p-16 rounded-[2rem] border border-slate-200">
                <h3 className="text-3xl font-bold mb-6 text-slate-900">{section.title}</h3>
                <p className="text-lg text-slate-600 mb-8">{section.body}</p>
                {section.bullets && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {section.bullets.map((bullet, i) => (
                      <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                        <span className="text-slate-700">{bullet}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          );
        })}
      </div>

      {/* Modern CTA */}
      <section className="container pb-24 lg:pb-32 px-4">
        <div className="relative overflow-hidden rounded-[3rem] bg-teal-600 p-12 lg:p-24 text-center">
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight">
              Begin Your Recovery <span className="text-teal-200">Today</span>
            </h2>
            <p className="text-xl text-teal-50 leading-relaxed font-light">
              Expertly tailored physiotherapy sessions designed to get you back to peak performance without pain.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <a
                href="https://app.theclinicportal.com/?Email=info@bodyfirst.clinic#login"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-teal-700 px-12 py-5 rounded-full font-black text-xl hover:bg-teal-50 transition-colors shadow-2xl"
              >
                Book Securely Online
              </a>
              <Link
                to="/contact"
                className="bg-teal-700 text-white border border-teal-400/30 px-12 py-5 rounded-full font-bold text-xl hover:bg-teal-800 transition-colors"
              >
                Talk to a Specialist
              </Link>
            </div>
            <p className="text-teal-200 text-sm font-semibold tracking-wider flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Available for appointments this week
            </p>
          </div>
        </div>
      </section>

      {/* Footer Bottom Link */}
      <div className="container py-8 text-center border-t border-slate-100">
        <Link to="/services" className="text-slate-400 hover:text-teal-600 font-medium transition-colors flex items-center justify-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" /></svg>
          Back to Services Overview
        </Link>
      </div>

      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 30s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ServiceDetailPage;
