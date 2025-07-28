'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "@/components/Footer";
import Image from 'next/image';


export default function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
    <main className="min-h-screen bg-sky-100 font-sans text-black">
      {/* Hero Section */}
      <div className="relative w-full  h-[70vh] flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('/ship3.jpg')] bg-cover bg-center bg-fixed " style={{ zIndex: 0 }}></div>
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 text-white text-center px-6 py-8" data-aos="fade-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Pioneering innovation in marine development and maritime services across Sri Lanka.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto py-16 px-6 space-y-16">
        {/* Our Story */}
        <div className="bg-white rounded-2xl shadow-lg p-8" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Story</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Founded with the vision to redefine Sri Lanka’s maritime sector, DevMarine emerged as a
            trailblazer in providing sustainable, tech-driven marine services. From our humble
            beginnings to becoming a trusted name, we’ve always believed in progress powered by purpose.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white rounded-2xl shadow-lg p-8" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We aim to be the leading provider of maritime solutions through unwavering dedication to
            quality, environmental responsibility, and innovation. We believe in empowering coastal
            economies and protecting marine ecosystems while delivering client-focused results.
          </p>
        </div>

        {/* Message from Chief Officer */}
        {/* <div className="bg-white rounded-2xl shadow-lg p-8" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Message from the Chief Officer</h2>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src="/capt.png"
              alt="Chief Officer"
              className="w-40 h-40 object-cover rounded-full shadow-lg"
            />
            <p className="text-lg text-gray-700 leading-relaxed">
              “ At Dev Marine Agencies, we take immense pride in being a trusted partner in 
                the global maritime industry. Our unwavering commitment to excellence, 
                safety, and innovation has been the cornerstone of our success for over two 
                decades.
                With the support of Zindhu Holdings and our dedicated team, we continue to 
                deliver world-class seafarers and tailored manning solutions, ensuring your 
                vessels are staffed with highly trained, reliable, and professional crews.
                As we navigate the future, our focus remains steadfast on exceeding client 
                expectations while empowering seafarers to excel in a dynamic industry. 
                Thank you for placing your trust in Dev Marine Agencies. Together, we strive 
                for maritime excellence”
              <br />
              <span className="block mt-4 font-semibold text-orange-500">– Capt. Srimal Abeyasuriya, 
              Chief Operating Officer, 
              Dev Marine Agencies (Pvt) Ltd.
              </span>
            </p>
          </div>
        </div> */}

        {/* Our Team */}
        <div className="bg-white rounded-2xl shadow-lg p-8" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: 'Capt. Srimal Abeyasuriya', title: 'Chief Operating Officer', img: '/capt.png' },
              { name: 'Ajith Rathnayake', title: 'Crew Manager', img: '/ajith.jpeg' },
              { name: 'Shyamal Hennayake', title: 'Operations Manager', img: '/shyamal.png' },
              { name: 'Lasantha Nawarathne', title: 'Training Manager', img: '/lasantha.png' },
              { name: 'Thamari Subasinghe', title: 'Manning Assistant', img: '/thamari.png' },
              
            ].map((member, index) => (
              <div
                key={index}
                className="bg-blue-50 rounded-xl p-6 text-center shadow-lg"
                data-aos="zoom-in"
              >
                <Image
                  src={member.img}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="text-lg font-semibold text-blue-800">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SMTI – Training Partner */}
        <div className="bg-white rounded-2xl shadow-2xl p-8" data-aos="fade-up">
  <h2 className="text-3xl font-bold text-blue-900 mb-6">
    SMTI – Official Training Partner
  </h2>

  <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
    {/* Image on the right with animation */}
    <Image
      src="/4.jpg" // Update path as needed
      alt="SMTI Training Center"
      width={600}
      height={400}
      data-aos="zoom-in-left"
      className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
    />

    {/* Text on the left */}
    <div className="text-lg text-gray-700 leading-relaxed space-y-4" data-aos="fade-right">
      <p>
        Dedicating to prepare skilled maritime professionals through high-quality education and training, 
        we tie up with <strong>SMTI (Southern Maritime Training Institute)</strong>, our own Maritime 
        Training Center. SMTI is proudly recognized as Sri Lanka’s most preferred training institute 
        for seafarers, dedicated to preparing skilled maritime professionals through high-quality education 
        and training.
      </p>
      <p>
        Among SMTI’s advanced facilities, <strong>Sri Lanka’s First Full Mission 360-Degree Navigation Simulator</strong> 
        stands out as a critical resource, providing cadets and crew with immersive and realistic training 
        for navigation and ship handling. This ensures our seafarers are exceptionally well-prepared to meet 
        the complexities of modern maritime operations.
      </p>
    </div>
  </div>
</div>
{/* Our Associate Companies */}
<div className="bg-white rounded-2xl shadow-2xl p-8" data-aos="fade-up">
  <h2 className="text-3xl font-bold text-blue-900 mb-6">
    Our Associate Companies
  </h2>
  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
    We proudly collaborate with globally renowned organizations to deliver unparalleled maritime services:
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Company 1 */}
    <div className="flex items-center gap-4" data-aos="fade-right">
      <Image src="/wallemg.jpeg" alt="Wallem Ship Management" width={96} height={96} className="w-24 h-auto" />
      <p className="font-semibold text-blue-900">Wallem Ship Management</p>
    </div>
    {/* Company 2 */}
    <div className="flex items-center gap-4" data-aos="fade-left">
      <Image src="/marlow.jpeg" alt="Marlow Navigation" width={96} height={96} className="w-24 h-auto" />
      <p className="font-semibold text-blue-900">Marlow Navigation</p>
    </div>
    
    {/* Company 4 */}
    <div className="flex items-center gap-4" data-aos="fade-left">
      <Image src="/rhl.png" alt="RHL Hamburger Lloyd" width={96} height={96} className="w-24 h-auto" />
      <p className="font-semibold text-blue-900">RHL Hamburger Lloyd</p>
    </div>
    {/* Company 5 */}
    <div className="flex items-center gap-4" data-aos="fade-right">
      <Image src="/xt.png" alt="XT ship Management" width={96} height={96} className="w-24 h-auto" />
      <p className="font-semibold text-blue-900">XT ship Management</p>
    </div>
  </div>
</div>


      </section>
    </main>
    <Footer backgroundImage="/ship3.jpg" />
    </div>
    
  );
}
