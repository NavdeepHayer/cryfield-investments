"use client";

import { MapPin, Mail, Building2, Clock } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get in <span className="text-gold-400">Touch</span>
            </h1>
            <p className="text-navy-300 text-lg md:text-xl leading-relaxed">
              We welcome enquiries from landowners, investors, developers and
              partners. Reach out to discuss how we can work together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-navy-900 mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center shrink-0">
                    <Building2 size={20} className="text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-1">
                      Registered Office
                    </h3>
                    <p className="text-navy-500 text-sm leading-relaxed">
                      Cryfield Investments Ltd
                      <br />
                      51 New Cavendish Street
                      <br />
                      London, W1G 9TG
                      <br />
                      United Kingdom
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-1">Email</h3>
                    <a
                      href="mailto:info@cryfieldinvestments.com"
                      className="text-gold-600 hover:text-gold-500 text-sm transition-colors"
                    >
                      info@cryfieldinvestments.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-1">
                      Location
                    </h3>
                    <p className="text-navy-500 text-sm leading-relaxed">
                      Marylebone, Central London
                      <br />
                      Near Oxford Circus &amp; Regent&rsquo;s Park
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-1">
                      Business Hours
                    </h3>
                    <p className="text-navy-500 text-sm leading-relaxed">
                      Monday &ndash; Friday: 9:00 AM &ndash; 6:00 PM
                      <br />
                      Saturday &ndash; Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-navy-50 rounded-lg">
                <p className="text-navy-600 text-sm leading-relaxed">
                  <span className="font-semibold text-navy-800">
                    Company Registration:
                  </span>
                  <br />
                  Company No. 11001318
                  <br />
                  Registered in England and Wales
                  <br />
                  Incorporated 6 October 2017
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-navy-900 mb-8">
                Send Us a Message
              </h2>

              {submitted ? (
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
              ) : (
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
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
