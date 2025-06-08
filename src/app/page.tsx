'use client'
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="min-h-screen font-sans bg-blue-950 text-white">
      {/* Hero Image Section */}
      <div
        className="w-full h-[90vh] bg-[url('/ship9.jpg')] bg-cover bg-center bg-fixed relative"
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center text-center px-6">

          <div data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow mb-6">
              TO BECOME A LEADING MARITIME SERVICE PROVIDER IN SRI LANKA
            </h1>
            <Link
              href="/services"
              className="inline-block mt-4 px-8 py-3 bg-orange-500 text-white text-lg font-semibold rounded-xl hover:bg-orange-600 transition duration-300"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="max-w-6xl mx-auto py-16 px-6" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-4 text-orange-400">Welcome to Zindhu Crewing Services</h2>
        <p className="text-lg text-gray-300 mb-10 leading-relaxed">
          Your trusted partner in marine development and innovation. We specialize in maritime manpower, vessel services, and offshore support solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white/10 backdrop-blur-sm text-white rounded-lg shadow-lg" data-aos="zoom-in-up">
            <h3 className="text-2xl font-bold mb-2">Our Services</h3>
            <p>Explore our wide range of marine solutions including crewing, training, and vessel management.</p>
          </div>
          <div className="p-6 bg-white/10 backdrop-blur-sm text-white rounded-lg shadow-lg" data-aos="zoom-in-up" data-aos-delay="200">
            <h3 className="text-2xl font-bold mb-2">Latest News</h3>
            <p>Stay updated with our latest maritime projects and innovations in the field.</p>
            <Link href="/news" className="text-orange-400 hover:underline mt-2 inline-block">Read more →</Link>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-black/40 backdrop-blur-sm py-16 px-6 text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-orange-400 mb-6">Why Choose Us?</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          At Zindhu Crewing Services, we prioritize quality, safety, and efficiency. With decades of experience and a professional team, we deliver unmatched service to our clients.
        </p>
      </div>

      {/* Testimonials */}
      <div className="bg-black/40 backdrop-blur-sm py-16 px-6" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-orange-400 text-center mb-10">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm text-white p-6 rounded-xl shadow" data-aos="fade-right">
            <p>“Professional team with excellent service. Highly recommended for any maritime support.”</p>
            <span className="block mt-4 font-semibold">– Capt. Dias</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm text-white p-6 rounded-xl shadow" data-aos="fade-left" data-aos-delay="200">
            <p>“Reliable, responsive, and efficient. Zindhu Crewing helped us fill urgent crew positions seamlessly.”</p>
            <span className="block mt-4 font-semibold">– Marine Logistics Ltd.</span>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-orange-500/90 backdrop-blur-sm py-12 px-6 text-center" data-aos="zoom-in">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Work With Us?</h2>
        <p className="text-lg text-white mb-6">Join hands with Sri Lanka’s top maritime service provider today.</p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 bg-white text-orange-600 font-bold rounded-xl hover:bg-orange-100 transition duration-300"
        >
          Contact Us
        </Link>
      </div>
    </main>
  );
}
