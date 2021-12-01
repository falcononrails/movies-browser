import getTrending from "@lib/getTrending";
import { Movie, TVShow } from "@lib/types";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Media from "./Media";

interface Props {
  results: Movie[] | TVShow[];
  title: string;
  type: string;
}
export default function MediaList({ results, title, type }: Props) {
  return (
    <>
      <h1 className="container text-3xl font-heading font-extrabold ml-3 mt-10 md:mt-8">
        {title}
      </h1>
      <div className="my-auto mx-auto px-4 pt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-7 gap-8">
        {results?.map((item) => {
          return (
            <Link href={`${type}/${item.id}`} key={item.id}>
              <Media
                key={item.id}
                title={item.title ? item.title : item.name}
                posterPath={item.poster_path}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
}
