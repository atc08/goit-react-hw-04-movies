import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '2e7ddd707cda482bd62363d7d16dcf77';
const BASE_LANG = 'language=en-US';

axios.defaults.baseURL = BASE_URL;

const getTrending = async ({ page = 1 }) => {
  try {
    const { data } = await axios.get(
      `trending/all/week?api_key=${API_KEY}&page=${page}`,
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

const getSearchMovies = async ({ query, page = 1 }) => {
  try {
    const { data } = await axios.get(
      `search/movie?api_key=${API_KEY}&query=${query}&${BASE_LANG}&page=${page}&include_adult=false`,
    );
    return data;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

const getMovieDetails = async ({ id }) => {
  try {
    const { data } = await axios.get(
      `movie/${id}?api_key=${API_KEY}&${BASE_LANG}`,
    );
    return data;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

const getMovieCast = async ({ id }) => {
  try {
    const { data } = await axios.get(
      `movie/${id}/credits?api_key=${API_KEY}&${BASE_LANG}`,
    );
    return data;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

const getMovieReview = async ({ id }) => {
  try {
    const { data } = await axios.get(
      `movie/${id}/reviews?api_key=${API_KEY}&${BASE_LANG}&page=1`,
    );
    return data;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

export default {
  getTrending,
  getSearchMovies,
  getMovieDetails,
  getMovieCast,
  getMovieReview,
};
