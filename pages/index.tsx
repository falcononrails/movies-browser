import getTrendingMovies from "@lib/getTrendingMovies";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Movie from "@components/Movie";
import { Media } from "@lib/types";
import Navbar from "@components/Navbar";
import MoviesList from "@components/MoviesList";
import Footer from "@components/Footer";
import getMoviesByName from "@lib/getMoviesByName";

export default function Home({ initialMovies }: any) {
  const [results, setResults] = useState<any>([]);

  useEffect(() => {
    setResults(initialMovies?.results);
  }, [initialMovies]);


  const handleInput = (event: any) => {
    
  }
  const search = async (event: any) => {
    event.preventDefault();
  };

  return (
    <div className="bg-black">
      <Navbar search={search} />
      <MoviesList results={results} />
      <Footer />
    </div>
  );
}

export const getServerSideProps = async () => {
  const initialMovies = await getTrendingMovies();

  return {
    props: {
      initialMovies,
    },
  };
};
