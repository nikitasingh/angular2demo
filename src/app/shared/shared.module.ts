import { NgModule } from '@angular/core';

import { HiddenDirective } from './hidden.directive';

@NgModule({
    declarations: [
        HiddenDirective
    ],
    //An export what you put is the exports property of the @NgModule decorator. It enables an Angular module to expose some of //its components/directives/pipes to the other modules in the applications. 
    exports: [
        HiddenDirective
    ]
})
export class SharedModule{}
