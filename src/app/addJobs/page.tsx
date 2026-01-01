"use client";
import React, { useState, useEffect } from "react";

const categories = ["Deck", "Engine", "Small Craft/Coastal"];
const fleets = [
  "Container", "Bulker Carrier", "Tanker", "Vehicle Carrier",
  "General Cargo", "LNG Carrier", "LPG Carrier"
];

const positionsByCategory: Record<string, string[]> = {
  Deck: [
    "MASTER", "CHIEF OFFICER", "SECOND OFFICER", "THIRD OFFICER", "FOURTH OFFICER", "JUNIOR OFFICER",
    "ADMIN OFFICER", "DECK CADET", "BOSUN", "ABLE SEAMAN", "ORDINARY SEAMAN", "DECK HAND",
    "CHIEF COOK", "MESSMAN / STEWARD", "GENERAL PURPOSE CREW", "PUMP MAN"
  ],
  Engine: [
    "CHIEF ENGINEER", "SECOND ENGINEER", "ELECTRO OFFICER", "THIRD ENGINEER", "FOURTH ENGINEER", "ENGINE CADET",
    "FITTER", "MOTORMAN / OILER", "ENGINE HAND", "ELECTRO TECHNICAL RATING"
  ],
  "Small Craft/Coastal": [
    "SC/COASTAL - MASTER", "SC/COASTAL - ENGINEER"
  ]
};


