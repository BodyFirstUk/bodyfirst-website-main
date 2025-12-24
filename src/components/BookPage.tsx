import { Link } from 'react-router-dom';

const BookPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Book Your Assessment
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Take the first step toward recovery. Our booking system will be integrated here.
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-12 mb-8">
            <div className="max-w-2xl mx-auto">
              <div className="text-6xl mb-6">📅</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Booking System Placeholder
              </h2>
              <p className="text-gray-600 mb-6">
                This page would integrate with your booking system or calendar software. Common integrations include Calendly, Acuity Scheduling, or custom booking solutions.
              </p>
              <div className="space-y-4 text-left bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">What to expect:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span className="text-gray-700">Choose your preferred physiotherapist</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span className="text-gray-700">Select a convenient date and time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span className="text-gray-700">Complete a brief health questionnaire</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span className="text-gray-700">Receive confirmation and preparation instructions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Link
            to="/what-we-treat"
            className="inline-block bg-gray-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-700 transition-colors"
          >
            ← Back to What We Treat
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
