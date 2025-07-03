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
      'Our Crew Management division handles the complete lifecycle of maritime personnel – from sourcing and screening to onboard appraisal and career progression.',
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
  { label: 'Hot Works On‑board'},
  { label: 'Supply of Bunkers & Fresh‑water' },
  { label: 'Geo‑physical Surveys' },
  { label: 'Underwater Cutting / Welding' },
  { label: 'Hull Cleaning / Propeller Polishing' },
  { label: 'Rock Blasting & Wreck Removal'},
];

export default function Services() {
  const [openModal, setOpenModal] = useState<number | null>(null);

  const selectedService = services.find((s) => s.id === openModal);

  return (
    <div className="flex flex-col min-h-screen ">
    <main className="min-h-screen bg-sky-100 pb-24 font-sans">
      {/* Hero */}
      <div className="relative w-full h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/port1.jpg')] bg-cover bg-center bg-fixed animate-fade-in" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-white text-center px-4 py-6" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 animate-slide-up">Our Services</h1>
          <p className="text-base md:text-lg max-w-3xl mx-auto animate-fade-in-delay">
            Delivering complete maritime solutions for over two decades.
          </p>
        </div>
      </div>

      {/* Service Cards */}
      <div className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform transform hover:scale-[1.02] hover:shadow-2xl duration-300"
          >
            <div className="relative h-40">
              <Image src={service.imageUrl} alt={service.title} fill className="object-cover transition-opacity duration-300 hover:opacity-90" />
            </div>
            <div className="p-4 bg-sky-900/90 text-white">
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <ul className="list-disc list-inside text-xs sm:text-sm text-sky-100 space-y-1">
                {service.shortDescription.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <button
                onClick={() => setOpenModal(service.id)}
                className="mt-3 text-orange-400 hover:text-orange-300 text-sm underline underline-offset-4 transition-all"
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

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-semibold text-center text-sky-900 mb-6">
              {selectedService.title}
            </h3>

            {/* Image */}
            <div className="relative w-full h-56 md:h-64 lg:h-72 mb-6">
              <Image
                src={selectedService.imageUrl}
                alt={selectedService.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            {/* Description */}
            <p className="text-gray-800 text-sm md:text-base leading-relaxed space-y-4">
              {selectedService.fullDescription.join(' ')}
            </p>
          </div>
        </div>
      )}

      {/* Other Services */}
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-sky-900 mb-5">More of What We Do</h2>
        <ul className="space-y-4">
          {otherServices.map(({ label }, index) => (
            <li
              key={index}
              className="flex items-center space-x-4 transition-all duration-300 hover:bg-sky-200 rounded-lg ml-10 p-2"
            >
              
              <span className="text-base md:text-lg text-gray-800 font-medium">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </main>
    <Footer backgroundImage="/port1.jpg" />
    </div>
  );
}