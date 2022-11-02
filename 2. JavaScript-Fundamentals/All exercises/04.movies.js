function movies(array) {
  let movies = [];

  array.forEach((el) => {
    if (el.includes("addMovie")) {
      let movie = el.replace("addMovie ", "");
      movies.push({ name: movie });
    } else if (el.includes("directedBy")) {
      let [currentMovie, director] = el.split(" directedBy ");

      movies.forEach((obj) => {
        if (obj.name === currentMovie) {
          obj.director = director;
        }
      });
    } else if (el.includes("onDate")) {
      let [currentMovie, date] = el.split(" onDate ");

      movies.forEach((obj) => {
        if (obj.name === currentMovie) {
          obj.date = date;
        }
      });
    }
  });

  movies.forEach((obj) => {
    if ("name" in obj && "director" in obj && "date" in obj) {
      console.log(JSON.stringify(obj));
    }
  });
}
movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
