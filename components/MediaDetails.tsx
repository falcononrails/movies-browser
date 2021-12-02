import React, { ReactNode } from "react";
import { ORIGINAL_IMAGE_BASE, POSTER_IMAGE_BASE } from "@constants/constants";
import { Backdrop, Genre } from "../types/shared";

interface Props {
  posterPath: string;
  name: string;
  overview: string;
  tagLine: string;
  backdropPath: string;
  genres: Genre[];
  children: React.ReactElement;
}

export default function MediaDetails({
  posterPath,
  name,
  overview,
  tagLine,
  backdropPath,
  genres,
  children,
}: Props) {
  const genreList = genres.map((genre) => (
    <div
      className="px-4 py-1.5 bg-white bg-opacity-90 text-gray-800 dark:text-gray-200 dark:bg-gray-600 dark:bg-opacity-90 font-semibold rounded-full m-1"
      key={genre.id}
    >
      {genre.name}
    </div>
  ));

  return (
    <div
      className="min-h-screen flex flex-row sm:py-5 px-2 md:py-8 items-center bg-fixed"
      style={{
        backgroundImage: `url(${ORIGINAL_IMAGE_BASE}/${backdropPath})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container sm:px-2 py-10 my-10 sm:my-auto mx-auto flex flex-col bg-gray-900 bg-opacity-80 rounded-3xl">
        <div className="mx-auto">
          <div className="flex flex-col sm:flex-row">
            {/* Poster, Title, Genres and Description */}
            <div className="sm:w-3/6 text-center sm:pr-8 sm:py-8">
              <div className="w-32 rounded-lg overflow-hidden inline-flex items-center justify-center bg-transparent text-gray-400">
                <img
                  src={`${POSTER_IMAGE_BASE}/${posterPath}`}
                  alt={name}
                />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h1 className="font-bold font-heading text-2xl md:text-3xl mt-4 text-gray-200">
                  {name}
                </h1>
                <div className="w-12 h-1 bg-gradient-to-r rounded mt-2 mb-2"></div>
                <div className="flex flex-row flex-wrap justify-center">
                  {genreList}
                </div>
                <p className="mt-2 px-5 font-sans text-md lg:text-lg text-gray-300">
                  {overview}
                </p>
              </div>
            </div>
            {/* Tagline, Vote Average, Number of Seasons */}
            <div className="sm:w-3/6 sm:pl-8 sm:py-8 sm:border-l border-gray-500 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              {/* Rating and No. of Seasons */}
              {children}
              {/* Tagline */}
              <div className="text-center font-heading mt-8">
                <span className="text-4xl">&ldquo;</span>
                <span className="text-2xl font-heading font-semibold">
                  {tagLine}
                </span>
                <span className="text-4xl">&rdquo;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
