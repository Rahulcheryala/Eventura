import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
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
        </Link>

        <SignedIn>
          <nav className="md:block hidden w-full max-w-sm">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="w-fit flex">
          <SignedIn>
            <UserButton />
            <HamburgerMenu />
          </SignedIn>

          <SignedOut>
            <Button asChild className="rounded-full text-white" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
