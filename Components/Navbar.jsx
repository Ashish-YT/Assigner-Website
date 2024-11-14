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
      <div className="fixed top-0 left-0 right-0 z-50">
        <header className="bg-[#641566] flex justify-end items-center p-1 max-md:hidden">
          <div className="flex space-x-1 text-white text-xl mr-4 gap-2">
            <a
              href="https://www.linkedin.com/company/theassigner/"
              aria-label="LinkedIn"
            >
              <img className="h-5 w-5" src={img3} />
            </a>
            <a
              href="https://www.facebook.com/profile.php"
              aria-label="Infinity"
            >
              <img className="h-6 w-6" src={img8} />
            </a>
            <a
              href="https://www.instagram.com/theassigner/"
              aria-label="Instagram"
            >
              <img className="h-6 w-6" src={img4} />
            </a>
            <a href="https://twitter.com/the_assigner" aria-label="X (Twitter)">
              <img className="h-6 w-6" src={img5} />
            </a>
            <a
              href="https://whatsapp.com/channel/0029VaaJiRRKAwEshFl9r30c"
              aria-label="WhatsApp"
            >
              <img className="h-6 w-6" src={img6} />
            </a>
            <a href="https://t.me/assigmentmaker" aria-label="Telegram">
              <img className="h-6 w-6" src={img7} />
            </a>
          </div>
        </header>

        <nav className="bg-white text-black py-1 shadow-lg">
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
                {isMobileMenuOpen ? (
                  <FaTimes size={24} />
                ) : (
                  <FaBars size={24} />
                )}
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
      <div className="pt-28 max-sm:hidden"></div>
    </div>
  );
}

export default Navbar;
