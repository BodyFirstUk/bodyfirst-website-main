import { useEffect } from 'react';
import ScrollAnimation from '../components/ScrollAnimation';
import { useLocation } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import Map from '../components/Map';
import HeadingScrollAnimation from '../components/HeadingScrollAnimation';
import SEO from '../components/SEO';
import Accordion from '../components/Accordion';
import { siteContent } from '../data/content';
import { seoConfig } from '../data/seoConfig';
import AntigravityCanvas from '../components/AntigravityCanvas';

const Contact = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const faqItems = [
    {
      question: "How do I book an appointment?",
      answer: `You can book easily online through our booking portal, by calling us at ${siteContent.company.phone}, or via WhatsApp. We usually confirm all manual enquiries within 2 hours during business hours.`
    },
    {
      question: "Do you offer same-day appointments?",
      answer: "Yes, we prioritize acute injuries and often have same-day availability. We recommend calling or messaging us on WhatsApp for the most up-to-date same-day slots."
    },
    {
      question: "What should I bring to my first appointment?",
      answer: "Please bring any relevant medical reports or scans. We recommend wearing loose, comfortable clothing (like athletic wear) that allows easy access to the area being treated."
    },
    {
      question: "Can I use my private health insurance?",
      answer: "Absolutely. We are registered with all major UK health insurers including Bupa, AXA, Aviva, and Vitality. Please have your membership number and authorization code ready when booking."
    },
    {
      question: "Is there parking available?",
      answer: "Yes, there is street parking available nearby, and we are conveniently located near public transport links for easy access."
    }
  ];

  return (
    <div className="bg-transparent">
      <SEO
        title={seoConfig.contact.title}
        description={seoConfig.contact.description}
      />

      {/* Header (Standardized Hero) */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-teal-900 py-12 lg:py-16">
        <div className="absolute inset-0">
          <img
            src="/images/Contact/contact_hero.png"
            alt="Body First UK Contact"
            className="w-full h-full object-cover transform scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900 via-teal-900/40 to-transparent" />
        </div>

        <div className="container relative z-10 px-4">
          <div className="max-w-4xl text-white">
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
              Get in <span className="text-teal-400">Touch</span>
            </h1>
            <p className="text-xl lg:text-2xl text-teal-50 font-light max-w-2xl leading-relaxed">
              Experience elite care. Contact our specialists today to start your journey to peak performance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods - Elite Cards */}
      <section className="py-24 bg-transparent">
        <div className="container px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {[
              {
                icon: "📞",
                title: "Call Us",
                value: siteContent.company.phone,
                href: `tel:${siteContent.company.phone}`,
                sub: "Mon-Fri: 9am-8pm"
              },
              {
                icon: (
                  <img src="/images/icons/whatsapp.svg" alt="WhatsApp" className="w-10 h-10" />
                ),
                title: "WhatsApp",
                value: "Message Specialist",
                href: `https://wa.me/${siteContent.company.whatsapp}`,
                sub: "Quick replies guaranteed"
              },
              {
                icon: "✉️",
                title: "Email Us",
                value: siteContent.company.email,
                href: `mailto:${siteContent.company.email}`,
                sub: "We reply within 24 hours"
              }
            ].map((method, i) => (
              <ScrollAnimation key={i} variant="fade-up" delay={i * 100} className="group p-10 bg-white rounded-[2.5rem] border border-slate-100 hover:shadow-2xl transition-all duration-500 text-center">
                <div className="h-16 w-16 mx-auto mb-8 flex items-center justify-center rounded-2xl bg-teal-50 text-4xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  {method.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">{method.title}</h3>
                <a href={method.href} className="text-teal-600 font-bold text-lg hover:underline block mb-2 break-all px-2">
                  {method.value}
                </a>
                <p className="text-slate-400 text-sm font-medium">{method.sub}</p>
              </ScrollAnimation>
            ))}
          </div>

          {/* Opening Hours - Premium Layout */}
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation variant="fade-up" className="bg-slate-900 text-white rounded-[3rem] p-12 relative overflow-hidden group">
              <AntigravityCanvas position="absolute" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform duration-1000" />
              <div className="relative z-10">
                <div className="text-center mb-10">
                  <h3 className="text-3xl font-black mb-4">Opening <span className="text-teal-400">Hours</span></h3>
                  <div className="h-1 w-20 bg-teal-500 mx-auto rounded-full" />
                </div>
                <div className="grid sm:grid-cols-3 gap-8 text-center">
                  {[
                    { day: "Mon – Fri", time: "9am – 8pm" },
                    { day: "Saturday", time: "Closed" },
                    { day: "Sunday", time: "11am – 8pm" }
                  ].map((h, i) => (
                    <div key={i} className="space-y-2">
                      <p className="text-teal-400 font-black uppercase tracking-widest text-xs">{h.day}</p>
                      <p className="text-2xl font-bold">{h.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Form & Map - Elite Integration */}
      <section id="book" className="py-24 bg-white/60 backdrop-blur-sm relative overflow-hidden">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-stretch">
            {/* Contact Form */}
            <ScrollAnimation variant="fade-up" className="lg:w-1/2 bg-white rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-200/50 p-10 lg:p-12">
              <div className="mb-10">
                <h2 className="text-3xl font-black text-slate-900 mb-4">Send us a <span className="text-teal-600">Message</span></h2>
                <p className="text-slate-500 font-medium">Have a specific question? Fill out the form below and a specialist will get back to you shortly.</p>
              </div>
              <ContactForm />
            </ScrollAnimation>

            {/* Map & Address */}
            <div id="map" className="lg:w-1/2 flex flex-col">
              <ScrollAnimation variant="fade-up" className="flex-1 rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100 relative group min-h-[400px]">
                <Map />
              </ScrollAnimation>
              <div className="mt-8 p-8 bg-slate-50 rounded-[2rem] border border-slate-100 flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-2xl text-teal-600 shrink-0">📍</div>
                <div>
                  <h4 className="font-black text-slate-900">Clinic Location</h4>
                  <p className="text-slate-600 font-medium">{siteContent.company.address.place}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Standardized Modern Accordion */}
      <section className="py-24 bg-transparent">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <HeadingScrollAnimation as="h2" className="text-4xl md:text-5xl font-black text-slate-900 mb-6" variant="slide-in-left">
                Common <span className="text-teal-600">Questions</span>
              </HeadingScrollAnimation>
              <p className="text-xl text-slate-600">Everything you need to know about your first visit and treatment.</p>
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
          <img src="/images/Contact/contact_hero.png" alt="Recovery" className="w-full h-full object-cover grayscale" />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900 via-teal-900/80 to-teal-800/40" />
        </div>
        <AntigravityCanvas position="absolute" />
        <div className="container relative z-10 text-center px-4">
          <HeadingScrollAnimation as="h2" className="text-4xl lg:text-6xl font-black text-white mb-8" variant="scale">
            Ready to Take the <span className="text-teal-400">First Step?</span>
          </HeadingScrollAnimation>
          <p className="text-xl mb-12 text-teal-50 max-w-2xl mx-auto font-light leading-relaxed">
            Pain shouldn't be your normal. Join hundreds of patients who chose Body First UK for their recovery.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href={`tel:${siteContent.company.phone}`}
              className="px-10 py-5 bg-teal-500 text-white rounded-full font-black text-xl hover:bg-teal-400 hover:scale-105 transition-all shadow-[0_0_30px_rgba(20,184,166,0.4)]"
            >
              Call Specialist Now
            </a>
            <a
              href="https://app.theclinicportal.com/?Email=info@bodyfirst.clinic#login"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 border-2 border-white/30 text-white rounded-full font-black text-xl hover:bg-white/10 transition-all backdrop-blur-sm shadow-xl"
            >
              Book Elite Assessment
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
