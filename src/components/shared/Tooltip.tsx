"use client";

import { useState } from "react";

type TooltipProps = {
  children: React.ReactNode;
  customerId: string;
};

const Tooltip = ({ children, customerId }: TooltipProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(customerId).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div
      className="group relative inline w-auto cursor-pointer"
      onClick={handleCopy}
    >
      {children}

      <span
        className={`${
          copied
            ? "bg-green-100 text-green-900 w-6ch"
            : "bg-gray-200 text-gray-900/80 w-4ch"
        } opacity-0 group-hover:opacity-100 px-4 py-1 rounded-md absolute top-5 whitespace-nowrap shadow-md transition-all duration-300 ease-in-out font-semibold text-sm z-10 cursor-pointer`}
        style={{ left: "5rem" }}
      >
        {copied ? "Copied" : "Copy"}
      </span>
    </div>
  );
};

export default Tooltip;
