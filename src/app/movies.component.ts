//@ refers to the core components of angularjs
import { Component , OnInit  } from '@angular/core';
import { Movie } from './movie';
import { MovieService } from './movie.service';
import { Router } from '@angular/router';

// Component decorator allows to mark class as an angular component
// components always have a template and only one component can be instantiated per an element in a template
// A component must belong to an NgModule in order for it to be usable by another component or application
//Once Angular sees this, it will know that we want to create a new instance of a component, and it will create our component //according to our configuration.
// @ creates new instances

@Component({
//defines the name of the HTML tag where this component will live.
  selector: 'my-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

// this makes the component available to different class
export class MoviesComponent implements OnInit{
//Create a public property in AppComponent that exposes the heroes for binding.
  movies: Movie[];
  selectedMovie: Movie;

  constructor(private movieService: MovieService,private router: Router) { }

  getMovies(): void {
    this.movieService.getMovies().then(movies => this.movies = movies);
  }

  ngOnInit(): void {
    this.getMovies();
  }

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedMovie.id]);
  }
}
