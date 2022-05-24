import { ChangeDetectorRef, Component, ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ClickService } from '../services/click.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit, OnChanges {

  // counter:number;
  // private _counter:number;

  constructor(
    private clickService: ClickService,
    private cdr: ChangeDetectorRef) {
    // console.log(this.clickService.isClicked);
    // this.counter = this.clickService.getCounter();
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  get counter() {
    return this.clickService.getCounter();
  }
  // counter = this.clickService.getCounter();
  // get counter() {
  //   // return this.clickService.getCounter();
  //   return this._counter;
  // }
  // set counter(value:number) {
  //   this._counter = value;
  // }


  onClick(element:HTMLButtonElement) {
    this.clickService.increaseCounter();
    this.clickService.showClickedElement(element);
    this.clickService.isClicked = true;
    this.clickService.showClickedElement(element);
    // console.log(this.clickService);
    this.cdr.detectChanges();
  }


  ngOnInit(): void {
  }

}