export const hardcodedJobs = [
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

interface Job {
  title: string;
  category: string;
  fleet: string;
  minAge: string;
  maxAge: string;
  usVisaRequired: boolean;
  requirements: string[];
}

export default function AddJobsPage() {
  const [form, setForm] = useState({
    title: positionsByCategory[categories[0]][0],
    category: categories[0],
    fleet: fleets[0],
    minAge: "",
    maxAge: "",
    usVisaRequired: false,
    requirements: ""
  });

  const [jobs, setJobs] = useState<Job[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [expandedJobIndex, setExpandedJobIndex] = useState<number | null>(null);
  const [success, setSuccess] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterCategories = ["All", ...categories];

  const storedJobs = [
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

  useEffect(() => {
    setJobs(storedJobs);
  }, []);

  // Filter jobs by keyword and category
  const filteredJobs = jobs.filter(
    (job) =>
      (selectedCategory === "All" || job.category === selectedCategory) &&
      job.title.toLowerCase().includes(keyword.toLowerCase())
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "category") {
      setForm((prev) => ({
        ...prev,
        category: value,
        title: positionsByCategory[value][0]
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, usVisaRequired: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const job = {
      ...form,
      requirements: form.requirements.split("\n").map((r) => r.trim()).filter((r) => r)
    };
    if (editIndex !== null) {
      const updated = [...jobs];
      updated[editIndex] = job;
      setJobs(updated);
      setEditIndex(null);
    } else {
      setJobs([job, ...jobs]);
    }
    setForm({
      title: positionsByCategory[categories[0]][0],
      category: categories[0],
      fleet: fleets[0],
      minAge: "",
      maxAge: "",
      usVisaRequired: false,
      requirements: ""
    });
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
    setShowForm(false);
  };

  const handleEdit = (idx: number) => {
    const job = jobs[idx];
    setForm({
      ...job,
      requirements: Array.isArray(job.requirements) ? job.requirements.join("\n") : job.requirements
    });
    setEditIndex(idx);
    setShowForm(true);
  };

  const handleDelete = (idx: number) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      setJobs(jobs.filter((_, i) => i !== idx));
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 text-black px-4">
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl font-bold py-12 text-center mb-8">Manage Job Openings</h1>
        {/* Filter/Search Controls */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 w-full max-w-2xl mb-8 justify-center mx-auto">
          <input
            type="text"
            placeholder="Search by keyword"
            className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <select
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none text-gray-700"
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
          >
            {filterCategories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        {/* Jobs List */}
        {filteredJobs.length === 0 ? (
          <p className="text-center text-gray-500 mb-6">No jobs found.</p>
        ) : (
          <div className="w-full mb-8">
            {filteredJobs.map((job, idx) => {
              const isExpanded = expandedJobIndex === idx;
              return (
                <div key={idx} className="border-b border-gray-300 py-4">
                  <div className="flex justify-between items-center cursor-pointer">
                    <div onClick={() => setExpandedJobIndex(isExpanded ? null : idx)}>
                      <h2 className="text-lg font-semibold text-[#295080] hover:underline">
                        {job.title}
                      </h2>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => handleEdit(idx)} className="px-3 py-1 bg-[#0C2B73] text-white rounded hover:bg-blue-600">Update</button>
                      <button onClick={() => handleDelete(idx)} className="px-3 py-1 bg-[#730C0C] text-white rounded hover:bg-red-600">Delete</button>
                    </div>
                  </div>
                  {isExpanded && (
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-3 text-gray-700">
                      <p><strong>Category:</strong> {job.category}</p>
                      <p><strong>Fleet:</strong> {job.fleet}</p>
                      <p><strong>Age:</strong> {job.minAge} - {job.maxAge}</p>
                      <p><strong>US Visa:</strong> {job.usVisaRequired ? "Required" : "Not Required"}</p>
                      <div className="mt-2">
                        <strong>Requirements:</strong>
                        <ul className="list-disc ml-5 mt-1">
                          {job.requirements.length ? job.requirements.map((req, i) => (
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
        )}

        {/* Add Job Button */}
        {!showForm && (
          <button
            onClick={() => {
              setShowForm(true);
              setForm({
                title: positionsByCategory[categories[0]][0],
                category: categories[0],
                fleet: fleets[0],
                minAge: "",
                maxAge: "",
                usVisaRequired: false,
                requirements: ""
              });
              setEditIndex(null);
            }}
            className="w-full bg-[#295080] text-white font-semibold py-3 rounded hover:bg-[#1d3a5a] transition mb-6"
          >
            Add New Job
          </button>
        )}

        {/* Add / Update Form */}
        {showForm && (
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6 space-y-4">
            <h2 className="text-2xl font-bold mb-2 text-center">
              {editIndex !== null ? "Update Job" : "Add Job"}
            </h2>
            <div>
              <label className="block font-semibold mb-1">Category</label>
              <select name="category" value={form.category} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2">
                {categories.map((cat) => <option key={cat}>{cat}</option>)}
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-1">Job Position</label>
              <select name="title" value={form.title} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2">
                {positionsByCategory[form.category].map((pos) => <option key={pos}>{pos}</option>)}
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-1">Fleet</label>
              <select name="fleet" value={form.fleet} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2">
                {fleets.map((fleet) => <option key={fleet}>{fleet}</option>)}
              </select>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block font-semibold mb-1">Min Age</label>
                <input type="number" name="minAge" value={form.minAge} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" />
              </div>
              <div className="flex-1">
                <label className="block font-semibold mb-1">Max Age</label>
                <input type="number" name="maxAge" value={form.maxAge} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="usVisaRequired" checked={form.usVisaRequired} onChange={handleCheckboxChange} />
              <label className="font-semibold">US Visa Required</label>
            </div>
            <div>
              <label className="block font-semibold mb-1">Requirements</label>
              <textarea name="requirements" value={form.requirements} onChange={handleChange} rows={4} className="w-full border border-gray-300 rounded px-3 py-2" />
            </div>
            <button type="submit" className="w-full bg-[#295080] text-white font-semibold py-2 rounded hover:bg-[#1d3a5a] transition">
              {editIndex !== null ? "Update Job" : "Add Job"}
            </button>
            <button type="button" onClick={() => { setShowForm(false); setEditIndex(null); }} className="w-full bg-gray-300 text-black font-semibold py-2 rounded hover:bg-gray-400 transition mt-2">
              Cancel
            </button>
            {success && <p className="text-green-600 text-center mt-2 font-semibold">Job {editIndex !== null ? "updated" : "added"} successfully!</p>}
          </form>
        )}
      </div>
    </div>
  );
}
