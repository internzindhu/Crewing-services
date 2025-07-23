'use client';

import {Inter} from 'next/font/google';
import Link from "next/link";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from '@/components/Footer';


const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Customize as needed
  variable: "--font-inter", // Optional for CSS variable usage
});

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/ship.jpg",
      heading: "NAVIGATING EXCELENCE, EMPOWERING SEAFARERS",
    },
    {
      image: "/ship9.jpg",
      heading: "EMPOWERING MARITIME EXCELLENCE THROUGH DEDICATION AND EXPERTISE",
    },
    {
      image: "/ship3.jpg",
      heading: "CONNECTING GLOBAL FLEETS WITH LOCAL TALENT",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

 

  return (
    <div className="flex flex-col min-h-screen">
    <main className={`min-h-screen ${inter.className} bg-sky-100  text-black`}>
      
      {/* Hero Carousel */}
      <div className="w-full h-[90vh] relative overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-600 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            } bg-cover bg-center`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/10 backdrop-blur-sm flex items-center justify-center text-center px-6">
              <div data-aos="fade-up">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow mb-6 transition-all duration-700">
                  {slide.heading}
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
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl font-bold z-20"
        >
          ‹
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl font-bold z-20"
        >
          ›
        </button>
      </div>

      {/* Welcome Section */}
      <div className="max-w-6xl mx-auto py-16 px-6" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-4 text-amber-600 text-center">
          Welcome to Zindhu Crewing Services
        </h2>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
        With a legacy of over two decades in maritime excellence, Zindhu Crewing Services (formerly Dev Marine Agencies) stands as a trusted name in global ship manning and crewing solutions. Backed by a dynamic pool of over 3,000 skilled seafarers and a strong commitment to quality, we ensure vessels are staffed with experienced professionals who uphold the highest standards of safety and operational efficiency at sea.
        </p>

        {/* Our Services Section */}
<div className="" data-aos="fade-up">
  <h2 className="text-4xl font-bold  text-center  mb-4">Our Services</h2>
  <p className="text-lg text-gray-700 mb-10 leading-relaxed text-center max-w-3xl mx-auto">
    Explore our wide range of marine solutions including crewing, training, and vessel management.
  </p>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
    {[
      {
        id: 1,
        imageUrl: "/crew1.jpg",
        title: "Crew Management",
        excerpt: "Experienced seafarers to meet your vessel's exact requirements."
      },
      {
        id: 2,
        imageUrl: "/crew2.jpg",
        title: "Maritime Training",
        excerpt: "Comprehensive programs to prepare crews for global standards."
      },
      {
        id: 3,
        imageUrl: "/ship.jpg",
        title: "Vessel Management",
        excerpt: "Reliable and compliant management for a wide range of fleets."
      },
      {
        id: 4,
        imageUrl: "/ship2.jpg",
        title: "Offshore Support",
        excerpt: "Trusted offshore staffing and logistical support services."
      },
      {
        id: 5,
        imageUrl: "/ship3.jpg",
        title: "Consulting Services",
        excerpt: "Strategic maritime consulting for efficient operations."
      },
      {
        id: 6,
        imageUrl: "/ship6.jpg",
        title: "Ship Repair & Maintenance",
        excerpt: "Quick turnaround maintenance solutions for vessels at port."
      },
    ].map((service) => (
      <article
        key={service.id}
        className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        data-aos="zoom-in-up"
      >
        <div className="relative h-56">
          <img
            src={service.imageUrl}
            alt={service.title}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6 bg-sky-900/90 text-white">
          <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
          <p className="text-sky-100">{service.excerpt}</p>
        </div>
      </article>
    ))}
  </div>
</div>

      </div>

      {/* Why Choose Us */}

      <div className="bg-white py-16 px-6" data-aos="fade-up">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
    {/* Images */}
    <div className="flex flex-col gap-4 w-full md:w-1/2">
      <img
        src="/crew2.jpg"
        alt="Crew at work"
        className="rounded-xl shadow-lg w-full h-64 object-cover"
      />
      {/* <img
        src="/crew2.jpg"
        alt="Ship operations"
        className="rounded-xl shadow-lg w-full h-64 object-cover"
      /> */}
    </div>

    {/* Text */}
    <div className="w-full md:w-1/2 text-right">
      <h2 className="text-4xl font-bold text-amber-500 mb-6">Why Choose Us?</h2>
      <p className="text-lg text-gray-700">
        At Zindhu Crewing Services, we prioritize quality, safety, and efficiency.
        With decades of experience and a professional team, we deliver unmatched
        service to our clients. We ensure reliable crew management and
        vessel operations tailored to your needs.
      </p>
    </div>
  </div>
</div>

      {/* Testimonials */}
      <div className="bg-sky-100 py-16 px-6" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div
            className="bg-gray-100 text-black p-6 rounded-xl shadow"
            data-aos="fade-right"
          >
            <p>
              “Professional team with excellent service. Highly recommended for
              any maritime support.”
            </p>
            <span className="block mt-4 font-semibold">– Capt. Dias</span>
          </div>
          <div
            className="bg-gray-100 text-black p-6 rounded-xl shadow"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <p>
              “Reliable, responsive, and efficient. Zindhu Crewing helped us
              fill urgent crew positions seamlessly.”
            </p>
            <span className="block mt-4 font-semibold">
              – Marine Logistics Ltd.
            </span>
          </div>
        </div>
      </div>

      {/* Globe */}
      {/* Image Carousel */}
{/* Our Associate Companies */}
<div className="bg-white py-12 px-6 mb-10" data-aos="fade-up">
  <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
    Our Associate Companies
  </h2>
  <p className="text-lg text-gray-700 text-center mb-10 max-w-2xl mx-auto">
    We proudly collaborate with globally renowned organizations to deliver unparalleled maritime services:
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
    {[
      { src: "/wallemg.jpeg", name: "Wallem Ship Management" },
      { src: "/marlow.jpeg", name: "Marlow Navigation" },
      { src: "/rhl.jpg", name: "RHL Hamburger Lloyd" },
      { src: "/xt.jpg", name: "XT Ship Management" },
    ].map((company, index) => (
      <div key={index} className="flex flex-col items-center" data-aos="zoom-in">
        <img src={company.src} alt={company.name} className="w-24 h-auto mb-4" />
        <p className="font-semibold text-blue-900 text-center">{company.name}</p>
      </div>
    ))}
  </div>
</div>



      {/* Call to Action */}
      <div className="bg-gray-100 py-12 px-6 text-center" data-aos="zoom-in">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Work With Us?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Join hands with Sri Lanka’s top maritime service provider today.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 bg-green-500 text-white font-bold rounded-xl hover:bg-gray-800 transition duration-300"
        >
          Contact Us
        </Link>
      </div>
    </main>
    <Footer backgroundImage="/ship.jpg" />
    </div>
  );
}
