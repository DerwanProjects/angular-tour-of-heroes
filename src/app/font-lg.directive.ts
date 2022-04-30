import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFontLg]'
})
export class FontLgDirective {

  fontSize: string = '1.4rem';

  constructor(private el: ElementRef) { }


  @HostListener('mouseenter')
  onMouseOver() {
    this.fontLg(this.fontSize);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.fontLg('');
  }


   private fontLg(fontSize:string):void {
    this.el.nativeElement.querySelector('h3').style.fontSize = fontSize;
   }

}
