"use client";

import Footer from "@/components/Footer";
import React, { useState, useEffect } from "react";

type Job = {
  title: string;
  category: string;
  fleet: string;
  minAge: string;
  maxAge: string;
  usVisaRequired: boolean;
  requirements: string[];
  link?: string;
};

const hardcodedJobs = [
  {
    title: "MASTER",
    link: "#",
    category: "Deck",
    fleet: "Container",
    minAge: "35",
    maxAge: "55",
    usVisaRequired: false,
    requirements: [
      "Container experience",
      "Crew mix experience, good English language knowledge",
      "Stable sea service, positive characteristics from previous employers"
    ],
  },
  {
    title: "CHIEF OFFICER",
    link: "#",
    category: "Deck",
    fleet: "Container",
    minAge: "30",
    maxAge: "50",
    usVisaRequired: false,
    requirements: [
      "Chief Officer experience",
      "Good English language knowledge",
      "Stable sea service, positive characteristics from previous employers"
    ],
  },
  {
    title: "SECOND OFFICER",
    link: "#",
    category: "Deck",
    fleet: "Container",
    minAge: "25",
    maxAge: "45",
    usVisaRequired: false,
    requirements: [
      "Second Officer experience",
      "Good English language knowledge",
      "Stable sea service, positive characteristics from previous employers"
    ],
  },
  {
    title: "THIRD OFFICER",
    link: "#",
    category: "Deck",
    fleet: "Container",
    minAge: "20",
    maxAge: "40",
    usVisaRequired: false,
    requirements: [
      "Container experience",
      "Crew mix experience, good English language knowledge",
      "Stable sea service, positive characteristics from previous employers"
    ],
  },
  {
    title: "FOURTH OFFICER",
    link: "#",
    category: "Deck",
    fleet: "Container",
    minAge: "18",
    maxAge: "35",
    usVisaRequired: false,
    requirements: [
      "Fourth Officer experience",
      "Good English language knowledge",
      "Stable sea service, positive characteristics from previous employers"
    ],
  },
  {
    title: "JUNIOR OFFICER",
    link: "#",
    category: "Deck",
    fleet: "Container",
    minAge: "16",
    maxAge: "25",
    usVisaRequired: false,
    requirements: [
      "Junior Officer experience",
      "Good English language knowledge",
      "Stable sea service, positive characteristics from previous employers"
    ],
  },
  {
    title: "ADMIN OFFICER",
    link: "#",
    category: "Deck",
    fleet: "Container",
    minAge: "20",
    maxAge: "40",
    usVisaRequired: false,
    requirements: [
      "Admin Officer experience",
      "Good English language knowledge",
      "Stable sea service, positive characteristics from previous employers"
    ],
  },
  {
    title: "DECK CADET",
    link: "#",
    category: "Deck",
    fleet: "Container",
    minAge: "16",
    maxAge: "20",
    usVisaRequired: false,
    requirements: [
      "Deck Cadet experience",
      "Good English language knowledge",
      "Stable sea service, positive characteristics from previous employers"
    ],
  },
  {
    title: "BOSUN",
    link: "#",
    category: "Deck",
    fleet: "Container",
    minAge: "20",
    maxAge: "40",
    usVisaRequired: false,
    requirements: [
      "Bosun experience",
      "Good English language knowledge",
      "Stable sea service, positive characteristics from previous employers"
    ],
  },
  {
    title: "ABLE SEAMAN",
    link: "#",
    category: "Deck",
    fleet: "Container",
    minAge: "18",
    maxAge: "35",
    usVisaRequired: false,
    requirements: [
      "Able Seaman experience",
      "Good English language knowledge",
      "Stable sea service, positive characteristics from previous employers"
    ],
  },
  {
    title: "ORDINARY SEAMAN",
    link: "#",
    category: "Deck",
    fleet: "Container",
    minAge: "16",
    maxAge: "25",
    usVisaRequired: false,
    requirements: [
      "Ordinary Seaman experience",
      "Good English language knowledge",
      "Stable sea service, positive characteristics from previous employers"
    ],
  },
  {
    title: "DECK HAND",
    link: "#",
    category: "Deck",
    fleet: "Container",
    minAge: "16",
    maxAge: "25",
    usVisaRequired: false,
    requirements: [
      "Deck Hand experience",
      "Good English language knowledge",
      "Stable sea service, positive characteristics from previous employers"
    ],
  },
  {
    title: "CHIEF COOK",
    link: "#",
    category: "Deck",
    fleet: "Container",
    minAge: "20",
    maxAge: "40",
    usVisaRequired: false,
    requirements: [
      "Chief Cook experience",
      "Good English language knowledge",
      "Stable sea service, positive characteristics from previous employers"
    ],
  },
  {
    title: "MESSMAN / STEWARD",
    link: "#",
    category: "Deck",
    fleet: "Container",
    minAge: "18",
    maxAge: "35",
    usVisaRequired: false,
    requirements: [
      "Messman/Steward experience",
      "Good English language knowledge",
      "Stable sea service, positive characteristics from previous employers"
    ],
  },
  {
    title: "GENERAL PURPOSE CREW",
    link: "#",
    category: "Deck",
    fleet: "Container",
    minAge: "18",
    maxAge: "35",
    usVisaRequired: false,
    requirements: [
      "General Purpose Crew experience",
      "Good English language knowledge",
      "Stable sea service, positive characteristics from previous employers"
    ],
  },
  {
    title: "PUMP MAN",
    link: "#",
    category: "Deck",
    fleet: "Container",
    minAge: "18",
    maxAge: "35",
    usVisaRequired: false,
    requirements: [
      "Pump Man experience",
      "Good English language knowledge",
      "Stable sea service, positive characteristics from previous employers"
    ],
  },
  {
    title: "CHIEF ENGINEER",
    link: "#",
    category: "Engine",
    fleet: "Container",
    minAge: "35",
    maxAge: "55",
    usVisaRequired: false,
    requirements: [
      "Chief Engineer experience",
      "Good English language knowledge",
      "Stable sea service, positive characteristics from previous employers"
    ],
  },
  {
    title: "SECOND ENGINEER",
    link: "#",
    category: "Engine",
    fleet: "Container",
    minAge: "30",
    maxAge: "50",
    usVisaRequired: false,
    requirements: [
      "Second Engineer experience",
      "Good English language knowledge",
      "Stable sea service, positive characteristics from previous employers"
    ],
  },
  {
    title: "ELECTRO OFFICER",
    link: "#",
    category: "Engine",
    fleet: "Container",
    minAge: "25",
    maxAge: "45",
    usVisaRequired: false,
    requirements: [
      "Electro Officer experience",
      "Good English language knowledge",
      "Stable sea service, positive characteristics from previous employers"
    ],
  },
  {
    title: "THIRD ENGINEER",
    link: "#",
    category: "Engine",
    fleet: "Container",
    minAge: "20",
    maxAge: "40",
    usVisaRequired: false,
    requirements: [
      "Third Engineer experience",
      "Good English language knowledge",
      "Stable sea service, positive characteristics from previous employers"
    ],
  },
  {
    title: "FOURTH ENGINEER",
    link: "#",
    category: "Engine",
    fleet: "Container",
    minAge: "18",
    maxAge: "35",
    usVisaRequired: false,
    requirements: [
      "Fourth Engineer experience",
      "Good English language knowledge",
      "Stable sea service, positive characteristics from previous employers"
    ],
  },
  {
    title: "ENGINE CADET",
    link: "#",
    category: "Engine",
    fleet: "Container",
    minAge: "16",
    maxAge: "20",
    usVisaRequired: false,
    requirements: [
      "Engine Cadet experience",
      "Good English language knowledge",
      "Stable sea service, positive characteristics from previous employers"
    ],
  },
  {
    title: "FITTER",
    link: "#",
    category: "Engine",
    fleet: "Container",
    minAge: "18",
    maxAge: "35",
    usVisaRequired: false,
    requirements: [
      "Fitter experience",
      "Good English language knowledge",
      "Stable sea service, positive characteristics from previous employers"
    ],
  },
  {
    title: "MOTORMAN / OILER",
    link: "#",
    category: "Engine",
    fleet: "Container",
    minAge: "20",
    maxAge: "40",
    usVisaRequired: false,
    requirements: [
      "Motorman/Oiler experience",
      "Good English language knowledge",
      "Stable sea service, positive characteristics from previous employers"
    ],
  },
  {
    title: "ENGINE HAND",
    link: "#",
    category: "Engine",
    fleet: "Container",
    minAge: "18",
    maxAge: "35",
    usVisaRequired: false,
    requirements: [
      "Engine Hand experience",
      "Good English language knowledge",
      "Stable sea service, positive characteristics from previous employers"
    ],
  },
  {
    title: "ELECTRO TECHNICAL RATING",
    link: "#",
    category: "Engine",
    fleet: "Container",
    minAge: "18",
    maxAge: "35",
    usVisaRequired: false,
    requirements: [
      "Electro Technical Rating experience",
      "Good English language knowledge",
      "Stable sea service, positive characteristics from previous employers"
    ],
  },
  {
    title: "SC/COASTAL - MASTER",
    link: "#",
    category: "Small Craft/Coastal",
    fleet: "Container",
    minAge: "20",
    maxAge: "40",
    usVisaRequired: false,
    requirements: [
      "SC/COASTAL - MASTER experience",
      "Good English language knowledge",
      "Stable sea service, positive characteristics from previous employers"
    ],
  },
  {
    title: "SC/COASTAL - ENGINEER",
    link: "#",
    category: "Small Craft/Coastal",
    fleet: "Container",
    minAge: "18",
    maxAge: "35",
    usVisaRequired: false,
    requirements: [
      "SC/COASTAL - ENGINEER experience",
      "Good English language knowledge",
      "Stable sea service, positive characteristics from previous employers"
    ],
  },
];

