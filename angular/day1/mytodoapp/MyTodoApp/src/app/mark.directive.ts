import {
  Directive,
  Input,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

@Directive({
  selector: 'span[appMark]',
})
export class MarkDirective implements AfterViewInit {
  @Input()
  appMark = '';

  @Input()
  set text(value: string) {
    this.#text = value;
    this.ngAfterViewInit();
  }

  get text() {
    return this.#text;
  }

  #text = '';
  spanElement: HTMLSpanElement;

  constructor(elementRef: ElementRef) {
    this.spanElement = elementRef.nativeElement;
  }

  ngAfterViewInit() {
    const text = this.text.replaceAll(
      this.appMark,
      '<mark>' + this.appMark + '</mark>'
    );

    this.spanElement.innerHTML = text;
  }
}
