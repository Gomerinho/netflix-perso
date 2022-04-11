const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=76241a497f4f863ec2aa20ac04428341';

export async function getGenresByMovieId(id) {
  return await fetch(`${API_URL}/movie/${id}${API_KEY}&language=fr`)
    .then(res => res.json())
    .then(data => data.genres)
    .catch(err => console.log(err));
}

export async function getAllGenres() {
  return await fetch(`${API_URL}/genre/movie/list${API_KEY}&language=fr`)
    .then(res => res.json())
    .then(data => data.genres)
    .catch(err => console.log(err));
}

export async function getMoviesByGenre(genreID) {
  return await fetch(
    `${API_URL}/discover/movie${API_KEY}&language=fr&with_genres=${genreID}`
  )
    .then(res => res.json())
    .then(data => data.results)
    .catch(err => console.log(err));
}

export async function getBackdropImage(movieId) {
  return await fetch(
    `${API_URL}/movie/${movieId}/images${API_KEY}&language=fr&image&include_image_language=fr,en`
  )
    .then(res => res.json())
    .then(data => data.backdrops[0].file_path);
}

export async function getPopularMoviesTheMovieDB() {
  return await fetch(`${API_URL}/movie/popular${API_KEY}&language=fr&page=1`)
    .then(res => res.json())
    .then(data => data.results)
    .catch(err => console.log(err));
}

export async function getNetflixMovies() {
  return await fetch(
    `${API_URL}/discover/movie${API_KEY}&language=fr&with_networks=213`
  )
    .then(res => res.json())
    .then(data => data.results)
    .catch(err => console.log(err));
}

export async function getMoviesById(id) {
  return await fetch(`${API_URL}/movie/${id}${API_KEY}&language=fr`)
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err));
}
