import React from "react";
import { FaEnvelope } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
const ContactUs = () => {
  const footerCat = [
    "Home",
    "Menu",
    "Shop",
    "About",
    "Features",
    "Blog",
    "Shortcodes",
    "Contact",
  ];
  return (
    <div className="bg-[#a94421] flex flex-col items-center w-full">
      {/* Section Container */}
      <div className="w-[200px] bg-[#a94421] space-y-2 ">
        {/* Heading */}
        <h2 className=" text-[24px] font-[lobster] mb-6 text-[#a0bd57]">
          Contact Us
        </h2>

        {/* Google Maps Placeholder */}

        <iframe
          width="100%"
          height="220"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(chinggis)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps vehicle tracker</a>
        </iframe>

        {/* Contact Details */}
        <div className="text-yellow-200 text-lg space-y-4 ">
          {/* Address */}
          <div className="flex  space-x-3 items-center">
            <span className="text-[#a0bd57] text-[13px]">
              <IoLocationSharp className="size-[18px]" />
            </span>
            <p className="text-[13px]">
              <span className="font-bold text-[13px] text-yellow-100">
                Address:
              </span>{" "}
              143 - 158, Bernie Road, Kansas, US
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-3">
            <span className="text-[#a0bd57] text-[13px]">
              <FaPhone />
            </span>
            <p className="text-[13px]">
              <span className="font-bold text-[13px] text-yellow-100">
                Phone:
              </span>{" "}
              020 7326 4987
            </p>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-3">
            <span className="text-[#a0bd57] text-[13px]">
              <FaEnvelope />
            </span>
            <p className="text-[13px]">
              <span className="font-bold text-[13px] text-yellow-100">
                Mail:
              </span>{" "}
              <a
                href="mailto:enquiries@gmail.com"
                className="text-yellow-100 underline hover:text-yellow-300"
              >
                enquiries@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center py-6">
          <h3 className="text-[#a0bd57] text-[24px] font-[lobster] mb-4 float-left">
            We are Social:
          </h3>
          <div className="flex justify-between w-[200px]">
            {/* Social Icons */}
            <a href="">
              <img src="/twitter.png" className="text-blue-500 "></img>
            </a>
            <a href="">
              <img src="/google.png" className="text-red-600 "></img>
            </a>
            <a href="https://www.facebook.com/">
              <img src="/facebook.png" className="text-blue-700 "></img>
            </a>
            <a href="">
              <img src="/pinterest.png" className="text-red-500 "></img>
            </a>
          </div>
        </div>
      </div>
      <footer className="bg-[#803418] w-full flex flex-col items-center py-6 text-center">
        {/* Copyright Text */}
        <p className="text-yellow-200 text-sm mb-4">
          © 2013 BuddhaThemes. Bella Motel
        </p>

        {/* Navigation Links */}
        <nav className="text-yellow-100 text-sm w-[200px]">
          <ul className="flex flex-wrap justify-center space-x-2 ">
            <li>
              <a
                href="#"
                className="hover:text-yellow-300 transition duration-200"
              >
                Home
              </a>
            </li>
            <span>/</span>
            <li>
              <a
                href="#"
                className="hover:text-yellow-300 transition duration-200"
              >
                Menu
              </a>
            </li>
            <span>/</span>
            <li>
              <a
                href="#"
                className="hover:text-yellow-300 transition duration-200"
              >
                Shop
              </a>
            </li>
            <span>/</span>

            <li>
              <a
                href="#"
                className="hover:text-yellow-300 transition duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-yellow-300 transition duration-200"
              >
                Features
              </a>
            </li>
            <span>/</span>

            <li>
              <a
                href="#"
                className="hover:text-yellow-300 transition duration-200"
              >
                Blog
              </a>
            </li>
            <span>/</span>

            <li>
              <a
                href="#"
                className="hover:text-yellow-300 transition duration-200"
              >
                Shortcodes
              </a>
            </li>
            <span>/</span>

            <li>
              <a
                href="#"
                className="hover:text-yellow-300 transition duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default ContactUs;
