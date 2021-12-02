import { BASE_URL } from "@constants/constants";

const getDetails = async (type, id) => {
  try {
    const res = await fetch(
      `${BASE_URL}${type}/${id}?api_key=${process.env.API_KEY}`
    );
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export default getDetails;
