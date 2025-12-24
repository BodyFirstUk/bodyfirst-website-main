import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';
import Card from '../components/Card';
import HeadingScrollAnimation from '../components/HeadingScrollAnimation';
import SEO from '../components/SEO';
import { servicesData } from '../data/servicesData';
import { seoConfig } from '../data/seoConfig';
import AntigravityCanvas from '../components/AntigravityCanvas';

const Services = () => {
  return (
    <div className="bg-transparent">
      <SEO
        title={seoConfig.services.title}
        description={seoConfig.services.description}
      />

      {/* Header (Standardized Hero) */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-teal-900 py-12 lg:py-16">
        <div className="absolute inset-0">
          <img
            src="/images/Condition We Treat/whatwetreat.png"
            alt="Physiotherapy treatment session"
            className="w-full h-full object-cover transform scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900 via-teal-900/40 to-transparent" />
        </div>
        <div className="container relative z-10 px-4">
          <div className="max-w-4xl text-white">
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
              Our <span className="text-teal-400">Services</span>
            </h1>
            <p className="text-xl lg:text-2xl text-teal-50 font-light max-w-2xl leading-relaxed">
              Experience peak physical performance through our comprehensive suite of
              evidence-based wellness and recovery treatments in London.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid - Premium Horizontal Cards */}
      <section className="py-24 bg-transparent">
        <div className="container px-4 relative z-10">
          <div className="grid grid-cols-1 gap-12 max-w-6xl mx-auto">
            {servicesData.map((service, index) => (
              <ScrollAnimation
                variant="fade-up"
                key={service.slug}
                delay={index * 100}
                className="bg-white rounded-3xl p-6 group overflow-hidden border border-slate-200 shadow-md hover:border-teal-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-4 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row items-stretch">
                  {/* Service Image */}
                  <div className="w-full lg:w-2/5 h-72 lg:h-auto overflow-hidden relative">
                    <img
                      src={service.heroImage || '/images/logo.jpg'}
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
                  </div>

                  <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-4 py-1.5 bg-teal-50 text-teal-700 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-teal-100">
                        ELITE CARE
                      </span>
                    </div>

                    <h3 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 group-hover:text-teal-600 transition-colors leading-tight">
                      {service.name}
                    </h3>

                    <p className="text-slate-600 mb-10 text-lg leading-relaxed line-clamp-3">
                      {service.shortDescription}
                    </p>

                    <div>
                      <Link
                        to={`/services/${service.slug}`}
                        className="inline-flex items-center gap-4 bg-slate-900 text-white px-8 py-4 rounded-full font-black text-lg hover:bg-teal-600 transition-all group/btn shadow-lg shadow-slate-900/10"
                      >
                        Explore Treatment
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
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect - Modern Visual Grid */}
      <section className="py-24 bg-white/60 backdrop-blur-sm relative overflow-hidden">
        <div className="container px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-teal-600 font-black uppercase tracking-[0.3em] text-sm mb-4">The Experience</h2>
            <HeadingScrollAnimation as="h2" className="text-4xl md:text-5xl font-black mb-6 text-slate-900" variant="fade-up">
              What to <span className="text-teal-600">Expect</span>
            </HeadingScrollAnimation>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
              Every session at Body First UK is a step towards your peak performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                img: "/images/features/assessment.png",
                title: "Detailed Assessment",
                desc: "Comprehensive evaluation of movement patterns and goals to create a personalised recovery roadmap."
              },
              {
                img: "/images/features/treatment.png",
                title: "Hands-On Therapy",
                desc: "Expert manual techniques to reduce pain, improve mobility, and accelerate natural healing processes."
              },
              {
                img: "/images/features/rehab.png",
                title: "Premium Rehab",
                desc: "Tailored exercise programmes designed to strengthen, stabilise, and prevent future recurrences."
              },
              {
                img: "/images/features/education.png",
                title: "Expert Guidance",
                desc: "Clear, evidence-based explanations about your condition and practical advice for daily management."
              },
              {
                img: "/images/features/advanced.png",
                title: "Elite Modalities",
                desc: "Access to specialised treatments like Shockwave, Foot Scan, and advanced recovery technologies."
              },
              {
                img: "/images/features/assessment.png",
                title: "Progress Review",
                desc: "Regular reassessments to monitor your journey and fine-tune treatment for optimal performance."
              }
            ].map((feature, i) => (
              <ScrollAnimation key={i} delay={i * 50} variant="fade-up" className="group">
                <Card
                  image={feature.img}
                  title={feature.title}
                  className="h-full rounded-[2rem] border border-slate-100 hover:border-teal-100 hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  <p className="text-slate-600 font-medium leading-relaxed">
                    {feature.desc}
                  </p>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits - Modern Integrated Layout */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <AntigravityCanvas position="absolute" />
        <div className="container px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <HeadingScrollAnimation as="h2" className="text-4xl md:text-5xl font-black mb-8" variant="slide-in-left">
                Elite Benefits of <span className="text-teal-400">Our Care</span>
              </HeadingScrollAnimation>
              <p className="text-xl text-slate-400 mb-12 font-light leading-relaxed">
                Join hundreds of patients who have transformed their quality of life through our evidence-based clinical approach.
              </p>

              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { title: 'Pain Resolution', text: 'Targeted techniques to resolve chronic and acute pain.' },
                  { title: 'Elite Mobility', text: 'Restore full range of motion and functional flexibility.' },
                  { title: 'Rapid Recovery', text: 'Accelerate healing from surgery and sports injuries.' },
                  { title: 'Risk Mitigation', text: 'Proactive strategies to reduce the risk of future injury.' },
                  { title: 'Peak Performance', text: 'Optimise movement patterns for superior athletic ability.' },
                  { title: 'Reclaimed Life', text: 'Return to the activities and sports you love, pain-free.' },
                ].map((item, i) => (
                  <ScrollAnimation key={i} delay={i * 100} variant="fade-up" className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center text-teal-400 font-bold border border-teal-500/20">
                      ✓
                    </div>
                    <div>
                      <h3 className="font-black text-lg mb-2 text-teal-50">{item.title}</h3>
                      <p className="text-slate-400 text-sm font-medium leading-relaxed">{item.text}</p>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 relative group">
              <div className="absolute -inset-4 bg-teal-500/10 rounded-[3rem] blur-3xl group-hover:bg-teal-500/20 transition-all duration-700" />
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 aspect-[4/5]">
                <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop" alt="Recovery Benefits" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Cinematic Impact */}
      <section className="relative py-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-40">
          <img src="/images/Condition We Treat/whatwetreat.png" alt="Recovery" className="w-full h-full object-cover grayscale" />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900 via-teal-900/80 to-teal-800/40" />
        </div>
        <AntigravityCanvas position="absolute" />
        <div className="container relative z-10 text-center px-4">
          <HeadingScrollAnimation as="h2" className="text-4xl lg:text-6xl font-black text-white mb-8" variant="scale">
            Your Recovery <span className="text-teal-400">Starts Here</span>
          </HeadingScrollAnimation>
          <p className="text-xl mb-12 text-teal-50 max-w-2xl mx-auto font-light leading-relaxed">
            Don't let pain define your potential. Book an elite assessment with our London clinical team today.
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
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
