'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer({ backgroundImage }: { backgroundImage: string }) {
  return (
    <footer
      className="relative w-full text-white backdrop-blur-2xl py-12 bg-cover bg-fixed bg-bottom"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black/80 z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Intro */}
        <div>
          <Link href="/" className="inline-flex items-center">
            <Image src="/logo3.png" alt="Zindhu Logo" width={120} height={40} />
          </Link>
          <p className="mt-4 text-sm text-gray-300">
            At Zindhu, we sail forward with you. Crew-first. Always.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link href="/about" className="hover:text-yellow-400">About</Link></li>
            <li><Link href="/news" className="hover:text-yellow-400">Services</Link></li>
            <li><Link href="/faq" className="hover:text-yellow-400">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-400">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info + Registration Button */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">Contact</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>Email: <a href="mailto:crewing@zindhu.lk" className="hover:text-yellow-400">crewinnnng@zindhu.lk</a></li>
            <li>Phone: <a href="tel:+94112345678" className="hover:text-yellow-400">+94 11 2 676 230</a></li>
            <li>37/33, Bullers Lane, Colombo 07</li>
          </ul>

          {/* <div className="flex space-x-4 mt-4">
            <a href="#"><Image src="/facebook.svg" alt="Facebook" width={20} height={20} /></a>
            <a href="#"><Image src="/linkedin.svg" alt="LinkedIn" width={20} height={20} /></a>
            <a href="#"><Image src="/instagram.svg" alt="Instagram" width={20} height={20} /></a>
          </div> */}

          {/* Candidate Registration Button */}
          <a
            href="https://candidates.devmarinesl.com/registercandidate"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block w-full text-center bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-medium"
          >
            Register as a Candidate
          </a>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-100 px-6">
        © {new Date().getFullYear()} Zindhu Maritime Services. All rights reserved.
      </div>
    </footer>
  );
}
