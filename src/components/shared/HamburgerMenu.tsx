"use client";

import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import NavItems from "./NavItems";
import Image from "next/image";
import Link from "next/link";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSheet = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      // Disable scrolling when the sheet is open
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling when the sheet is closed
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div className="relative md:hidden">
      {/* Sheet Trigger */}
      <button
        aria-label="Open Navigation Menu"
        className={`p-2 rounded-full hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ring-offset-1 transition-transform duration-500 ${
          isOpen && "-rotate-180"
        }`}
        onClick={toggleSheet}
      >
        <HiOutlineMenuAlt3 size={20} />
      </button>

      {/* Full-screen overlay with blur effect */}
      {isOpen && (
        <div className="fixed z-40 w-[100vw] h-[100dvh] inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-1000"></div>
      )}

      {/* Sliding Sheet */}
      <div
        className={`fixed h-[100dvh] z-50 top-0 right-0 p-2 w-72 flex flex-col bg-gray-100 transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          aria-label="Close Navigation Menu"
          className={`m-1 p-0.5 block ml-auto focus:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded-full transition-all duration-300 ${
            isOpen ? "-rotate-180" : "rotate-180"
          }`}
          onClick={toggleSheet}
        >
          <IoMdClose size={20} className="text-gray-600 hover:text-gray-900" />
        </button>

        <div className="flex-1 px-2 bg-inherit md:hidden">
          <Link
            href="/"
            tabIndex={-1}
            className="w-full flex flex-nowrap gap-2"
          >
            <Image
              src="/assets/images/logo.svg"
              alt="Eventura Logo"
              width={120}
              height={120}
              className="w-7 h-auto"
            />
            <Image
              src="/assets/images/Eventura.svg"
              alt="Eventura Logo"
              width={350}
              height={65}
              className="w-20 h-auto"
            />
          </Link>

          {/* Separator */}
          <div className="w-full border border-gray-300 my-4"></div>

          <NavItems toggleSheet={toggleSheet} />
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
