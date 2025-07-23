"use client";
import React, { useState } from "react";

const categories = ["Deck", "Engine", "Small Craft/Coastal"];

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

export default function AddJobsPage() {
  const [form, setForm] = useState({
    title: positionsByCategory[categories[0]][0],
    location: "",
    category: categories[0],
    announcement: "",
    yob: "",
    dwt: "",
    teuRef: "",
    requirements: ""
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "category") {
      setForm((prev) => ({
        ...prev,
        category: value,
        title: positionsByCategory[value][0] // reset title to first of new category
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Parse requirements into array
    const job = {
      ...form,
      requirements: form.requirements
        .split("\n")
        .map((r) => r.trim())
        .filter((r) => r)
    };
    // Get existing jobs from localStorage
    const existing = JSON.parse(localStorage.getItem("jobs") || "[]");
    localStorage.setItem("jobs", JSON.stringify([job, ...existing]));
    setSuccess(true);
    setForm({
      title: positionsByCategory[categories[0]][0],
      location: "",
      category: categories[0],
      announcement: "",
      yob: "",
      dwt: "",
      teuRef: "",
      requirements: ""
    });
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-black bg-gray-50 py-12 px-4">
      <div className="bg-white mt-10 rounded shadow-lg p-8 w-full max-w-xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Add Job Opening</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">Category</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1">Job Position</label>
            <select
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              {positionsByCategory[form.category].map((pos) => (
                <option key={pos} value={pos}>{pos}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1">Announcement</label>
            <input
              name="announcement"
              value={form.announcement}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block font-semibold mb-1">YOB</label>
              <input
                name="yob"
                value={form.yob}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div className="flex-1">
              <label className="block font-semibold mb-1">DWT</label>
              <input
                name="dwt"
                value={form.dwt}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div className="flex-1">
              <label className="block font-semibold mb-1">TEU/REF</label>
              <input
                name="teuRef"
                value={form.teuRef}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
          </div>
          <div>
            <label className="block font-semibold mb-1">Requirements (one per line)</label>
            <textarea
              name="requirements"
              value={form.requirements}
              onChange={handleChange}
              rows={4}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#295080] text-white font-semibold py-2 rounded hover:bg-[#1d3a5a] transition"
          >
            Add Job
          </button>
          {success && <div className="text-green-600 text-center font-semibold mt-2">Job added successfully!</div>}
        </form>
      </div>
    </div>
  );
}
