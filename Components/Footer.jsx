import React from "react";
import img from "../icons2/img.png";
import img3 from "../Icons/3.png";
import img4 from "../Icons/4.png";
import img5 from "../Icons/5.png";
import img6 from "../Icons/6.png";
import img7 from "../Icons/7.png";
import img8 from "../Icons/8.png";

function Footer() {
  return (
    <footer
      className="relative p-8 md:p-12 text-black w-full"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="text-center max-sm:text-[10px] md:text-left">
          <h3 className="text-sm md:text-2xl font-semibold ">Quick Links</h3>
          <ul className="mt-4 space-y-2 max-sm:space-y-0">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                How We Help?
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Community
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center md:text-left max-sm:text-[10px]">
          <h3 className="text-sm md:text-2xl font-semibold">Features</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Plagiarism Checker
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Free Publications
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Provides Books
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Provides PDF
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Paraphraser
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center md:text-left max-sm:text-[10px]">
          <h3 className="text-sm md:text-2xl font-semibold">Our Offering</h3>
          <ul className="mt-4 space-y-2 max-sm:space-y-0">
            <li>
              <a href="#" className="hover:underline">
                Free IELTS Masterclass
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Talk to Counsellor
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                IELTS Exam Overview
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Important IELTS Articles
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center md:text-left max-sm:text-[10px]">
          <h3 className="text-sm md:text-2xl font-semibold">Newsletter</h3>
          <p className="mt-4 text-black">
            You can trust us. We only send promo offers.
          </p>
          <div className="mt-4 flex flex-col md:flex-row space-y-3 md:space-y-0 max-sm:hidden md:space-x-2">
            <input
              type="email"
              placeholder="Your email here"
              className="p-2 w-auto md:w-auto flex-1 rounded-md border border-gray-300 text-gray-800"
            />
            <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600">
              Subscribe
            </button>
          </div>
          <div className="mt-6 flex justify-center items-center space-x-4 max-sm:hidden bg-black h-8">
            <div className="flex space-x-1  text-white text-xl mr-4 gap-3 max-sm:gap-3">
              <a
                href="https://www.linkedin.com/company/theassigner/"
                aria-label="LinkedIn"
              >
                <img className="h-5 w-5  " src={img3} />
              </a>
              <a
                href="https://www.facebook.com/profile.php"
                aria-label="Infinity"
              >
                <img className="h-5 w-5  " src={img8} />
              </a>
              <a
                href="https://www.instagram.com/theassigner/"
                aria-label="Instagram"
              >
                <img className="h-5 w-5  " src={img4} />
              </a>
              <a
                href="https://twitter.com/the_assigner"
                aria-label="X (Twitter)"
              >
                <img className="h-5 w-5" src={img5} />
              </a>
              <a
                href="https://whatsapp.com/channel/0029VaaJiRRKAwEshFl9r30c"
                aria-label="WhatsApp"
              >
                <img className="h-5 w-5 " src={img6} />
              </a>
              <a href="https://t.me/assigmentmaker" aria-label="Telegram">
                <img className="h-5 w-5 " src={img7} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="mt-4 flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-2">
          <input
            type="email"
            placeholder="Your email here"
            className="p-2 w-auto md:w-auto flex-1 rounded-md border border-gray-300 text-gray-800"
          />
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600">
            Subscribe
          </button>
        </div>
        <div className="mt-6 flex justify-center items-center space-x-4 max-sm:w-full bg-black h-8">
          <div className="flex space-x-1  text-white text-xl mr-4 gap-3 max-sm:gap-3">
            <a
              href="https://www.linkedin.com/company/theassigner/"
              aria-label="LinkedIn"
            >
              <img className="h-5 w-5  " src={img3} />
            </a>
            <a
              href="https://www.facebook.com/profile.php"
              aria-label="Infinity"
            >
              <img className="h-5 w-5  " src={img8} />
            </a>
            <a
              href="https://www.instagram.com/theassigner/"
              aria-label="Instagram"
            >
              <img className="h-5 w-5  " src={img4} />
            </a>
            <a href="https://twitter.com/the_assigner" aria-label="X (Twitter)">
              <img className="h-5 w-5" src={img5} />
            </a>
            <a
              href="https://whatsapp.com/channel/0029VaaJiRRKAwEshFl9r30c"
              aria-label="WhatsApp"
            >
              <img className="h-5 w-5 " src={img6} />
            </a>
            <a href="https://t.me/assigmentmaker" aria-label="Telegram">
              <img className="h-5 w-5 " src={img7} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
