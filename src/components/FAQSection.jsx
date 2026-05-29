// src/components/FAQSection.jsx
import { useState } from "react";

const faqs = [
  {
    q: "What services does Body First UK offer?",
    a: "Body First UK offers physiotherapy, sports massage, dry needling, shockwave therapy, ultrasound therapy, cupping therapy, lymphatic drainage, and foot scan & gait analysis.",
  },
  {
    q: "Where is Body First UK located?",
    a: "Body First UK is located at 38 High Street, Hampton Hill, Hampton, London, TW12 1PD.",
  },
  {
    q: "Does Body First UK accept health insurance?",
    a: "Yes, Body First UK works with all major private health insurance providers including BUPA, AXA, Aviva, Vitality, Healix, Simply Health, and WPA.",
  },
  {
    q: "How much does physiotherapy cost at Body First UK?",
    a: "Treatment at Body First UK starts from £65. Visit the pricing page for full details or contact the clinic directly.",
  },
  {
    q: "What are Body First UK's opening hours?",
    a: "Body First UK is open Monday to Friday 9am to 8pm and Sunday 11am to 8pm. The clinic is closed on Saturdays.",
  },
  {
    q: "Are the physiotherapists at Body First UK qualified?",
    a: "Yes, all physiotherapists at Body First UK are HCPC registered and members of the Chartered Society of Physiotherapy (CSP). The lead physiotherapist holds a BSc in Physiotherapy, MSc in Advanced Physiotherapy, and MPhil in Shockwave Therapy.",
  },
];

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded-sm"
      >
        <span className="text-base font-semibold text-gray-900 sm:text-lg">
          {q}
        </span>
        <svg
          className={'h-5 w-5 flex-shrink-0 text-teal-600 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }'}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={'grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }'}
      >
        <div className="overflow-hidden">
          <p className="pb-5 pr-9 text-sm leading-relaxed text-gray-600 sm:text-base">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm text-gray-600 sm:text-base">
            Everything you need to know about our clinic and treatments.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-100 bg-white px-5 shadow-sm sm:px-8">
          {faqs.map((item, i) => (
            <FAQItem
              key={i}
              q={item.q}
              a={item.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}