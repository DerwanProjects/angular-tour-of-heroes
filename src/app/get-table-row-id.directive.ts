import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appGetTableRowId]'
})
export class GetTableRowIdDirective {

  @Output('sendId') sendDataEmitter = new EventEmitter<string>();

  constructor(private el: ElementRef) { }

  @HostListener('click')
  onClick() {
    this.sendId();
  }

  sendId(): void {
    // console.log(this.el.nativeElement.getAttribute('id'));
    this.sendDataEmitter.emit(this.el.nativeElement.getAttribute('id'));
  }

}
