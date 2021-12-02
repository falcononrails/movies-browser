import React, { useCallback, useState } from "react";
import { debounce } from "lodash";
import Link from "next/link";
import { SearchResult} from "../types/shared";
import { setSearchResults } from "@lib/setSearchResults";

const SearchBar = () => {
  const [results, setResults] = useState<SearchResult[]>([]);

  const delayedQuery = useCallback(
    debounce((query) => setSearchResults(query, setResults), 400),
    []
  );

  const handleChange = (e) => {
    delayedQuery(e.target.value);
  };

  const resultSuggestions = results?.map((result) => (
    <Link href={result.path} key={result.path}>
      <div className="text-gray-100 bg-gray-700 px-3 py-2 cursor-pointer hover:bg-gray-800 overflow-hidden font-heading font-medium rounded-md">
        <p>{result.title}</p>
      </div>
    </Link>
  ));

  return (
    <>
      <div className="relative flex w-full flex-wrap items-stretch mb-2 mt-4">
        <span className="z-10 h-full leading-snug font-normal absolute text-center text-gray-200 bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Search for whatever you want..."
          className="px-3 py-3 relative rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10 placeholder-gray-200 bg-gray-700 text-gray-200"
          onChange={handleChange}
          aria-label="Search for whatever you want..."
        />
        <div className="flex w-full bg-gray-700 z-10 rounded-md flex-col absolute top-12 left-0">
          {resultSuggestions}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
