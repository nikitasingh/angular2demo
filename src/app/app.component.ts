import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { count } from 'rxjs/operator/count';

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
    <app-custom-dropdown></app-custom-dropdown>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movies list';
  val = false;
  initialData = [2, 3, 3, 4];
}
