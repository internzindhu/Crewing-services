'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer({ backgroundImage }: { backgroundImage: string }) {
  return (
    <footer
      className="relative w-full text-white backdrop-blur-2xl py-8 sm:py-12 bg-cover bg-fixed bg-bottom"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black/80 z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
        {/* Logo & Intro */}
        <div className="text-center md:text-left">
          <Link href="/" className="inline-flex items-center justify-center md:justify-start">
            <Image src="/logo3.png" alt="Zindhu Logo" width={120} height={40} className="w-24 sm:w-32 md:w-36" />
          </Link>
          <p className="mt-4 text-xs sm:text-sm text-gray-300">
            At Zindhu, we sail forward with you. Crew-first. Always.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-yellow-400">Quick Links</h3>
          <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
            <li><Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-yellow-400 transition-colors">About</Link></li>
            <li><Link href="/news" className="hover:text-yellow-400 transition-colors">Services</Link></li>
            <li><Link href="/faq" className="hover:text-yellow-400 transition-colors">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-400 transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Certifications & Licences */}
        <div className="text-center md:text-left">
          <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-yellow-400">Certifications</h3>
          <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
            <li>
              <a href="/certifications/iso-9001-certificate.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                ISO 9001 Certificate
              </a>
            </li>
            <li>
              <a href="/certifications/srps-licence.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                SRPS Licence
              </a>
            </li>
            <li>
              <a href="/certifications/quality-policy.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                Quality Policy
              </a>
            </li>
            <li>
              <a href="/certifications/shipping-licence.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                Shipping Licence
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info + Registration Button */}
        <div className="text-center md:text-left md:col-span-2 lg:col-span-1">
          <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-yellow-400">Contact</h3>
          <ul className="text-xs sm:text-sm text-gray-300 space-y-1.5 sm:space-y-2">
            <li>
              Email: <a href="mailto:crewing@zindhu.lk" className="hover:text-yellow-400 transition-colors break-all">crewinnnng@zindhu.lk</a>
            </li>
            <li>
              Phone: <a href="tel:+94112345678" className="hover:text-yellow-400 transition-colors">+94 11 2 676 230</a>
            </li>
            <li className="break-words">37/33, Bullers Lane, Colombo 07</li>
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
            className="mt-4 sm:mt-6 inline-block w-full sm:w-auto text-center bg-green-600 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-green-700 transition-colors font-medium text-sm sm:text-base"
          >
            Register as a Candidate
          </a>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 sm:mt-10 pt-4 sm:pt-6 text-center text-xs sm:text-sm text-gray-100 px-4 sm:px-6">
        © {new Date().getFullYear()} Zindhu Maritime Services. All rights reserved.
      </div>
    </footer>
  );
}
