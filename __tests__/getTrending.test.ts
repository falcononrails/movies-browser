import getTrending from "@lib/getTrending";

const trendingMovies = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: "/mFbS5TwN95BcSEfiztdchLgTQ0v.jpg",
      genre_ids: [36, 28, 18],
      id: 617653,
      original_language: "en",
      original_title: "The Last Duel",
      overview:
        "King Charles VI declares that Knight Jean de Carrouges settle his dispute with his squire, Jacques Le Gris, by challenging him to a duel.",
      poster_path: "/zjrJE0fpzPvX8saJXj8VNfcjBoU.jpg",
      release_date: "2021-10-13",
      title: "The Last Duel",
      video: false,
      vote_average: 7.6,
      vote_count: 469,
      popularity: 281.369,
      media_type: "movie",
    },
    {
      genre_ids: [878, 28, 12],
      original_language: "en",
      original_title: "Venom: Let There Be Carnage",
      poster_path: "/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
      video: false,
      id: 580489,
      overview:
        "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
      release_date: "2021-09-30",
      vote_count: 3726,
      vote_average: 7.2,
      adult: false,
      backdrop_path: "/70nxSw3mFBsGmtkvcs91PbjerwD.jpg",
      title: "Venom: Let There Be Carnage",
      popularity: 13071.277,
      media_type: "movie",
    },
  ],
};

const unmockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = () =>
    //@ts-ignore
    Promise.resolve({
      json: () => Promise.resolve(trendingMovies),
    });
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

it("getTrending => ", async () => {
  const endpoint = "trending/movie/day";
  const json = await getTrending(endpoint);

  expect(json).toEqual(trendingMovies);

  delete global.fetch;
});
