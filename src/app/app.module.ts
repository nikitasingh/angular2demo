import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { MovieDetailComponent } from './movie-detail.component';
import { MoviesComponent }     from './movies.component';
import { PlaysComponent }     from './plays/plays.component';
import { DashboardComponent }     from './dashboard.component';
import { MovieService }     from './movie.service';
import { PlayService }     from './plays/play.service';
import { PlayDetailComponent }     from './plays/play-detail.component';

import { AppRoutingModule }     from './app-routing.module';
import { SharedModule }     from './shared/shared.module';

//A component must belong to an NgModule in order for it to be usable by another component or application. To specify that a //component is a member of an NgModule, you should list it in the declarations field of that NgModule.
//NgModules help organize an application into cohesive blocks of functionality.

@NgModule({
//You tell Angular which components belong to the AppModule by listing it in the module's declarations array
//Only declarables — components, directives and pipes
  declarations: [
    AppComponent,
    MoviesComponent,
    PlaysComponent,
    MovieDetailComponent,
    DashboardComponent,
    PlayDetailComponent
  ],
  //Add a module to the imports array when the application requires its features.
  //Only NgModule classes go in the imports array. Do not put any other kind of class in imports.
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [MovieService, PlayService],
  //the root component that Angular creates and inserts into the index.html host web page.
  // Among other things, the bootstrapping process creates the component(s) listed in the bootstrap array and inserts each //one into the browser DOM.
  bootstrap: [AppComponent]
})

export class AppModule { }
