import Link from "next/link";

const NotFound = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-primary-500 bg-fixed bg-cover bg-bottom overflow-hidden"
      style={{
        backgroundImage:
          "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 1600 900%27%3E%3Cpolygon fill=%27%23f0b608%27 points=%27957 450 539 900 1396 900%27/%3E%3Cpolygon fill=%27%23e6d710%27 points=%27957 450 872.9 900 1396 900%27/%3E%3Cpolygon fill=%27%23e7af05%27 points=%27-60 900 398 662 816 900%27/%3E%3Cpolygon fill=%27%23e7d808%27 points=%27337 900 398 662 816 900%27/%3E%3Cpolygon fill=%27%23d8a408%27 points=%271203 546 1552 900 876 900%27/%3E%3Cpolygon fill=%27%23f1e213%27 points=%271203 546 1552 900 1162 900%27/%3E%3Cpolygon fill=%27%23f0b607%27 points=%27641 695 886 900 367 900%27/%3E%3Cpolygon fill=%27%23e4d506%27 points=%27587 900 641 695 886 900%27/%3E%3Cpolygon fill=%27%23eab822%27 points=%271710 900 1401 632 1096 900%27/%3E%3Cpolygon fill=%27%23e8da14%27 points=%271710 900 1401 632 1365 900%27/%3E%3Cpolygon fill=%27%23e8b008%27 points=%271210 900 971 687 725 900%27/%3E%3Cpolygon fill=%27%23edde14%27 points=%27943 900 1210 900 971 687%27/%3E%3C/svg%3E')",
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
        <Link
          className="bg-yellow-500 px-5 py-3 text-sm shadow-sm font-medium tracking-wider text-gray-50 rounded-full hover:shadow-lg"
          href="/"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
