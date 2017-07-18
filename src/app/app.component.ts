import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { count } from 'rxjs/operator/count';
import { MovieService } from './movie.service';
import { Movie } from './movie'

//@Component is an annotation that tells Angular, that the class, which the annotation is attached to, is a component.
@Component({
  selector: 'my-app',
  template: `
  <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/movies" routerLinkActive="active">Movies</a>
      <a routerLink="/plays" routerLinkActive="active">Plays</a>
    </nav>
    <div myHidden>Hello</div>
    <router-outlet></router-outlet>
    <app-custom-dropdown [movies] = "movies"></app-custom-dropdown>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movies list';
  val = false;
  movies: Movie[];

  constructor(private movieService: MovieService) {} ;

  getMovies(): void {
      this.movieService.getMovies().then(movies => this.movies = movies);
    }

  ngOnInit(): void {
      this.getMovies();
  }
}
