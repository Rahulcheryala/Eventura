"use client";

import { useEffect, useState, useRef } from "react";
import { IoIosSearch } from "react-icons/io";
import { Input } from "../ui/input";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

const Search = ({
  placeholder = "Search Events...",
}: {
  placeholder?: string;
}) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    // Set a timeout to delay the execution of the URL update and hence the API call to the server
    // By doing this, we can prevent multiple API calls when the user types quickly
    const delayDebounceFn = setTimeout(() => {
      let newURL = "";

      // If there's a query, update the URL with the query parameter
      if (query) {
        newURL = formUrlQuery({
          params: searchParams.toString(), // Convert search parameters to a string
          key: "query", // The key to update
          value: query, // The value to set for the key
        });
      } else {
        // If there's no query, remove the query parameter from the URL
        newURL = removeKeysFromQuery({
          params: searchParams.toString(), // Convert search parameters to a string
          keysToRemove: ["query"], // The keys to remove
        });
      }

      // Push the new URL to the router without scrolling the page
      router.push(newURL, { scroll: false });
    }, 300); // Delay of 300 milliseconds

    // Clear the timeout if the effect is cleaned up (e.g., the query changes before 300ms)
    return () => {
      clearTimeout(delayDebounceFn);
    };
  }, [query, searchParams, router]); // Dependencies array

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && (event.key === "k" || event.key === "K")) {
        event.preventDefault(); // Prevent default action like browser's search
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="flex-center md:min-h-13 w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2 relative">
      <Input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full pl-10 rounded-full bg-transparent border-0 outline-offset-0 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none focus:ring-0 md:placeholder:text-[1rem] focus:placeholder:text-primary-500 peer"
      />
      <IoIosSearch
        size={24}
        className="absolute start-5 text-grey-500 peer-focus:text-primary-500"
      />

      <span className="bg-gray-200 px-3 rounded-md hidden sm:flex select-none">
        <pre>Ctrl</pre>
        <pre className="mx-1">+</pre>
        <span>K</span>
      </span>
    </div>
  );
};

export default Search;
