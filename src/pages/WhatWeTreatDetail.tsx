import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import treatmentCategories from "../data/whatWeTreatData";
import ScrollAnimation from "../components/ScrollAnimation";
import Accordion from "../components/Accordion";
import SEO from '../components/SEO';

const WhatWeTreatDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = treatmentCategories.find((c) => c.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!category) {
    return <Navigate to="/what-we-treat" replace />;
  }

  const { detailContent } = category;

  // Helper to determine section style based on title
  const getSectionType = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes("causes")) return "causes";
    if (t.includes("symptoms")) return "symptoms";
    if (t.includes("how our") || t.includes("help") || t.includes("treatment")) return "help";
    if (t.includes("when to seek")) return "when";
    return "default";
  };

  // Map slugs to specific images for better visuals
  const getImageForSlug = (slug: string) => {
    if (slug === "head-jaw-pain") return "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2040&auto=format&fit=crop";
    if (slug === "neck-pain") return "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=2074&auto=format&fit=crop";
    if (slug === "back-spine-pain") return "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2070&auto=format&fit=crop";
    return "https://images.unsplash.com/photo-1576091160550-217359f4ecf8?q=80&w=2070&auto=format&fit=crop";
  };

  return (
    <div className="min-h-screen bg-transparent">
      <SEO
        title={`${category.title} | Body First UK`}
        description={detailContent.overview || 'Expert physiotherapy and treatment for conditions in Hampton Hill, London.'}
        canonical={`https://bodyfirst.uk/what-we-treat/${category.slug}`}
      />
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          {category.heroImage ? (
            <img
              src={category.heroImage}
              alt={category.heroAlt ?? category.title}
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
              to="/what-we-treat"
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
              <span className="font-medium tracking-wide uppercase text-xs">All Conditions We Treat</span>
            </Link>
          </nav>

          <div className="max-w-4xl mx-auto lg:mx-0 text-white">
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
              {category.title}
              <span className="block h-1.5 w-24 bg-teal-400 mt-4 rounded-full"></span>
            </h1>
            <p className="text-xl lg:text-2xl text-teal-50/90 max-w-2xl leading-relaxed font-light mb-8">
              {detailContent.overview}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://app.theclinicportal.com/?Email=info@bodyfirst.clinic#login"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-500 hover:bg-teal-400 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 hover:shadow-2xl shadow-teal-500/20"
              >
                Assess My Symptoms
              </a>
              <Link
                to="/contact"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold transition-all"
              >
                Contact Specialist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Info Bar */}
      <div className="container -mt-10 lg:-mt-16 relative z-30 px-4">
        <div className="bg-white rounded-3xl shadow-2xl shadow-teal-900/10 p-6 lg:p-10 border border-teal-50 flex flex-col md:flex-row items-center justify-between divide-y md:divide-y-0 md:divide-x divide-teal-100">
          <div className="py-4 md:py-0 md:px-8 text-center flex-1 w-full">
            <span className="block text-teal-600 font-bold text-lg mb-1">Targeted Relief</span>
            <span className="text-gray-500 text-sm">Evidence-Based Treatment</span>
          </div>
          <div className="py-4 md:py-0 md:px-8 text-center flex-1 w-full border-t md:border-t-0">
            <span className="block text-teal-600 font-bold text-lg mb-1">Faster Recovery</span>
            <span className="text-gray-500 text-sm">Personalized Care Path</span>
          </div>
          <div className="py-4 md:py-0 md:px-8 text-center flex-1 w-full border-t md:border-t-0">
            <span className="block text-teal-600 font-bold text-lg mb-1">Expert Diagnosis</span>
            <span className="text-gray-500 text-sm">Experienced Phsysios</span>
          </div>
        </div>
      </div>

      {/* Content Blocks */}
      <div className="py-16 lg:py-24 space-y-24 lg:space-y-32">
        {detailContent.sections.map((section, index) => {
          const type = getSectionType(section.heading);
          const isEven = index % 2 === 0;

          if (type === "causes") {
            return (
              <section key={index} className="container px-4">
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}>
                  <div className="flex-1 space-y-6">
                    <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-teal-600">The Root Cause</h2>
                    <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                      {section.heading}
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {section.content}
                    </p>
                    <ul className="space-y-3 pt-4">
                      {section.bullets?.map((bullet, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                          <span className="text-slate-700 font-medium">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1 relative group w-full">
                    <div className="absolute -inset-4 bg-teal-100 rounded-[2rem] transform -rotate-2 group-hover:rotate-0 transition-transform duration-500 z-0"></div>
                    <div className="relative z-10 overflow-hidden rounded-[2rem] shadow-2xl aspect-[4/3]">
                      <img
                        src={getImageForSlug(slug || "")}
                        alt={section.heading}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      />
                    </div>
                  </div>
                </div>
              </section>
            );
          }

          if (type === "symptoms") {
            return (
              <section key={index} className="bg-slate-900 py-24 lg:py-32 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 blur-[100px] rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 blur-[100px] rounded-full"></div>

                <div className="container relative z-10 px-4">
                  <div className="max-w-3xl mb-16">
                    <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-teal-400 mb-4">Diagnosis</h2>
                    <h3 className="text-4xl lg:text-5xl font-extrabold mb-6 font-primary">{section.heading}</h3>
                    <p className="text-lg text-slate-300">{section.content}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.bullets?.map((bullet, i) => (
                      <div key={i} className="group bg-slate-800 border border-slate-600 p-6 rounded-2xl transition-all duration-300 shadow-sm hover:border-teal-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-4">
                        <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mb-6 text-teal-400 group-hover:bg-teal-400 group-hover:text-white transition-colors">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-bold mb-2 group-hover:text-teal-400 transition-colors uppercase tracking-tight">{bullet}</h4>
                        <p className="text-sm text-slate-400">Our assessment identifies and resolves {bullet.toLowerCase()} to restore your quality of life.</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          }

          if (type === "help") {
            return (
              <section key={index} className="container px-4">
                <div className="bg-white rounded-[3rem] p-12 lg:p-20 shadow-xl border border-slate-100 relative overflow-hidden">
                  <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                      <div className="inline-block px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-bold tracking-wider uppercase">Our Approach</div>
                      <h3 className="text-4xl lg:text-5xl font-bold text-slate-900">{section.heading}</h3>
                      <p className="text-lg text-slate-600 leading-relaxed">{section.content}</p>

                      <div className="grid sm:grid-cols-2 gap-4">
                        {section.bullets?.map((bullet, i) => (
                          <div key={i} className="flex items-center gap-4 group">
                            <span className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all flex-shrink-0">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                            </span>
                            <span className="text-slate-700 font-medium text-sm">{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute -inset-4 bg-teal-50 rounded-[2rem] transform rotate-3 -z-10"></div>
                      <img
                        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
                        alt="Physiotherapist at work"
                        className="rounded-[2.5rem] shadow-2xl w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </section>
            );
          }

          return (
            <section key={index} className="container px-4">
              <div className="bg-slate-100/50 p-10 lg:p-16 rounded-[2rem] border border-slate-200">
                <h3 className="text-3xl font-bold mb-6 text-slate-900">{section.heading}</h3>
                <p className="text-lg text-slate-600 mb-8">{section.content}</p>
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

        {/* FAQs */}
        {detailContent.faqs && detailContent.faqs.length > 0 && (
          <section className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-4">Common Concerns</h2>
                <h3 className="text-4xl lg:text-5xl font-bold text-slate-900">Frequently Asked Questions</h3>
              </div>
              <ScrollAnimation variant="fade-up" className="bg-white rounded-[3rem] border border-slate-100 shadow-xl p-8 lg:p-12">
                <Accordion items={detailContent.faqs} />
              </ScrollAnimation>
            </div>
          </section>
        )}
      </div>

      {/* Modern CTA */}
      <section className="container pb-24 lg:pb-32 px-4">
        <div className="relative overflow-hidden rounded-[3rem] bg-teal-600 p-12 lg:p-24 text-center">
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight">
              Don't Let Pain <br /><span className="text-teal-200">Hold You Back</span>
            </h2>
            <p className="text-xl text-teal-50 leading-relaxed font-light">
              Secure your appointment online and start your journey towards a pain-free life today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <a
                href="https://app.theclinicportal.com/?Email=info@bodyfirst.clinic#login"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-teal-700 px-12 py-5 rounded-full font-black text-xl hover:bg-teal-50 transition-colors shadow-2xl"
              >
                Book Assessment
              </a>
              <Link
                to="/contact"
                className="bg-teal-700 text-white border border-teal-400/30 px-12 py-5 rounded-full font-bold text-xl hover:bg-teal-800 transition-colors"
              >
                Speak with Specialist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Link */}
      <div className="container py-8 text-center border-t border-slate-100">
        <Link to="/what-we-treat" className="text-slate-400 hover:text-teal-600 font-medium transition-colors flex items-center justify-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" /></svg>
          Back to All Conditions
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

export default WhatWeTreatDetail;
