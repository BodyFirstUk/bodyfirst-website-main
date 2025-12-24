import { useParams, Link, Navigate } from 'react-router-dom';
import treatmentCategories from '../data/whatWeTreatData';

const ConditionPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the matching category
  const category = treatmentCategories.find((cat) => cat.slug === slug);

  // If category not found, redirect to overview
  if (!category) {
    return <Navigate to="/what-we-treat" replace />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link
              to="/what-we-treat"
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              What We Treat
            </Link>
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="text-gray-700">{category.title}</span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Quick Navigation */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Other Conditions
              </h3>
              <nav className="space-y-2">
                {treatmentCategories
                  .filter((cat) => cat.slug !== slug)
                  .map((cat) => (
                    <Link
                      key={cat.slug}
                      to={`/what-we-treat/${cat.slug}`}
                      className="block text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md transition-colors"
                    >
                      {cat.title}
                    </Link>
                  ))}
              </nav>

              {/* CTA in Sidebar */}
              <div className="mt-8 bg-blue-50 rounded-lg p-5 border border-blue-100">
                <h4 className="font-bold text-gray-900 mb-2">Ready to Start?</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Book an assessment with our specialists.
                </p>
                <Link
                  to="/book"
                  className="block w-full bg-blue-600 text-white text-center px-4 py-2.5 rounded-md text-sm font-semibold hover:bg-blue-700 transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            {/* Header / Hero */}
            {slug === 'head-jaw-pain' ? (
              <div className="mb-8 relative overflow-hidden rounded-2xl">
                {/* Background Image */}
                <div className="absolute inset-0 -z-10">
                  <img
                    src="/images/Condition We Treat/head_jaw.png"
                    alt="Head & Jaw"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 -z-0 bg-black/60" />

                {/* Hero Content */}
                <div className="relative z-10 px-6 py-10 md:py-14 lg:py-16">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-6xl text-white">{category.icon}</span>
                    <div>
                      <h1 className="text-4xl md:text-5xl font-bold text-white">
                        {category.title}
                      </h1>
                    </div>
                  </div>
                  <p className="text-lg md:text-xl text-gray-100 leading-relaxed max-w-3xl">
                    {category.detailContent.overview}
                  </p>
                </div>
              </div>
            ) : (
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-6xl">{category.icon}</span>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                      {category.title} Pain
                    </h1>
                  </div>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {category.shortDescription}
                </p>
              </div>
            )}

            {/* Overview */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                {category.detailContent.overview}
              </p>
            </section>

            {/* Conditions We Treat Box */}
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Conditions We Treat
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {category.conditions.map((condition, idx) => (
                  <div key={idx} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-800">{condition.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Content Sections */}
            {category.detailContent.sections.map((section, idx) => (
              <section key={idx} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {section.heading}
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {section.content}
                </p>
                {section.bullets && (
                  <ul className="space-y-3">
                    {section.bullets.map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1 text-lg">•</span>
                        <span className="text-gray-700">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {category.detailContent.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50 rounded-lg p-6 border border-gray-200"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Bottom CTA */}
            <section className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Address Your {category.title} Pain?
                </h2>
                <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                  Our expert physiotherapists are ready to help you recover and get back to the activities you love. Book a comprehensive assessment today and take the first step toward pain-free movement.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/book"
                    className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors text-center shadow-lg"
                  >
                    Book an Assessment
                  </Link>
                  <Link
                    to="/what-we-treat"
                    className="inline-block bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-400 transition-colors text-center"
                  >
                    View All Conditions
                  </Link>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ConditionPage;
