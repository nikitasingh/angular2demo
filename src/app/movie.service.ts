import { Injectable } from '@angular/core';
import { MOVIES } from './mock-movies';
import { Movie } from './movie';

//The @Injectable() decorator tells TypeScript to emit metadata about the service. The metadata specifies that Angular may need //to inject other dependencies into this service.
@Injectable()
export class MovieService {
  getMovies(): Promise<Movie[]> {
    return Promise.resolve(MOVIES);
  }

  getMovie(id: number): Promise<Movie> {
    console.log("hell");
    return this.getMovies()
               .then(movies => movies.find(movie => movie.id === id));
  }
}
