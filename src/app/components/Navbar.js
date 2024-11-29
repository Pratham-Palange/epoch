"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { MdMenu, MdClose } from "react-icons/md";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About us", href: "/about" },
    { name: "Our work", href: "/work" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-rootColor py-8 px-4">
      <div className="max-w-[84rem] mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl syne-semibold text-black">
          AVIGHNA
        </Link>
        <div className="hidden md:flex gap-10">
          {navItems.map((item) => (
            <div key={item.name}>
              <Link
                href={item.href}
                className="text-black pb-2 border-transparent border-b-2 hover:border-black open-semibold text-lg transition-all duration-500"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black hover:text-gray-600 focus:outline-none"
          >
            {isOpen ? (
              <MdClose className="h-6 w-6 fill-current" />
            ) : (
              <MdMenu className="h-6 w-6 fill-current" />
            )}
          </button>
        </div>
      </div>
      <motion.div
        className={`md:hidden ${isOpen ? "block" : "hidden"}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-3 py-2 text-black hover:text-gray-600"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
