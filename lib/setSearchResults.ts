import { API_KEY, BASE_URL } from "@constants/constants";
import { SearchResult } from "../types/shared";

const sendQuery = async (api_key: string, query: string) => {
  console.log(
    `${BASE_URL}search/multi?api_key=${api_key}&query=${query}`
  );
  try {
    const res = await fetch(
      `${BASE_URL}search/multi?api_key=${api_key}&query=${query}`
    );
    return res.json();
  } catch (err) {
    console.error(err);
  }
};

export const setSearchResults = async (query: string, setResults) => {
  if (query === "") {
    setResults([]);
    return;
  }
  const data = await sendQuery(process.env.API_KEY, query);
  const list: SearchResult[] = data.results
    ?.filter(
      (results) =>
        results["media_type"] === "tv" || results["media_type"] === "movie"
    )
    ?.map((result) => {
      if (result["media_type"] === "tv")
        return { title: result.name, path: `/tv/${result.id}` };
      if (result["media_type"] === "movie")
        return { title: result["title"], path: `/movie/${result.id}` };
    })
    ?.slice(0, 6);
  setResults(list);
};
