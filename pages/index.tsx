import { useEffect, useState } from "react";
import SearchBar from "@components/SearchBar";
import MediaList from "@components/MediaList";
import getTrending from "@lib/getTrending";
import { GetServerSideProps } from "next";
import { Movie } from "types/movie";
import { TVShow } from "types/tv";

export default function Home({ initialMovies, initialSeries }: any) {
  const [moviesResults, setMoviesResults] = useState<Movie[]>();
  const [seriesResults, setSeriesResults] = useState<TVShow[]>();

  useEffect(() => {
    setMoviesResults(initialMovies?.results);
    setSeriesResults(initialSeries?.results);
  }, [initialMovies, initialSeries]);

  return (
    <div className="mb-10 ml-4 lg:ml-8 mr-4 lg:mr-8 bg-gray-900 text-gray-100">
      <SearchBar />
      <MediaList
        results={moviesResults}
        title={"Trending Movies"}
        type="movie"
        level={1}
      />
      <MediaList
        results={seriesResults}
        title={"Trending Series"}
        type="tv"
        level={2}
      />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const initialMovies = await getTrending("trending/movie/day");
  const initialSeries = await getTrending("trending/tv/day");

  return {
    props: {
      initialMovies,
      initialSeries,
    },
  };
};
