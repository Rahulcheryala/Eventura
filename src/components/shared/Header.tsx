"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import HamburgerMenu from "./HamburgerMenu";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import ThemeSwitcher from "./ThemeSwitcher";
import NameComponent from "./NameComponent";

const Header = () => {
  const { theme } = useTheme();

  return (
    <header className="w-full dark:bg-neutral-800 border-b">
      <div className="wrapper flex-between">
        {/* App logo */}
        <Link
          href="/"
          className="w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md ring-offset-4 flex flex-nowrap gap-2.5"
        >
          <Image
            src="/assets/images/logo.svg"
            alt="Eventura Logo"
            width={120}
            height={120}
            className="w-8 h-auto"
          />
          <Image
            src="/assets/images/Eventura.svg"
            alt="Eventura Logo"
            width={350}
            height={65}
            priority
            className="w-24 h-auto"
          />
          {/* <div className="w-fit h-auto scale-[0.40] origin-left">
            <NameComponent />
          </div> */}
        </Link>

        {/* Navigation menu if user signed in */}
        <SignedIn>
          <nav className="md:block hidden w-full max-w-sm">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="w-fit flex items-center gap-2">
          {/* <ThemeSwitcher /> */}

          <SignedIn>
            <UserButton
              appearance={{
                baseTheme: theme === "dark" ? dark : undefined,
                elements: {
                  avatarBox: {
                    width: "2.25rem",
                    height: "2.25rem",
                  },
                },
              }}
            />
            <HamburgerMenu />
          </SignedIn>

          {/* Login button if user signed out */}
          <SignedOut>
            <Button
              asChild
              className="rounded-full text-white text-lg"
              size="lg"
            >
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
