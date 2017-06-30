import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { MovieService } from './movie.service';
import { Movie } from './movie';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html'
})
export class MovieDetailComponent implements OnInit{
//All it does is receive a movie object through its movie input property and then bind to that property with its template.
  @Input() movie: Movie;
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.movieService.getMovie(+params['id']))
      .subscribe(movie => this.movie = movie);
  }

  goBack(): void {
    this.location.back();
  }
}
