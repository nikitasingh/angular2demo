import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';
import { Movie } from './movie';
import { PlayService } from './plays/play.service';
import { Play } from './plays/play';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  movies: Movie[] = [];
  plays: Play[] = [];

  constructor(private movieService: MovieService, private playService: PlayService) { }

  ngOnInit(): void {
    this.movieService.getMovies()
      .then(movies => this.movies = movies.slice(1, 5));

    this.playService.getPlays()
      .then(plays => this.plays = plays.slice(1, 5));
  }
}
