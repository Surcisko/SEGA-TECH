import { useState } from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  const [isactive, setIsactive] = useState("HOME");

  const navLinks = [
    { label: "HOME", to: "/" },
    { label: "PRODUCTS", to: "/products" },
    { label: "BLOG", to: "/blog" },
    { label: "CLIENTS", to: "/clients" },
    { label: "PARTNERS", to: "/partners" },
  ];

  return (
    // <nav className="fixed bg-transparent backdrop-blur-md py-4 md:py-5 top-0 w-full border-b border-orange-400 z-10">
    <nav className="fixed top-0 left-0 w-full bg-white py-5  z-30">
      <header className="flex items-center justify-between w-full max-w-7xl px-6  mx-auto text-black">
        <a href="/" className="">
          <Link to="/" className="flex items-center">
            <img src="/sega-logo.png" alt="SEGA Logo" className="w-32 h-auto" />
          </Link>
        </a>

        <div className="flex  space-x-20">
          {navLinks.map((nav) => (
            <Link
              key={nav.label}
              to={nav.to}
              className={`font-medium ${
                isactive === nav.label
                  ? "text-black border-b-2 border-orange-400 hover:text-amber-300"
                  : " text-black hover:text-orange-400"
              }`}
              onClick={() => setIsactive(nav.label)}
            >
              {nav.label}
            </Link>
          ))}
        </div>

        <a href="/blog">
          <button className=" border-0 outline-none focus:outline-none rounded-full bg-orange-400  text-white px-5 py-3">
            Get Started
          </button>
        </a>
      </header>
    </nav>
  );
};
