import { MOVIE } from "@constants/constants";
import getDetails from "@lib/getDetails";

const movieDetails = {
  adult: false,
  backdrop_path: "/mFbS5TwN95BcSEfiztdchLgTQ0v.jpg",
  belongs_to_collection: null,
  budget: 100000000,
  genres: [
    {
      id: 36,
      name: "History",
    },
    {
      id: 28,
      name: "Action",
    },
    {
      id: 18,
      name: "Drama",
    },
  ],
  homepage: "https://www.20thcenturystudios.com/movies/the-last-duel",
  id: 617653,
  imdb_id: "tt4244994",
  original_language: "en",
  original_title: "The Last Duel",
  overview:
    "King Charles VI declares that Knight Jean de Carrouges settle his dispute with his squire, Jacques Le Gris, by challenging him to a duel.",
  popularity: 281.369,
  poster_path: "/zjrJE0fpzPvX8saJXj8VNfcjBoU.jpg",
  production_companies: [
    {
      id: 127928,
      logo_path: "/h0rjX5vjW5r8yEnUBStFarjcLT4.png",
      name: "20th Century Studios",
      origin_country: "US",
    },
    {
      id: 1645,
      logo_path: "/6Ry6uNBaa0IbbSs1XYIgX5DkA9r.png",
      name: "Scott Free Productions",
      origin_country: "GB",
    },
    {
      id: 29313,
      logo_path: "/1whsMqm5kAPxKBhnTlKNcbXBQJK.png",
      name: "Pearl Street Films",
      origin_country: "US",
    },
    {
      id: 22213,
      logo_path: "/qx9K6bFWJupwde0xQDwOvXkOaL8.png",
      name: "TSG Entertainment",
      origin_country: "US",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "GB",
      name: "United Kingdom",
    },
    {
      iso_3166_1: "US",
      name: "United States of America",
    },
  ],
  release_date: "2021-10-13",
  revenue: 27000000,
  runtime: 152,
  spoken_languages: [
    {
      english_name: "French",
      iso_639_1: "fr",
      name: "Français",
    },
    {
      english_name: "English",
      iso_639_1: "en",
      name: "English",
    },
    {
      english_name: "Latin",
      iso_639_1: "la",
      name: "Latin",
    },
  ],
  status: "Released",
  tagline: "The true story of a woman who defied a nation and made history.",
  title: "The Last Duel",
  video: false,
  vote_average: 7.6,
  vote_count: 472,
};

const unmockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = () =>
    //@ts-ignore
    Promise.resolve({
      json: () => Promise.resolve(movieDetails),
    });
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

it("getDetails => ", async () => {
  const movieId = "617653";
  const json = await getDetails(MOVIE, movieId);

  expect(json).toEqual(movieDetails);

  delete global.fetch;
});
