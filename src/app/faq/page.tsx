'use client';

import { useState } from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';

const faqData = [
  {
    question: "Why does Zindhu place so much emphasis on long-term crew relationships?",
    answer: "Crewing is not a transaction — it's a journey. We focus on retention, career growth, and treating each mariner as a valued stakeholder.",
  },
  {
    question: "How does Zindhu support crew welfare beyond just placement?",
    answer: "From medical to psychological support, our team provides ongoing assistance throughout your contract.",
  },
  {
    question: "What training advantages do Zindhu seafarers enjoy?",
    answer: "We partner with SMTI to offer discounted, IMO-compliant training and simulator courses for Zindhu-assigned crew.",
  },
  {
    question: "What are Zindhu’s expectations from its seafarers?",
    answer: "We value discipline, seamanship, and safety — in return, we ensure fairness and compliance in every contract.",
  },
  {
    question: "Are Zindhu’s fleet operators compliant with global maritime standards?",
    answer: "Yes. We only work with MLC 2006 and ISM Code-compliant partners with proper safety systems in place.",
  },
  {
    question: "I’m already certified. Can I apply directly to Zindhu?",
    answer: "Yes. Submit your documents on our website and we’ll match your experience with the right vessel.",
  },
  {
    question: "Is Zindhu involved in offshore or specialized vessel crewing?",
    answer: "We source crew for OSVs, AHTS, chemical, and LNG vessels — based on type-specific experience.",
  },
  {
    question: "How are seafarers chosen for assignments?",
    answer: "Candidates undergo document, experience, and competence checks, followed by client approval.",
  },
  {
    question: "Does Zindhu charge anything for placement or documentation?",
    answer: "Never. We follow a zero-charge policy aligned with ILO and MLC 2006. Report any violations.",
  },
  {
    question: "Whom can I speak to if I want to start my career with Zindhu?",
    answer: "Contact crewing@zindhu.lk or visit our Colombo office. We’ll guide you through your next steps.",
  },
];

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className='flex flex-col min-h-screen'>
    <main className="min-h-screen bg-sky-100 text-black font-sans pb-16">
      {/* Hero Section */}
      <div className="relative w-full h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/port2.jpg')] bg-cover bg-bottom bg-fixed z-0"></div>
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 text-white text-center px-6 py-8" data-aos="fade-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">FAQ</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Here are some of the most frequently asked questions at Zindhu
          </p>
        </div>
      </div>

      {/* FAQ Grid */}
      <div className="max-w-6xl mx-auto mt-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {faqData.map((faq, index) => {
          const isExpanded = expandedIndex === index;
          const previewText = faq.answer.slice(0, 80);

          return (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md flex items-start gap-4 group hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="mt-1 shrink-0">
                <Image
                  src="/faq1.svg"
                  alt="FAQ icon"
                  width={32}
                  height={32}
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                  {faq.question}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {isExpanded ? faq.answer : `${previewText}...`}
                </p>
                <button
                  onClick={() => toggleExpand(index)}
                  className="text-blue-600 text-sm mt-2 inline-block hover:underline focus:outline-none"
                >
                  {isExpanded ? "Show Less" : "Read More"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </main>
    <Footer backgroundImage='/port2.jpg' />
    </div>
  );
}
