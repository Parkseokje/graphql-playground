const API_URL = 'https://yts.mx/api/v2/list_movies.json';
const API_SUGGESTION_URL = 'https://yts.mx/api/v2/movie_suggestions.json';

import fetch from 'node-fetch';

const getMovies = async (limit) => {
  const movies = await fetch(`${API_URL}?limit=${limit}`)
    .then((res) => res.json())
    .then((json) => json.data.movies);

  return movies;
};

const getSuggestedMovie = async (id) => {
  const movies = await fetch(`${API_SUGGESTION_URL}/?movie_id=${id}`)
    .then(res => res.json())
    .then(json => json.data.movies);

  return movies;
}

export { getMovies, getSuggestedMovie };
