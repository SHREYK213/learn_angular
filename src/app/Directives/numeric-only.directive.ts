import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumericOnly]'
})
export class NumericOnlyDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, ''); 

    if (value.length > 10) {
      value = value.slice(0, 10); 
    }

    input.value = value;
  }

  @HostListener('keyup', ['$event'])
  onKeyUp(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.value.length === 10) {
      input.dispatchEvent(new Event('input')); 
    }
  }
}
