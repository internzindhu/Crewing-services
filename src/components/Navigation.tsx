"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "News", path: "/news" },
  ];

  return (
    <nav
      className={`bg-[#00000050] backdrop-blur-md absolute top-0 left-0 w-full z-10 transition-opacity duration-1000 ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/logo2.png" alt="Logo" className="h-9 w-auto" />
          </Link>

          {/* Nav Items */}
          <div className="flex items-center space-x-3">
            {navItems.map(({ name, path }) => {
              const isActive = pathname === path;
              return (
                <Link
                  key={path}
                  href={path}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                    ${
                      isActive
                        ? "bg-none text-yellow-500 shadow-md"
                        : "text-white hover:text-yellow-400 hover:text-white"
                    } group`}
                >
                  {name}
                  {/* Underline Animation */}
                  <span
                    className={`absolute left-4 right-4 bottom-1 h-[2px] bg-yellow-500 rounded-full transition-all duration-300 ease-in-out
                      ${isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"}
                    `}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
