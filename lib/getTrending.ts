import axios from "axios";

const getTrendingMovies = async (endpoint) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/${endpoint}?api_key=${process.env.API_KEY}`
      
    );
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export default getTrendingMovies;
