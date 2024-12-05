import Link from 'next/link';
import React from 'react';

export const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md sticky top-0">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-bold">
          <a href="#" className="hover:text-gray-300">
            MyBrand
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-6">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/users" className="hover:text-gray-300">
            users
          </Link>
        
        </nav>

        {/* CTA Button */}
        <a
          href="#cta"
          className="bg-white text-blue-600 py-2 px-4 rounded-lg shadow hover:bg-gray-100"
        >
          Get Started
        </a>
      </div>
    </header>
  );
};
