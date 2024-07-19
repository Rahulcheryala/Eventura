"use client";

import { useState } from "react";
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

  return (
    <div className="relative md:hidden">
      {/* Sheet Trigger */}
      <button
        className={`p-2 rounded-full hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ring-offset-1 transition-transform duration-500 ${
          isOpen && "-rotate-180"
        }`}
        onClick={toggleSheet}
      >
        <HiOutlineMenuAlt3 size={20} />
      </button>

      {/* Full-screen overlay with blur effect */}
      {isOpen && (
        <div className="fixed z-40 inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-1000"></div>
      )}

      {/* Sliding Sheet */}
      <div
        className={`fixed z-50 top-0 right-0 p-2 w-72 h-full flex flex-col bg-gray-100 transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className={`m-1 p-0.5 block ml-auto focus:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded-full transition-all duration-300 ${
            isOpen ? "-rotate-180" : "rotate-180"
          }`}
          onClick={toggleSheet}
        >
          <IoMdClose size={20} className="text-gray-600 hover:text-gray-900" />
        </button>

        <div className="flex-1 px-2 bg-inherit md:hidden">
          <Link href="/" tabIndex={-1} className="w-full">
            <Image
              src="/assets/images/logo.svg"
              alt="Evently Logo"
              width={128}
              height={38}
            />
          </Link>

          {/* Separator */}
          <div className="w-full border border-gray-300 my-4"></div>

          <NavItems />
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
