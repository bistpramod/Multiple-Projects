// src/services/api.js
const API_KEY = "6bf98dc26ad8a68f72f13861cb88391b"; // your TMDB API key
const BASE_URL = "https://api.themoviedb.org/3";

// ✅ Fetch popular movies
export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  if (!response.ok) throw new Error("Failed to fetch popular movies");
  const data = await response.json();
  return data.results;
};

// ✅ Search movies (accepts query as parameter)
export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  if (!response.ok) throw new Error("Failed to fetch search results");
  const data = await response.json();
  return data.results;
};
