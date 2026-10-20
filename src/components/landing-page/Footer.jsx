import { IoLogoTwitter } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const currentYear = new Date().getFullYear();
const pageLinks = [
  { label: "About Us", to: "/about" },
  { label: "Solutions & Services", to: "/solutionsANDservices" },
  { label: "Projects", to: "/projects" },
  { label: "Contacts", to: "/contacts" },
];

export const Footer = () => {
  const [isactive, setIsactive] = useState("");

  return (
    <footer className=" bg-black/90 w-full  px-5">
      <div className="md:flex justify-between  items-center p-5">
        {/* Left column */}
        <div className="px-3">
          <img src="/sega-logo.png" alt="SEGA Logo" className="w-32 h-auto" />
        </div>
        <div>
          <h2 className="text-3xl text-white font-semibold px-15 py-5">
            Delivering reliable IT and communication solutions for businesses.
          </h2>
        </div>
        {/* Middle column */}
        <div className="mt-9 hidden md:block px-15">
          {pageLinks.map((link) => {
            return (
              <ul>
                <li>
                  <Link
                    key={link.label}
                    to={link.to}
                    className={`font-medium ${
                      isactive === link.label
                        ? "text-gray-200 border-b-2  hover:text-amber-300"
                        : " text-gray-200 hover:text-amber-200"
                    }`}
                    onClick={() => setIsactive(link.label)}
                  >
                    {link.label}
                  </Link>
                </li>
              </ul>
            );
          })}
        </div>
        {/* Right column */}
        <div className="p-2 mt-5">
          {/*  Contact*/}
          <h4 className="text-lg font-semibold mb-4 text-gray-900/90">
            Contact
          </h4>

          <p className="text-gray-200 mb-2">Email: info@segaitsolutions.com </p>

          <p className="text-gray-200 mb-4">Phone: +234 803 228 1934 </p>

          {/* Social Icons */}
          <div className="flex gap-3 text-xl text-white">
            <FaFacebook />
            <FaLinkedin />
            <IoLogoTwitter />
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center py-4 text-white">
        © {currentYear} Segun Charles. All Rights Reserved.
      </div>
    </footer>
  );
};
