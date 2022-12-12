import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: 'input[type="text"][appAutoInputWidth]'
})
export class AutoInputWidthDirective {
  inputElement: HTMLInputElement;

  @Input()
  appAutoInputWidth = '';

  constructor(elementRef: ElementRef) {
    this.inputElement = elementRef.nativeElement;
  }

  @HostListener('focus')
  onFocus() {
    const width = this.inputElement.offsetWidth + Number(this.appAutoInputWidth);
    this.inputElement.style.width = width + 'px';
  }

  @HostListener('blur')
  onBlur() {
    const width = this.inputElement.offsetWidth - Number(this.appAutoInputWidth);
    this.inputElement.style.width = width + 'px';
  }
}
