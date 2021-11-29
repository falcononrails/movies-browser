import { Media } from "@lib/types";
import React from "react";
import Movie from "./Movie";

interface Props {
  results: any;
}
export default function MoviesList({ results }: Props) {
  return (
    <div className=" container mx-auto px-4 pt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 ">
      {results?.map((movie: Media, index: number) => {
        return (
          <Movie
            index={index}
            title={
              movie.title
                ? movie.title
                : movie.original_name
                ? movie.original_name
                : movie.name
                ? movie.name
                : movie.original_title
                ? movie.original_title
                : ""
            }
            overview={movie.overview}
            posterPath={movie.poster_path}
          />
        );
      })}
    </div>
  );
}
