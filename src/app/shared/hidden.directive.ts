import { Directive, ElementRef, Renderer, Input } from '@angular/core';

@Directive({ selector: '[myHidden]' })

export class HiddenDirective {
  @Input() myHidden: boolean;
  constructor(el: ElementRef, renderer: Renderer) {
   // Use renderer to render the element with styles
     renderer.setElementStyle(el.nativeElement, 'display', 'none');
  }
}
