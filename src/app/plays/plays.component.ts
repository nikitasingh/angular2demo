import { Component, OnInit } from '@angular/core';
import { Play } from './play';
import { PlayService } from './play.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-plays',
  templateUrl: './plays.component.html',
  styleUrls: ['./../movies.component.css']
})

export class PlaysComponent implements OnInit{
  plays: Play[];
  selectedPlay: Play;

  constructor(private playService: PlayService, private router: Router) { }

  getPlays(): void{
  // plays =>  creates a function
    this.playService.getPlays().then(plays => this.plays = plays);
  }

  ngOnInit(): void {
    this.getPlays();
  }

  onSelect(play: Play): void {
    this.selectedPlay = play;
  }

  gotoDetail(): void {
    this.router.navigate(['/play-detail', this.selectedPlay.id]);
  }

}
