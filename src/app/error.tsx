"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

type ErrorHandlerProps = {
  error: Error;
  reset: () => void;
};

const ErrorHandler = ({ error, reset }: ErrorHandlerProps) => {
  return (
    <div className="w-full h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden">
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center">
        <p className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-primary-500">
          500
        </p>
        <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-red-500 mt-2">
          Server Error !
        </p>
        <p className="text-base md:text-lg lg:text-xl text-gray-500 mt-12">
          Whoops, something went wrong on our servers.
        </p>

        {/* Error codes and message and suggested solutions */}
        <div className="mt-4 grid grid-cols-[fit-content(100%),1ch,fit-content(100%)] text-base md:text-lg font-semibold justify-center items-center gap-2">
          <span className=" text-red-500">Error Message</span>
          <span className=" text-red-500">:</span>
          <p className=" text-gray-600 font-light text-sm">{error.message}</p>
          {/* <span className=" text-green-600">Suggested Solution</span>
          <span className=" text-green-600">:</span>
          <p className=" text-gray-600">Please try again later.</p> */}
          <Button
            onClick={reset}
            className="rounded-full mt-4 col-span-3 w-fit place-self-center"
          >
            Try Again
          </Button>
        </div>
      </div>

      <div className="w-full lg:w-1/2 lg:h-full flex items-center p-4">
        <Image
          src="/assets/icons/error.svg"
          alt="500 Server Error"
          width={1120}
          height={700}
          className="w-[500px] h-[500px] min-w-96 aspect-square object-contain"
        />
      </div>
    </div>
  );
};

export default ErrorHandler;