export default function CareersPage() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedJobIndex, setExpandedJobIndex] = useState<number | null>(null);
  const [adminJobs, setAdminJobs] = useState<Job[]>([]);

  const categories = ["All", "Deck", "Engine", "Small Craft/Coastal"];

  // Load admin jobs from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("jobs");
      if (stored) {
        try {
          setAdminJobs(JSON.parse(stored));
        } catch {
          setAdminJobs([]);
        }
      }
    }
  }, []);

  // Merge admin jobs and hardcoded jobs (admin jobs first)
  const allJobs = [...adminJobs, ...hardcodedJobs];

  // Filter jobs by keyword and category
  const filteredJobs = allJobs.filter(
    (job) =>
      (selectedCategory === "All" || job.category === selectedCategory) &&
      job.title.toLowerCase().includes(keyword.toLowerCase())
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
        {filteredJobs.map((job, idx) => {
          // Use allJobs for global index
          const globalIdx = allJobs.findIndex(j => j.title === job.title);
          const isExpanded = expandedJobIndex === globalIdx;
          return (
            <div key={idx}>
              <div
                className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200 py-4 cursor-pointer"
              >
                <div>
                  <a
                    href={job.link}
                    className="text-lg font-semibold text-[#295080] hover:underline"
                    onClick={e => {
                      e.preventDefault();
                      setExpandedJobIndex(isExpanded ? null : globalIdx);
                    }}
                  >
                    {job.title}
                  </a>
                  
                </div>
                <button
                  className="mt-2 md:mt-0 bg-[#295080] text-white px-6 py-2 rounded hover:bg-[#1d3a5a] font-medium transition"
                  onClick={() => window.open('https://candidates.devmarinesl.com/registercandidate', '_blank')}
                >
                  Apply
                </button>
              </div>
              {isExpanded && (
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-2 text-gray-700 animate-fade-in">
                  <div className="space-y-4">
                    <div className="text-lg font-semibold">Fleet: {job.fleet || 'N/A'}</div>
                    <div className="flex flex-wrap gap-8 text-base">
                      <span>Age: {job.minAge || 'N/A'} - {job.maxAge || 'N/A'}</span>
                      <span>US Visa: {job.usVisaRequired ? 'Required' : 'Not Required'}</span>
                    </div>
                    <div className="mt-4 font-semibold">Requirements:</div>
                    <ul className="list-none space-y-2 mt-2">
                      {(job.requirements && job.requirements.length > 0) ? job.requirements.map((req: string, i: number) => (
                        <li key={i}>{req}</li>
                      )) : <li>N/A</li>}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      </div>
      {/* Submit your application section */}
      <section className="bg-gray-50 w-full py-16 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl md:text-3xl font-bold mb-4">Submit your application</h2>
        
        <button 
          className="bg-[#32ce47] text-white px-8 py-3 rounded font-semibold text-lg hover:bg-[#1d3a5a] transition"
          onClick={() => window.open('https://candidates.devmarinesl.com/registercandidate', '_blank')}
        >
          Apply now
        </button>
      </section>
      </main>
      <Footer backgroundImage='/careers3.jpg' />
    </div>
  );
}
