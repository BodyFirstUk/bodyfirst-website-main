// src/components/Hero.tsx
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
  ctaSecondaryLink?: string;
  backgroundVideo?: string;
  backgroundImage?: string;
}

const BOOKING_URL = "https://app.theclinicportal.com/?Email=info@bodyfirst.clinic#login";

const Hero = ({
  title,
  subtitle,
  description,
  ctaPrimary,
  ctaSecondary,
  ctaSecondaryLink = "/contact",
  backgroundVideo,
  backgroundImage,
}: HeroProps) => {
  return (
    <section className="relative w-full min-h-[calc(100vh-6.5rem)] lg:min-h-[calc(100vh-7.5rem)] flex items-center justify-center overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0 text-left">
        {backgroundVideo ? (
          <video
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
            src={backgroundVideo}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : backgroundImage ? (
          <img
            src={backgroundImage}
            alt="Body First UK"
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900" />
        )}

        {/* Modern Overlays */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 z-10" />
      </div>

      {/* Content Container */}
      <div className="container relative z-20 px-4 py-8 text-center lg:text-left">
        <div className="max-w-5xl mx-auto lg:mx-0">
          {subtitle && (
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-teal-400/20 border border-teal-400/30 backdrop-blur-md">
              <span className="text-teal-400 font-bold tracking-[0.2em] uppercase text-[10px] sm:text-xs">
                {subtitle}
              </span>
            </div>
          )}

          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.95] tracking-tighter mb-6 animate-fade-in-up">
            {title.split(' ').map((word, i) => (
              <span key={i} className={i === title.split(' ').length - 1 ? 'text-teal-400 block lg:inline' : 'block lg:inline'}>
                {word}{' '}
              </span>
            ))}
          </h1>

          {description && (
            <p className="max-w-2xl text-lg md:text-xl text-teal-50/90 font-light leading-relaxed mb-8 mx-auto lg:mx-0 animate-fade-in-up delay-100">
              {description}
            </p>
          )}

          {/* Action Pills */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10 animate-fade-in-up delay-200">
            {["Advanced Assessment", "Elite Treatment", "Full Recovery", "Ongoing Wellness"].map((label, i) => (
              <div
                key={label}
                className="px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-slate-200 text-xs md:text-sm font-medium hover:bg-white/10 transition-all shadow-sm"
                style={{ animationDelay: `${(i + 3) * 100}ms` }}
              >
                {label}
              </div>
            ))}
          </div>

          {/* Core CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 animate-fade-in-up delay-300">
            {ctaPrimary && (
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-teal-500 text-white rounded-full font-black text-xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(20,184,166,0.4)]"
              >
                <span className="relative z-10">{ctaPrimary}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            )}

            {ctaSecondary && (
              <Link
                to={ctaSecondaryLink}
                className="inline-flex items-center justify-center px-10 py-5 border-2 border-white/30 hover:border-white text-white rounded-full font-bold text-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all font-black"
              >
                {ctaSecondary}
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden md:block">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>
        </div>
      </div>

      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1.05); }
          50% { transform: scale(1.15); }
          100% { transform: scale(1.05); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 30s ease-in-out infinite;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
      `}</style>
    </section>
  );
};

export default Hero;
