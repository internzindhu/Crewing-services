'use client';

import { useState } from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';

const services = [
  {
    id: 1,
    title: 'Crew Management & Manning Services',
    imageUrl: '/ship.jpg',
    shortDescription: [
      'Crew recruitment, training & performance',
      'Certified crew for diverse vessel types',
    ],
    fullDescription: [
      'Our Crew Management division handles the complete lifecycle of maritime personnel – from sourcing and screening to onboard appraisal and career progression.',
      'We maintain a global pool of certified seafarers for tankers, bulk carriers and container vessels, ensuring every ship sails with a competent, safety‑minded crew.',
      'Extensive in‑house and external training keeps officers & engineers up to date on energy‑efficient operations, pollution prevention and the latest regulatory compliance.'
    ],
  },
  {
    id: 2,
    title: 'Port Agency & Ship Husbandry',
    imageUrl: '/ship2.jpg',
    shortDescription: [
      'Ports: Colombo, Galle, Hambantota, Trincomalee & OPL',
      'Crew change, medical evacuation, CTM, bonded stores',
    ],
    fullDescription: [
      'Operating 24/7 in every major Sri Lankan harbour, our Port Agency team ensures quick port calls, smooth cargo operations and real‑time updates to owners & charterers.',
      'We arrange crew changes, Cash to Master, bonded stores and waste disposal while coordinating with terminals, customs and immigration for seamless turnarounds.',
      'Our husbandry desk handles cruise ships, offshore supply boats and lay‑by vessels, delivering provisions, spares and technical assistance at berth, anchorage or OPL.'
    ],
  },
  {
    id: 3,
    title: 'Technical & Support Services',
    imageUrl: '/ship3.jpg',
    shortDescription: [
      'Electronic repairs (VHF, navigation, antennas)',
      'On‑board hot works & inspection surveyors',
    ],
    fullDescription: [
      'From gyro overhauls to VSAT alignments, our riding squads tackle urgent electronic & mechanical issues without delaying your schedule.',
      'Class‑approved surveyors, stevedores, geo‑physical specialists and bunker coordinators are on standby, supported by a strong vendor network for parts & logistics.',
      'We also arrange freshwater supply, hot‑work repairs and riding maintenance teams both in‑port and during coastal passages.'
    ],
  },
  {
    id: 4,
    title: 'Underwater & Marine Engineering',
    imageUrl: '/ship4.jpg',
    shortDescription: [
      'In‑water surveys, hull cleaning & welding',
      'Propeller polishing & underwater repairs',
    ],
    fullDescription: [
      'Our dive technicians carry out Class‑approved in‑water surveys (NK, LR) along with hull cleaning, propeller polishing and blanking to restore vessel efficiency.',
      'We undertake underwater cutting, welding and cofferdam installation, plus rock‑removal and wreck‑clearance projects for port & pipeline developments.',
      'Specialist teams handle subsea cable / pipe‑lay support, slope protection and salvage engineering with comprehensive safety management.'
    ],
  },
];

const otherServices = [
  { label: 'Ship Chandling & Offshore Supplies' },
  { label: 'Stevedore Services' },
  { label: 'Disposal of Sludge, Oily Water & Garbage' },
  { label: 'Handling Cruise Ships / Supply for Cruise Ships' },
  { label: 'Cash to Master (CTM)' },
  { label: 'Medical Evacuation / Repatriation' },
  { label: 'Supply of Medicines & Bonded Stores' },
  { label: 'On‑board Electronics Repair' },
  { label: 'Hot Works On‑board' },
  { label: 'Supply of Bunkers & Fresh‑water' },
  { label: 'Geo‑physical Surveys' },
  { label: 'Underwater Cutting / Welding' },
  { label: 'Hull Cleaning / Propeller Polishing' },
  { label: 'Rock Blasting & Wreck Removal' },
];

export default function Services() {
  const [openModal, setOpenModal] = useState<number | null>(null);
  const selectedService = services.find((s) => s.id === openModal);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="min-h-screen bg-sky-100 pb-24 font-sans">
        {/* Hero */}
        <div className="relative w-full h-[60vh] flex items-center justify-center">
          <div className="absolute inset-0 bg-[url('/port1.jpg')] bg-cover bg-center bg-fixed animate-fade-in" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 text-white text-center px-4 py-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 animate-slide-up">
              Our Services
            </h1>
            <p className="text-base md:text-lg max-w-3xl mx-auto animate-fade-in-delay">
              Delivering complete maritime solutions for over two decades.
            </p>
          </div>
        </div>

        {/* Service Cards */}
        <div className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="relative h-48">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  unoptimized
                  fill
                  className="object-cover group-hover:opacity-90 transition-opacity duration-300"
                />
                {/* <div className="absolute top-2 left-2 bg-sky-900 text-white text-xs px-3  rounded-full shadow-md">
                  Maritime Service
                </div> */}
              </div>
              <div className="p-6 bg-sky-50 flex flex-col justify-between ">
                <h2 className="text-lg md:text-xl font-semibold text-sky-900 mb-2">
                  {service.title}
                </h2>
                <ul className="list-disc list-inside text-sm text-sky-800 space-y-1 ">
                  {service.shortDescription.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                <button
                  onClick={() => setOpenModal(service.id)}
                  className="text-orange-500 hover:text-orange-400 text-sm underline underline-offset-4 font-medium self-start"
                >
                  Read more →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {openModal !== null && selectedService && (
          <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md flex items-center justify-center p-4 md:p-8">
            <div className="bg-white rounded-xl p-8 md:p-10 max-w-3xl w-full relative shadow-2xl animate-fade-in">
              <button
                onClick={() => setOpenModal(null)}
                className="absolute top-3 right-4 text-black text-3xl leading-none hover:text-red-500 transition-colors"
                aria-label="Close modal"
              >
                &times;
              </button>
              <h3 className="text-2xl md:text-3xl font-semibold text-center text-sky-900 mb-6">
                {selectedService.title}
              </h3>
              <div className="relative w-full h-56 md:h-64 lg:h-72 mb-6">
                <Image
                  src={selectedService.imageUrl}
                  alt={selectedService.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="text-gray-800 text-sm md:text-base leading-relaxed space-y-4">
                {selectedService.fullDescription.map((paragraph, idx) => (
                  <p key={idx} className="mb-3">{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* More of What We Do – Split View */}
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-bold text-sky-900 mb-8 text-center">More of What We Do</h2>

          {/* Icon-based Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {otherServices.slice(0, 6).map(({ label }, index) => (
              <div key={index} className="bg-white shadow-md rounded-xl p-5 flex items-start gap-4 hover:shadow-xl transition">
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-sky-200 flex items-center justify-center">
                  <Image src="/icon-ship.png" alt="icon" width={30} height={30} />
                </div>
                <p className="text-gray-800 text-base font-medium">{label}</p>
              </div>
            ))}
          </div>

          {/* Bullet List Section */}
          <div className="bg-sky-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-sky-800 mb-4">Additional Services</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-disc list-inside text-gray-700 ml-4">
              {otherServices.slice(6).map(({ label }, index) => (
                <li key={index} className="text-sm md:text-base">{label}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Footer backgroundImage="/port1.jpg" />
    </div>
  );
}
