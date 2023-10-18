import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAlphabeticOnly]'
})
export class AlphabeticOnlyDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value.replace(/[^A-Za-z\s]/g, '');
    input.value = value;
  }
}
