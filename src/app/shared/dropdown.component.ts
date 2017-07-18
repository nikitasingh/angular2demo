import { Movie } from './../movie';
import { MovieService } from './../movie.service';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-custom-dropdown',
    templateUrl: './dropdown.component.html',
})
export class DropdownComponent {
	 @Input()
    movies: Movie[];
}
