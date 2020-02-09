// API/TMDBApi.js

const API_TOKEN = "517c36d4bf7f89296596cbea1d22af88";

export function getFilmsFromApiWithSearchedText (text) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + '517c36d4bf7f89296596cbea1d22af88' + '&language=fr&query=' + text
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}
  
export function getImageFromApi(name) {
  return 'https://image.tmdb.org/t/p/w300' + name
}

// Récupération du détail d'un film
export function getFilmDetailFromApi (id) {
  return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + '517c36d4bf7f89296596cbea1d22af88' + '&language=fr')
    .then((response) => response.json())
    .catch((error) => console.error(error));
}








