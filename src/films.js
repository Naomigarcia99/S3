const movies = require('./data');

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((movie) => movie.director);
  console.log('EXERCICE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter((movie) => movie.director === director);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let filtro = array.filter((movie) => movie.director === director);
  let suma = filtro.reduce((total, movie) => total + movie.score, 0);
  let media = parseFloat((suma / filtro.length).toFixed(2));

  return media;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  let result = array
    .toSorted((a, b) =>
      a.title
        .toString()
        .toLowerCase()
        .localeCompare(b.title.toString().toLowerCase())
    )
    .map((movie) => movie.title)
    .slice(0, 20);

  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let result = array.toSorted((a, b) =>
    a.year !== b.year
      ? a.year - b.year
      : a.title
          .toString()
          .toLowerCase()
          .localeCompare(b.title.toString().toLowerCase())
  );

  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
