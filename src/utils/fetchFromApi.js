import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
// const rapidApiKey = import.meta.env.REACT_APP_RAPID_API_URL;
const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_REACT_APP_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromApi = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    console.log(data);
    if (data && data.items) {
      return data;
    } else {
      throw new Error("Unexpected data format from API");
    }
  } catch (error) {
    console.error("Error fetching Base API ", error);
    return [];
  }
};

// export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

// const options = {
//   params: {
//     maxResults: 50,
//   },
//   headers: {
//     "X-RapidAPI-Key": import.meta.env.REACT_APP_RAPID_API_URL,
//     "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
//   },
// };

// export const fetchFromApi = async (url) => {
//   const { data } = await axios.get(`${BASE_URL}/${url}`, options);

//   return data;
// };
