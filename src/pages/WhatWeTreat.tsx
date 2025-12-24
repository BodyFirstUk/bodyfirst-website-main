// src/pages/WhatWeTreat.tsx

import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';
import HeadingScrollAnimation from '../components/HeadingScrollAnimation';
import Accordion from '../components/Accordion';
import SEO from '../components/SEO';
import treatmentCategories from '../data/whatWeTreatData';
import { seoConfig } from '../data/seoConfig';

const WhatWeTreat = () => {
  const faqItems = [
    {
      question: "How quickly will I see results?",
      answer: "Most patients experience significant improvement within 2–3 sessions, though exact timelines vary based on the clinical diagnosis and individual response to treatment. We provide a realistic roadmap during your initial assessment."
    },
    {
      question: "Do I need a referral from my GP?",
      answer: "No GP referral is required for private physiotherapy. You can book directly with us. However, if you are using private health insurance, we recommend checking if your provider requires a referral for claim processing."
    },
    {
      question: "What should I wear to my session?",
      answer: "We recommend comfortable, loose clothing that allows access to the area being treated. For lower limb issues, shorts are ideal; for upper body issues, a vest or t-shirt is preferred."
    },
    {
      question: "Will the treatment be painful?",
      answer: "Some clinical techniques may cause brief discomfort as we work on restricted tissues, but we always prioritize your comfort and explain every step of the process beforehand."
    }
  ];

  return (
    <div className="bg-transparent">
      <SEO
        title={seoConfig.whatWeTreat.title}
        description={seoConfig.whatWeTreat.description}
      />

      {/* Header (Standardized Hero) */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-teal-900 py-12 lg:py-16">
        <div className="absolute inset-0">
          <img
            src="/images/Condition We Treat/whatwetreat.png"
            alt="People receiving physiotherapy treatment"
            className="w-full h-full object-cover transform scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900 via-teal-900/40 to-transparent" />
        </div>
        <div className="container relative z-10 px-4">
          <div className="max-w-4xl text-white">
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
              Conditions We <span className="text-teal-400">Treat</span>
            </h1>
            <p className="text-xl lg:text-2xl text-teal-50 font-light max-w-2xl leading-relaxed">
              Elite physiotherapy for musculoskeletal conditions, sports injuries, and advanced chronic pain management in London.
            </p>
          </div>
        </div>
      </section>

      {/* Conditions Grid - Modern Premium Cards */}
      <section className="py-24 bg-transparent">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {treatmentCategories.map((category, index) => (
              <ScrollAnimation
                key={category.slug}
                delay={index * 50}
                variant="fade-up"
                className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/40 hover:shadow-2xl transition-all duration-700 border border-slate-100 flex flex-col h-full hover:-translate-y-2"
              >
                {/* Background Image Container */}
                <div className="h-56 relative overflow-hidden">
                  <img
                    src={category.heroImage || '/images/logo.jpg'}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-black/10 transition-colors duration-500 group-hover:via-white/20" />
                </div>

                <div className="p-10 flex-1 flex flex-col pt-0 -mt-10 relative z-10">
                  <div className="mb-8">
                    <div className="w-20 h-20 bg-white rounded-3xl shadow-2xl shadow-teal-900/10 flex items-center justify-center text-4xl mb-6 border border-slate-50 group-hover:rotate-6 transition-all duration-500">
                      {category.icon}
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 group-hover:text-teal-600 transition-colors mb-4 line-clamp-1">
                      {category.title}
                    </h3>
                    <p className="text-slate-500 font-medium text-sm mb-6 line-clamp-2 leading-relaxed">
                      {category.shortDescription}
                    </p>
                  </div>

                  <div className="bg-slate-50/50 rounded-3xl p-6 mb-8 flex-1 border border-slate-100 group-hover:bg-teal-50/30 transition-colors">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Focus Areas</p>
                    <ul className="space-y-3">
                      {category.conditions.slice(0, 3).map((condition, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm text-slate-600 font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                          {condition.name}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={`/what-we-treat/${category.slug}`}
                    className="w-full inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black transition-all group/btn shadow-lg shadow-slate-900/10 hover:bg-teal-600"
                  >
                    View Treatments
                    <svg
                      className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Elite Recovery Journey - High End Visuals */}
      <section className="py-24 bg-white/60 backdrop-blur-sm">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-teal-600 font-black uppercase tracking-[0.3em] text-sm mb-4">The Process</h2>
              <HeadingScrollAnimation as="h2" className="text-4xl md:text-5xl font-black text-slate-900 mb-6" variant="fade-up">
                Elite Recovery <span className="text-teal-600">Journey</span>
              </HeadingScrollAnimation>
            </div>

            <div className="space-y-12 relative">
              {/* Connecting Line */}
              <div className="absolute left-[2.25rem] top-10 bottom-10 w-px bg-slate-100 hidden md:block" />

              {[
                {
                  n: 1,
                  t: "Clinical Assessment",
                  d: "We begin with a high-fidelity evaluation of your history and movement patterns to identify the root physiological cause."
                },
                {
                  n: 2,
                  t: "Tailored Roadmap",
                  d: "An elite treatment plan is crafted, combining hands-on therapy, advanced modalities, and targeted rehabilitation."
                },
                {
                  n: 3,
                  t: "Precision Treatment",
                  d: "We deploy evidence-based clinical techniques and corrective exercises to accelerate your tissue healing and performance."
                },
                {
                  n: 4,
                  t: "Sustainable Health",
                  d: "Empowering you with elite-level knowledge and self-management tools to prevent future injury and maintain peak wellness."
                }
              ].map((step, i) => (
                <ScrollAnimation key={i} variant="fade-up" delay={i * 100} className="relative pl-0 md:pl-24 group">
                  <div className="absolute left-0 top-0 w-16 h-16 rounded-[1.5rem] bg-teal-50 text-teal-600 flex items-center justify-center text-2xl font-black border border-teal-100 group-hover:bg-teal-600 group-hover:text-white transition-all duration-500 hidden md:flex">
                    {step.n}
                  </div>
                  <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/30 group-hover:shadow-2xl transition-all duration-500">
                    <div className="flex items-center gap-4 mb-4 md:hidden">
                      <span className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-black">{step.n}</span>
                      <h3 className="text-2xl font-black text-slate-900">{step.t}</h3>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4 hidden md:block">{step.t}</h3>
                    <p className="text-slate-500 text-lg leading-relaxed font-medium">
                      {step.d}
                    </p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Standardized FAQ - Elastic Accordion */}
      <section className="py-24 bg-transparent">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-teal-600 font-black uppercase tracking-[0.3em] text-sm mb-4">Support</h2>
              <HeadingScrollAnimation as="h2" className="text-4xl md:text-5xl font-black text-slate-900 mb-6" variant="slide-in-left">
                Common <span className="text-teal-600">Questions</span>
              </HeadingScrollAnimation>
            </div>

            <ScrollAnimation variant="fade-up" className="bg-white rounded-[3rem] border border-slate-100 shadow-xl p-8 lg:p-12">
              <Accordion items={faqItems} />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Final CTA - Cinematic Impact */}
      <section className="relative py-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-40">
          <img src="/images/Condition We Treat/whatwetreat.png" alt="Recovery" className="w-full h-full object-cover grayscale" />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900 via-teal-900/80 to-teal-800/40" />
        </div>
        <div className="container relative z-10 text-center px-4">
          <HeadingScrollAnimation as="h2" className="text-4xl lg:text-6xl font-black text-white mb-8" variant="scale">
            Reclaim Your <span className="text-teal-400">Mobility</span>
          </HeadingScrollAnimation>
          <p className="text-xl mb-12 text-teal-50 max-w-2xl mx-auto font-light leading-relaxed">
            Pain shouldn't be your normal. Experience the elite difference with our London clinical team.
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
              className="px-10 py-5 border-2 border-white/30 text-white rounded-full font-black text-xl hover:bg-white/10 transition-all backdrop-blur-sm shadow-xl"
            >
              Speak to Specialist
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeTreat;