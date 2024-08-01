import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t select-none">
      <div className="wrapper flex-between flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="w-fit focus:outline-none flex flex-nowrap gap-2"
        >
          <Image
            src="/assets/images/logo.svg"
            alt="Eventura Logo"
            width={1000}
            height={120}
            className="w-6 h-auto "
          />
          <Image
            src="/assets/images/Eventura.svg"
            alt="Eventura Logo"
            width={518}
            height={120}
            className="w-24 h-auto"
          />
        </Link>
        <p className="text-sm text-gray-500 tracking-wide">
          2024 Eventura. All Rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
