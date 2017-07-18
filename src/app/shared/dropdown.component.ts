import { Movie } from './../movie';
import { MovieService } from './../movie.service';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-custom-dropdown',
    templateUrl: './dropdown.component.html',
})
export class DropdownComponent {
   movies: Movie[];
   constructor(private movieService: MovieService) {} ;

  getMovies(): void {
      this.movieService.getMovies().then(movies => this.movies = movies);
    }

  ngOnInit(): void {
      this.getMovies();
  }

}
