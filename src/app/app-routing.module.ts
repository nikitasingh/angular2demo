import { NgModule }             from '@angular/core';
// The Angular Router is an optional service that presents a particular component view for a given URL
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { MoviesComponent }      from './movies.component';
import { MovieDetailComponent }  from './movie-detail.component';
import { PlaysComponent }  from './plays/plays.component';
import { PlayDetailComponent }  from './plays/play-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: MovieDetailComponent },
  { path: 'movies',     component: MoviesComponent },
  { path: 'plays',     component: PlaysComponent },
  { path: 'play-detail/:id',     component: PlayDetailComponent }
];

@NgModule({
  //The forRoot() method is called because a configured router is provided at the app's root.
  //The forRoot() method supplies the Router service providers and directives needed for routing, and performs the initial //navigation based on the current browser URL.
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
