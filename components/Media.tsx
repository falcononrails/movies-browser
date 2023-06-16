import { POSTER_IMAGE_BASE } from "@constants/constants";
import React from "react";

interface Props {
  title: string;
  posterPath: string;
  voteAverage: string;
}

export default function Media({ title, posterPath, voteAverage }: Props) {
  return (
    <div className="h-100 w-50">
      <img
        className="hover:opacity-75 transition easy-in-out rounded"
        src={POSTER_IMAGE_BASE + posterPath}
        alt={title}
      ></img>
      <h4 className="text-white mt-2 hover:text-gray-300 font-heading">
        {title}
      </h4>
      <div className="flex">
        <svg className="fill-current text-orange-500 w-4" viewBox="0 0 24 24">
          <g data-name="Layer 2">
            <path
              d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
              data-name="star"
            />
          </g>
        </svg>
        <h4 className="text-white ml-1 text-sm font-heading">
          {parseFloat(voteAverage).toFixed(1)}
        </h4>
      </div>
    </div>
  );
}
