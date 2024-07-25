import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t select-none">
      <div className="wrapper flex-between flex flex-col sm:flex-row gap-3">
        <Link href="/" className="w-fit focus:outline-none">
          <Image
            src="/assets/images/logo.svg"
            alt="Evently Logo"
            width={518}
            height={120}
            className="w-24 h-auto"
          />
        </Link>
        <p className="text-sm text-gray-500 tracking-wide">
          2024 Evently. All Rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
