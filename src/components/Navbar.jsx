import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Why Me", href: "#why-hire-me" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0B0F19]/95 backdrop-blur-md text-[#F9FAFB] flex justify-between items-center px-6 md:px-10 py-4 shadow-md z-50">
      <h1 className="text-xl md:text-2xl font-bold text-[#3B82F6]">
        Bakare.dev
      </h1>

      {/* Desktop */}
      <div className="hidden md:flex gap-6">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.href}
            className="hover:text-[#3B82F6] transition duration-300"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-[#111827] flex flex-col items-center py-6 gap-5 md:hidden shadow-lg">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="hover:text-[#3B82F6] transition"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;