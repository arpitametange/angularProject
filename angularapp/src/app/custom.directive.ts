import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {


  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor="pink"; 
    el.nativeElement.style.border='2px solid black';
    el.nativeElement.style.color='red'
  }
}
