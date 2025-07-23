"use client";

import Footer from "@/components/Footer";
import React, { useState } from "react";

const jobs = [
  {
    title: "MASTER",
    location: "Odesa, Odessa Oblast, Ukraine",
    link: "#",
    category: "Deck",
  },
  {
    title: "CHIEF OFFICER",
    location: "Odesa, Odessa Oblast, Ukraine",
    link: "#",
    category: "Deck",
  },
  {
    title: "SECOND OFFICER",
    location: "Odesa, Odessa Oblast, Ukraine",
    link: "#",
    category: "Deck",
  },
  {
    title: "THIRD OFFICER",
    location: "Odesa, Odessa Oblast, Ukraine",
    link: "#",
    category: "Deck",
  },
  {
    title: "FOURTH OFFICER",
    location: "Odesa, Odessa Oblast, Ukraine",
    link: "#",
    category: "Deck",
  },
  {
    title: "JUNIOR OFFICER",
    location: "Odesa, Odessa Oblast, Ukraine",
    link: "#",
    category: "Deck",
  },
  {
    title: "ADMIN OFFICER",
    location: "Odesa, Odessa Oblast, Ukraine",
    link: "#",
    category: "Deck",
  },
  {
    title: "DECK CADET",
    location: "Odesa, Odessa Oblast, Ukraine",
    link: "#",
    category: "Deck",
  },
  {
    title: "BOSUN",
    location: "Odesa, Odessa Oblast, Ukraine",
    link: "#",
    category: "Deck",
  },
  {
    title: "ABLE SEAMAN",
    location: "Odesa, Odessa Oblast, Ukraine",
    link: "#",
    category: "Deck",
  },
  {
    title: "ORDINARY SEAMAN",
    location: "Odesa, Odessa Oblast, Ukraine",
    link: "#",
    category: "Deck",
  },
  {
    title: "DECK HAND",
    location: "Odesa, Odessa Oblast, Ukraine",
    link: "#",
    category: "Deck",
  },
  {
    title: "CHIEF COOK",
    location: "Odesa, Odessa Oblast, Ukraine",
    link: "#",
    category: "Deck",
  },
  {
    title: "MESSMAN / STEWARD",
    location: "Odesa, Odessa Oblast, Ukraine",
    link: "#",
    category: "Deck",
  },
  {
    title: "GENERAL PURPOSE CREW",
    location: "Odesa, Odessa Oblast, Ukraine",
    link: "#",
    category: "Deck",
  },
  {
    title: "PUMP MAN",
    location: "Odesa, Odessa Oblast, Ukraine",
    link: "#",
    category: "Deck",
  },
  {
    title: "CHIEF ENGINEER",
    location: "Szczecin, Poland",
    link: "#",
    category: "Engine",
  },
  {
    title: "SECOND ENGINEER",
    location: "Szczecin, Poland",
    link: "#",
    category: "Engine",
  },
  {
    title: "ELECTRO OFFICER",
    location: "Szczecin, Poland",
    link: "#",
    category: "Engine",
  },
  {
    title: "THIRD ENGINEER",
    location: "Szczecin, Poland",
    link: "#",
    category: "Engine",
  },
  {
    title: "FOURTH ENGINEER",
    location: "Szczecin, Poland",
    link: "#",
    category: "Engine",
  },
  {
    title: "ENGINE CADET",
    location: "Szczecin, Poland",
    link: "#",
    category: "Engine",
  },
  {
    title: "FITTER",
    location: "Szczecin, Poland",
    link: "#",
    category: "Engine",
  },
  {
    title: "MOTORMAN / OILER",
    location: "Szczecin, Poland",
    link: "#",
    category: "Engine",
  },
  {
    title: "ENGINE HAND",
    location: "Szczecin, Poland",
    link: "#",
    category: "Engine",
  },
  {
    title: "ELECTRO TECHNICAL RATING",
    location: "Szczecin, Poland",
    link: "#",
    category: "Engine",
  },
  {
    title: "SC/COASTAL - MASTER",
    location: "Szczecin, Poland",
    link: "#",
    category: "Small Craft/Coastal",
  },
  {
    title: "SC/COASTAL - ENGINEER",
    location: "Szczecin, Poland",
    link: "#",
    category: "Small Craft/Coastal",
  },
];

export default function CareersPage() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Deck", "Engine", "Small Craft/Coastal"];

  // Filter jobs by keyword, location, and category
  const filteredJobs = jobs.filter(
    (job) =>
      (selectedCategory === "All" || job.category === selectedCategory) &&
      job.title.toLowerCase().includes(keyword.toLowerCase()) &&
      job.location.toLowerCase().includes(location.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col ">
      <main className="min-h-screen bg-white text-black font-sans pb-16 items-center">
        <div className="relative w-full h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/careers3.jpg')] bg-cover bg-bottom bg-fixed z-0"></div>
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 text-white text-center px-6 py-8" data-aos="fade-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Careers</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Want to join our team? Explore our current job openings and apply today!
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col items-center">
      <h1 className="text-5xl font-bold text-center mb-2 mt-8">Our Openings</h1>
      <p className="text-gray-500 text-center mb-8 text-lg">{filteredJobs.length} Open Positions</p>
      <div className="flex flex-col md:flex-row md:items-center gap-4 w-full max-w-2xl mb-8 justify-center">
        <form className="flex flex-col md:flex-row gap-4 flex-1" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Search by keyword"
            className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <input
            type="text"
            placeholder="Select location"
            className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <select
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none text-gray-700"
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <button
            type="submit"
            className="bg-[#295080] text-white px-8 py-2 rounded font-semibold hover:bg-[#1d3a5a] transition"
          >
            Search
          </button>
        </form>
      </div>
      <div className="w-full max-w-2xl">
        {filteredJobs.map((job, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200 py-4"
          >
            <div>
              <a
                href={job.link}
                className="text-lg font-semibold text-[#295080] hover:underline"
              >
                {job.title}
              </a>
              {job.location && (
                <div className="flex items-center text-gray-500 text-sm mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 mr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  {job.location}
                </div>
              )}
            </div>
            <button
              className="mt-2 md:mt-0 bg-[#295080] text-white px-6 py-2 rounded hover:bg-[#1d3a5a] font-medium transition"
            >
              Apply
            </button>
          </div>
        ))}
      </div>
      </div>
      {/* Submit your application section */}
      <section className="bg-gray-50 w-full py-16 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl md:text-3xl font-bold mb-4">Submit your application</h2>
        
        <button className="bg-[#295080] text-white px-8 py-3 rounded font-semibold text-lg hover:bg-[#1d3a5a] transition">
          Apply now
        </button>
      </section>
      </main>
      <Footer backgroundImage='/careers3.jpg' />
    </div>
  );
}
