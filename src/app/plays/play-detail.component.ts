import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
//Import the switchMap operator to use later with the route parameters Observable.
import 'rxjs/add/operator/switchMap';
import { PlayService } from './play.service';
import { Play } from './play';

@Component({
  selector: 'play-detail',
  templateUrl: './play-detail.component.html'
})
export class PlayDetailComponent implements OnInit{
  @Input() play: Play;
  constructor(
    private playService: PlayService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
    //The switchMap operator maps the id in the Observable route parameters to a new Observable, the result of the //HeroService.getHero() method.
    //So the route parameter value is converted to a number with the JavaScript (+) operator.
    //obserables are similar to promises
      .switchMap((params: Params) => this.playService.getPlay(+params['id']))
    //Previously, when navigating from the HeroListComponent to the HeroDetailComponent, you subscribed to the route //parameter map Observable and made it available to the HeroDetailComponent in the ActivatedRoute service. You injected //that service in the constructor of the HeroDetailComponent.
    //If this plain Observable has no subscribers, it will not be triggered!
      .subscribe(play => this.play = play);
  }

  goBack(): void {
    this.location.back();
  }
}
