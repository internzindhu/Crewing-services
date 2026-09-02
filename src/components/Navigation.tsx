"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from 'next/image'; 

export default function Navigation() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact Us", path: "/contact" },
    { name: "Careers", path: "/careers" },
    { name: "Add Jobs", path: "/addJobs" },
    
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    
    <nav
      className={`bg-[#00000050] backdrop-blur-2xl absolute top-0 left-0 w-full z-100 transition-opacity duration-1000 ${
        mounted ? "opacity-100" : "opacity-100"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo4.png" 
              alt="Logo" 
              width={200} 
              height={200} 
              className="h-16 sm:h-24 md:h-32 lg:h-40 mt-7 xl:h-52 w-auto" 
            />
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3">
            {navItems.map(({ name, path }) => {
              const isActive = pathname === path;
              return (
                <Link
                  key={path}
                  href={path}
                  className={`relative px-2 xl:px-4 py-2 rounded-full text-xs xl:text-sm font-medium transition-all duration-300
                    ${
                      isActive
                        ? "bg-none text-yellow-500 "
                        : "text-white hover:text-yellow-400 hover:text-white"
                    } group`}
                >
                  {name}
                  {/* Underline Animation */}
                  <span
                    className={`absolute left-2 xl:left-4 right-2 xl:right-4 bottom-1 h-[2px] bg-yellow-500 rounded-full transition-all duration-300 ease-in-out
                      ${isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"}
                    `}
                  />
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-white p-2 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2">
            {navItems.map(({ name, path }) => {
              const isActive = pathname === path;
              return (
                <Link
                  key={path}
                  href={path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300
                    ${
                      isActive
                        ? "bg-yellow-500/20 text-yellow-500"
                        : "text-white hover:bg-white/10 hover:text-yellow-400"
                    }`}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
