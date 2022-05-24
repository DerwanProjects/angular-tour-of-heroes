import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

// to poczatek input()
  private color = 'red';
  @Input()
  set appHighlight(value:string) {
    if (value) {
      this.color = value;
    }
  }

  get appHighlight() {
    return this.color;
  }
// to koniec input()


  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(this.appHighlight);
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight('');
  }




  constructor(private el: ElementRef) {
    // el.nativeElement.style.backgroundColor = 'teal';
   }

   private highlight(color:string):void {
    this.el.nativeElement.style.backgroundColor = color;
   }

}
