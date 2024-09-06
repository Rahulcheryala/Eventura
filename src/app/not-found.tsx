"use client";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-primary-500 bg-fixed bg-cover bg-bottom overflow-hidden"
      style={{
        backgroundImage: "url('assets/images/404.svg')",
      }}
    >
      <div className="text-gray-50 text-center -mt-60">
        <div className="relative">
          <h1 className="text-9xl tracking-tight font-sans font-bold">
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </h1>
          <span className="absolute top-0 -ml-16 -mt-1 text-gray-300 font-semibold">
            Oops!
          </span>
        </div>
        <h5 className="text-gray-300 font-semibold -mr-16 -mt-1">
          Page not found!
        </h5>
        <p className="text-gray-100 mt-2 mb-6">
          We are sorry, but the page you requested was not found
        </p>
        <button
          className="bg-yellow-500 px-5 py-3 text-sm shadow-sm font-medium tracking-wider text-gray-50 rounded-full hover:shadow-lg"
          onClick={() => router.back()}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
