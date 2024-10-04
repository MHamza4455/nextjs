"use client";
import { useState } from "react";

export default function DashboardHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* Left side: Dashboard logo or name */}
      <div className="text-2xl font-bold">
        Dashboard
      </div>

      {/* Right side: Sign out dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none flex items-center space-x-2"
        >
          <span>Sign Out</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.292 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10">
            <a
              href="/signout"
              className="block px-4 py-2 text-sm hover:bg-gray-100"
            >
              Sign Out
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
