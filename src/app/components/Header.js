"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow z-50 px-8 py-6 flex items-center justify-between">
      {/* Logo clickable ke Home */}
      <Link href="/">
        <span className="text-2xl font-bold cursor-pointer">EduFun</span>
      </Link>

      {/* Desktop Nav */}
      <nav className=" hidden md:flex space-x-8 text-base font-bold">
        <Link href="/" className="hover:text-blue-600 transition">
          Home
        </Link>
        <Link href="/courses" className="hover:text-blue-600 transition">
          Courses
        </Link>
        <Link href="/quiz" className="hover:text-blue-600 transition">
          Quiz
        </Link>
      </nav>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <div className="space-y-1">
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
        </div>
      </button>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <nav className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <Link href="/" className="block hover:text-blue-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/courses"
                className="block hover:text-blue-600 transition"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                href="/quiz"
                className="block hover:text-blue-600 transition"
              >
                Quiz
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
