import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// Replace these with your EmailJS IDs from https://dashboard.emailjs.com
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
    } catch {
      setError("Failed to send message. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
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
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
          <svg
            className="w-5 h-5 text-red-500 shrink-0 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}

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
            disabled={loading}
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
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
            disabled={loading}
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
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
          disabled={loading}
          className="w-full px-4 py-3 border border-gray-300 rounded-md text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
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
          disabled={loading}
          className="w-full px-4 py-3 border border-gray-300 rounded-md text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
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
          disabled={loading}
          className="w-full px-4 py-3 border border-gray-300 rounded-md text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent resize-none disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder="Tell us about your project or enquiry..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold-500 text-navy-950 font-semibold px-8 py-3.5 rounded-md hover:bg-gold-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <svg
              className="animate-spin h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
