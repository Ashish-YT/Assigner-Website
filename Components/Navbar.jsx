import React, { useState } from "react";
import img from "../Icons/1.jpeg";
import img3 from "../Icons/3.png";
import img4 from "../Icons/4.png";
import img5 from "../Icons/5.png";
import img6 from "../Icons/6.png";
import img7 from "../Icons/7.png";
import img8 from "../Icons/8.png";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <header className="bg-[#641566] flex justify-end items-center p-1 max-md:hidden">
        <div className="flex space-x-1 text-white text-xl mr-4 gap-2">
          <a href="#" aria-label="LinkedIn">
            <img className="h-5 w-5" src={img3} />
          </a>
          <a href="#" aria-label="Infinity">
            <img className="h-6 w-6" src={img8} />
          </a>
          <a href="#" aria-label="Instagram">
            <img className="h-6 w-6" src={img4} />
          </a>
          <a href="#" aria-label="X (Twitter)">
            <img className="h-6 w-6" src={img5} />
          </a>
          <a href="#" aria-label="WhatsApp">
            <img className="h-6 w-6" src={img6} />
          </a>
          <a href="#" aria-label="Telegram">
            <img className="h-6 w-6" src={img7} />
          </a>
        </div>
      </header>
      <nav className="bg-white text-black py-1 shadow-lg top-7 max-sm:top-0 max-sm:fixed max-sm:right-0 max-sm:left-0 z-50">
        <div className="mx-auto px-4 flex justify-between items-center">
          <a href="#" className="flex items-center">
            <img className="h-20 w-40 object-cover object-center" src={img} />
          </a>

          <div className="hidden md:flex h-10 justify-center items-center bg-slate-100 drop-shadow-lg">
            <a
              href="#"
              className="text-base py-[13px] px-[20px] font-medium text-black hover:text-purple-600"
            >
              Home
            </a>
            <a
              href="#"
              className="text-base py-[13px] px-[20px] font-medium text-black hover:text-purple-600"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-base py-[13px] px-[20px] font-medium text-black hover:text-purple-600"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-base py-[13px] px-[20px] font-medium text-black hover:text-purple-600"
            >
              Our Services
            </a>
            <a
              href="#"
              className="text-base py-[13px] px-[20px] font-medium text-black hover:text-purple-600"
            >
              IELTS & PTE
            </a>
            <a
              href="#"
              className="text-base py-[13px] px-[20px] font-medium text-black hover:text-purple-600"
            >
              Contact Us
            </a>
          </div>
          <div className="md:flex">
            <a
              href="#"
              className="bg-[#583781] text-white w-36 h-12 flex items-center justify-center rounded-md max-sm:w-20 max-sm:h-12"
            >
              Login
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-black">
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <a
              href="#"
              className="block text-base py-2 px-4 text-black hover:bg-slate-100"
            >
              Home
            </a>
            <a
              href="#"
              className="block text-base py-2 px-4 text-black hover:bg-slate-100"
            >
              About Us
            </a>
            <a
              href="#"
              className="block text-base py-2 px-4 text-black hover:bg-slate-100"
            >
              Blog
            </a>
            <a
              href="#"
              className="block text-base py-2 px-4 text-black hover:bg-slate-100"
            >
              Our Services
            </a>
            <a
              href="#"
              className="block text-base py-2 px-4 text-black hover:bg-slate-100"
            >
              IELTS & PTE
            </a>
            <a
              href="#"
              className="block text-base py-2 px-4 text-black hover:bg-slate-100"
            >
              Contact Us
            </a>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
