import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Prefer a configured endpoint, otherwise use FormSubmit (client-side) to send directly to info@bodyfirst.uk
    // FormSubmit example: https://formsubmit.co
    const configured = (import.meta as any).env?.VITE_CONTACT_FORM_ENDPOINT;
    const endpoint = configured || 'https://formsubmit.co/ajax/info@bodyfirst.uk';

    

    const finishSuccess = () => {
      setSubmitted(true);
      setLoading(false);
      setErrorMessage(null);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    };

    // Use FormSubmit-style POST with FormData for best cross-client compatibility
    setLoading(true);
    setErrorMessage(null);

    try {
      // If using FormSubmit (endpoint contains formsubmit.co), send FormData, otherwise send JSON
      if (endpoint.includes('formsubmit.co')) {
        const fd = new FormData();
        // recipient can be included but the endpoint is already specific to the recipient
        fd.append('name', formData.name);
        fd.append('email', formData.email);
        fd.append('phone', formData.phone);
        fd.append('message', formData.message);
        fd.append('_replyto', formData.email);
        fd.append('_subject', `Website enquiry from ${formData.name || 'Website visitor'}`);
        fd.append('_captcha', 'false');
        fd.append('_template', 'table');
        fd.append('_format', 'plain');

        const res = await fetch(endpoint, {
          method: 'POST',
          body: fd,
          headers: { Accept: 'application/json' },
        });

        setLoading(false);
        if (res.ok) {
          // Treat any HTTP 2xx response as a success for FormSubmit.
          // FormSubmit may return a message payload rather than a `success: true` flag,
          // so prefer the HTTP status as the primary indicator.
          finishSuccess();
        } else {
          let msg = `Server returned ${res.status}`;
          try {
            const body = await res.json();
            if (body && (body.error || body.message)) msg = body.error || body.message;
          } catch (e) {}
          setErrorMessage(msg);
        }
      } else {
        // Generic JSON POST to configured endpoint
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
          }),
        });

        setLoading(false);
        if (res.ok) {
          finishSuccess();
        } else {
          let msg = `Server returned ${res.status}`;
          try {
            const body = await res.json();
            if (body && body.error) msg = body.error;
          } catch (e) {}
          setErrorMessage(msg);
        }
      }
    } catch (err: any) {
      console.error('Contact send error', err);
      setLoading(false);
      setErrorMessage(err?.message || 'Network error');
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Ask an Expert</h3>

      {submitted && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 font-medium">✓ Thank you! We'll get back to you within 24 hours.</p>
        </div>
      )}
      {errorMessage && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 font-medium">Error sending message: {errorMessage}</p>
          <p className="text-sm text-red-700 mt-2">You can also send directly using your email client:</p>
          <div className="mt-3">
            <button
              type="button"
              onClick={() => {
                const to = 'info@bodyfirst.uk';
                const subject = encodeURIComponent(`Website enquiry from ${formData.name || 'Website visitor'}`);
                const bodyLines = [
                  `Name: ${formData.name}`,
                  `Email: ${formData.email}`,
                  `Phone: ${formData.phone}`,
                  '',
                  `Message:\n${formData.message}`,
                ];
                const body = encodeURIComponent(bodyLines.join('\n'));
                const mailto = `mailto:${to}?subject=${subject}&body=${body}`;
                window.location.href = mailto;
              }}
              className="inline-flex items-center justify-center bg-white border border-red-300 text-red-700 px-4 py-2 rounded-lg"
            >
              Send with my email app
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
          <input id="name" name="name" value={formData.name} onChange={handleChange} required  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition" />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
          <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition" />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition" />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message *</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition" />
        </div>

        <button
          type="submit"
          className="w-full inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          {loading ? <span>Sending…</span> : 'Send Message'}
        </button>
      </form>

    </div>
  );
};

export default ContactForm;
