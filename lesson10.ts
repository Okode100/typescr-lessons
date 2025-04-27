type Movie = {
    title: string;
    director: string;
    releaseYear: number;
}

const myFavouriteMovies: Movie = {
    title: "Inception",
    director: "Christopher Nolan",
    releaseYear: 2010

}
//My favorite movie is Inception directed by Christopher Nolan, released in 2010.
console.log(`My favorite movie is ${myFavouriteMovies.title} directed by ${myFavouriteMovies.director}, released in ${myFavouriteMovies.releaseYear}.`);