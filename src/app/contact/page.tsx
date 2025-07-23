'use client';

import Footer from '@/components/Footer';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className='flex flex-col min-h-screen'>
    <main className="min-h-screen bg-sky-100 text-black font-sans pb-10">
      <div className="relative w-full h-[70vh] flex items-center justify-center ">
      <div className="absolute inset-0 bg-[url('/crew5.jpg')] bg-cover bg-bottom bg-fixed" style={{ zIndex: 0 }}></div>

        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 text-white text-center px-6 py-8" data-aos="fade-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Pioneering innovation in marine development and maritime services across Sri Lanka.
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
       

        <div className="grid grid-cols-1 md:grid-cols-2 py-16 mt-15 gap-10">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-2xl shadow-lg space-y-6" data-aos="fade-right">
            <h2 className="text-3xl font-semibold text-blue-900">Get in Touch</h2>
            <p className="text-gray-700">
              We’d love to hear from you. Please fill out the form or reach us through the contact details below.
            </p>

            <div className="space-y-4 text-gray-800">
              <div>
                <h3 className="font-semibold text-orange-500">Address</h3>
                <p>37/33,<br /> Bullers Lane, Colombo 07</p>
              </div>
              <div>
                <h3 className="font-semibold text-orange-500">Email</h3>
                <p>info@devmarinesl.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-orange-500">Phone</h3>
                <p>+94 11 2 676 230</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg" data-aos="fade-left">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-1 text-blue-900">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-1 text-blue-900">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-1 text-blue-900">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-1 text-blue-900">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        {/* CV Upload Section */}
{/* CV Registration Redirect Section */}
<div className="bg-white p-8 rounded-2xl shadow-lg mt-10" data-aos="fade-up">
  <h2 className="text-2xl font-semibold text-blue-900 mb-4">Interested in Joining Us?</h2>
  <p className="text-gray-700 mb-6">
    Instead of uploading a file, please fill out our candidate registration form.
  </p>
  <a
    href="https://candidates.devmarinesl.com/registercandidate"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block w-full text-center bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-medium"
  >
    Go to Candidate Registration
  </a>
</div>


      </div>
    </main>
    <Footer backgroundImage='/port2.jpg' />
    </div>
  );
}
