import axios from "axios";

const getTrendingMovies = async () => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.API_KEY}`
      
    );
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export default getTrendingMovies;
