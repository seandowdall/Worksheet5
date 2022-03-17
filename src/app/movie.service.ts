import { Injectable } from '@angular/core';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movie!: Movie;

  constructor() { }

  movieList = [
    new Movie('Spiderman', '2002', 'Sam Raini' ),
    new Movie('Student No: s00210945', '2022','Sean Dowdall' ),
    new Movie('Pulp Fiction','1994', 'Quentin Tarantino' ),
  ]

  getMovies() {
    return this.movieList.sort();
  }

  addMovie(movietitle:string, moviedirector:string , movieyear:string) {
    this.movieList.push(new Movie (movietitle, movieyear, moviedirector));
  }

  ngOnInit(){
    
  }
}
