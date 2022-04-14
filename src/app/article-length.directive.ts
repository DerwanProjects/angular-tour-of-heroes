import { Directive, HostListener, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appArticleLength]'
})
export class ArticleLengthDirective {

  // to poczatek input()
    private articleBody: string = 'Lorem ipsum...';
    private openedArticle = false;
    @Input()
    set appArticleLength(value:string) {
      if (value) {
        this.articleBody = value;
      }
    }

    get appArticleLength() {
      return this.articleBody;
    }
  // to koniec input()


    @HostListener('click')
    onClick() {
      this.onFullArticle(this.appArticleLength,this.openedArticle);
    }


    constructor(private el: ElementRef) {
      // el.nativeElement.style.backgroundColor = 'teal';
    }

    private onFullArticle(articleBody:string, openedArticle:boolean):void {
      if (openedArticle === false) {
        this.el.nativeElement.previousElementSibling.innerText = articleBody;
        this.openedArticle = true;
        this.el.nativeElement.innerHTML = 'Mniej...';
      }
      if (openedArticle === true) {
        this.el.nativeElement.innerText = 'Więcej...';
        this.el.nativeElement.previousElementSibling.innerText = articleBody.substring(0, 120);
        this.openedArticle = false;
      }
    }

}
