import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full bg-[#0B0F19] text-[#F9FAFB] flex justify-between items-center p-5 shadow-md z-50">
      <h1 className="text-xl font-bold text-[#3B82F6]">Bakare.dev</h1>

      {/* Desktop */}
      <div className="hidden md:flex gap-6">
        {links.map((link, i) => (
          <a key={i} href={link.href} className="hover:text-[#3B82F6] transition">
            {link.name}
          </a>
        ))}
      </div>

      {/* Mobile */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>
      {open && (
        <div className="md:hidden flex flex-col items-center mt-4 gap-4">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="hover:text-[#3B82F6]"
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

export default Navbar