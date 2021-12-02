import { BASE_URL } from "@constants/constants";

const getTrending = async (endpoint) => {
  try {
    const res = await fetch(
      `${BASE_URL}${endpoint}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export default getTrending;
