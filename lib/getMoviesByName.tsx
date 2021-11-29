import axios from "axios";

const getMoviesByName = async (searchTerm: string) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie/week?api_key=${process.env.API_KEY}&language=en-US&query=${searchTerm}`
    );
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export default getMoviesByName;
