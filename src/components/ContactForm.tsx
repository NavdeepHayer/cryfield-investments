import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-green-800 mb-2">
          Message Sent
        </h3>
        <p className="text-green-700 text-sm">
          Thank you for your enquiry. We will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-navy-700 mb-2"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
            placeholder="John"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-navy-700 mb-2"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
            placeholder="Smith"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-navy-700 mb-2"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-navy-700 mb-2"
        >
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          className="w-full px-4 py-3 border border-gray-300 rounded-md text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
        >
          <option>General Enquiry</option>
          <option>Investment Opportunity</option>
          <option>Land Acquisition</option>
          <option>Development Partnership</option>
          <option>Healthcare Investment</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-navy-700 mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent resize-none"
          placeholder="Tell us about your project or enquiry..."
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold-500 text-navy-950 font-semibold px-8 py-3.5 rounded-md hover:bg-gold-400 transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}
