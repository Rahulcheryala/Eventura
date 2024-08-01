"use client";
import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemsProps = {
  toggleSheet?: () => void;
};

const NavItems = ({ toggleSheet }: NavItemsProps) => {
  const pathname = usePathname();

  return (
    <ul className=" w-full flex flex-col md:flex-row md:items-center items-start gap-5">
      {headerLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <li
            key={link.label}
            className={`w-full flex-center ${
              isActive && "text-primary-500 p-medium-16"
            }`}
          >
            <Link
              href={link.href}
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md md:rounded-full md:px-4 px-2 py-1 w-full whitespace-nowrap md:text-center"
              onClick={toggleSheet}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
