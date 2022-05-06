import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight2]'
})
export class Highlight2Directive {

    @HostListener('click')
    onClick() {
      this.highlight();
    }

  constructor(private el: ElementRef) { }



   private highlight():void {
    this.el.nativeElement.classList.toggle('bgColor');
   }

}
