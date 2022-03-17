import { Component, OnInit, Output } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {

  movies=[] as any;
  private currentMovie!:Movie;

  @Output() onSelectedMovie: EventEmitter<Movie>;

  constructor(private movieService: MovieService) {
    this.onSelectedMovie=new EventEmitter();
   }

  ngOnInit() {
    this.movies = this.movieService.getMovies();
    console.log(this.movies);
  }

  selectMovie(myMovie:Movie):void {
    console.log(myMovie);
    this.currentMovie=myMovie;
    this.onSelectedMovie.emit(myMovie);
  }

  isSelected(movie:Movie): boolean {
    if (!movie || !this.currentMovie) {
      return false;
    }
    return movie.title == this.currentMovie.title;
  }

}
