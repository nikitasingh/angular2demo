import { Injectable } from '@angular/core';
import { PLAYS } from './mock-plays';
import { Play } from './play';

//The @Injectable() decorator tells TypeScript to emit metadata about the service. The metadata specifies that Angular may need //to inject other dependencies into this service.
//You're still mocking the data. You're simulating the behavior of an ultra-fast, zero-latency server, by returning an //immediately resolved Promise with the mock plays as the result.
@Injectable()
export class PlayService {
  getPlays(): Promise<Play[]> {
    return Promise.resolve(PLAYS);
  }

  getPlay(id: number): Promise<Play> {
    return this.getPlays().then(plays => plays.find(play => play.id === id));
  }
}
