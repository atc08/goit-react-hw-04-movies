import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '2e7ddd707cda482bd62363d7d16dcf77';
const BASE_LANG = 'en-US';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  language: BASE_LANG,
};

const getTrending = async ({ currentPage = 1 }) => {
  try {
    const { data } = await axios.get(`trending/all/day?page=${currentPage}`);
    const { results, page, total_pages } = data;
    return { results, page, total_pages };
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

const getSearchMovies = async ({ searchQuery = '' }) => {
  try {
    const { data } = await axios.get(
      `search/movie?query=${searchQuery}&include_adult=false`,
    );
    return data;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

const getMovieDetails = async ({ id }) => {
  try {
    const data = await axios.get(`movie/${id}`);
    return data;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

const getMovieCast = async ({ id }) => {
  try {
    const data = await axios.get(`movie/${id}/credits`);
    return data;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

const getMovieReview = async ({ id }) => {
  try {
    const data = await axios.get(`movie/${id}/reviews?page=1`);
    return data;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

export {
  getTrending,
  getSearchMovies,
  getMovieDetails,
  getMovieCast,
  getMovieReview,
};
