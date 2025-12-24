import { Link } from 'react-router-dom';
import treatmentCategories from '../data/whatWeTreatData';

const WhatWeTreatOverview = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Conditions We Treat
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Our experienced physiotherapists provide evidence-based treatment for a wide range of musculoskeletal conditions. From acute injuries to chronic pain, we're here to help you move better and feel better.
          </p>
          <Link
            to="/book"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Book Your Assessment
          </Link>
        </div>
      </section>

      {/* Treatment Categories Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatmentCategories.map((category) => (
              <Link
                key={category.slug}
                to={`/what-we-treat/${category.slug}`}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="text-5xl mb-4">{category.icon}</div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {category.title}
                </h2>

                {/* Short Description */}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {category.shortDescription}
                </p>

                {/* Conditions List */}
                <ul className="space-y-2">
                  {category.conditions.slice(0, 5).map((condition, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span>{condition.name}</span>
                    </li>
                  ))}
                  {category.conditions.length > 5 && (
                    <li className="text-sm text-gray-500 italic">
                      + {category.conditions.length - 5} more conditions
                    </li>
                  )}
                </ul>

                {/* Learn More Link */}
                <div className="mt-6 text-blue-600 font-semibold text-sm flex items-center group-hover:gap-2 transition-all">
                  Learn more
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
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
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Book a comprehensive assessment with one of our expert physiotherapists. We'll identify the root cause of your pain and create a personalized treatment plan to get you back to doing what you love.
          </p>
          <Link
            to="/book"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Book Your Assessment
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WhatWeTreatOverview;
