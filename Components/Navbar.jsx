import React from "react";
import img from "../Icons/1.jpeg";
import img3 from "../Icons/3.png";
import img4 from "../Icons/4.png";
import img5 from "../Icons/5.png";
import img6 from "../Icons/6.png";
import img7 from "../Icons/7.png";
import img8 from "../Icons/8.png";

const Navbar = () => {
  return (
    <div>
      <header className="bg-purple-800 flex justify-end items-center p-1">
        <div className="flex space-x-4 text-white text-xl mr-4 gap-2">
          <a href="#" aria-label="LinkedIn">
            <img className="h-5 w-5" src={img3} />
          </a>
          <a href="#" aria-label="Infinity">
            <img className="h-5 w-5" src={img8} />
          </a>
          <a href="#" aria-label="Instagram">
            <img className="h-5 w-5" src={img4} />
          </a>
          <a href="#" aria-label="X (Twitter)">
            <img className="h-5 w-5" src={img5} />
          </a>
          <a href="#" aria-label="WhatsApp">
            <img className="h-5 w-5" src={img6} />
          </a>
          <a href="#" aria-label="Telegram">
            <img className="h-5 w-5" src={img7} />
          </a>
        </div>
      </header>
      <div>
        <nav className="bg-white text-black py-1 shadow-lg sticky top-0 z-50">
          <div className="mx-auto px-4 flex justify-between items-center">
            <a href="flex items-center">
              <img className="h-20 w-40" src={img} />
            </a>
            <div className="h-10 md:flex justify-center items-center bg-white drop-shadow-lg">
              <div className="">
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
            </div>
            <div>
              <a
                href=""
                className="bg-purple-700 text-white w-36 h-12 flex items-center justify-center rounded-md transition duration-300"
              >
                Login
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
