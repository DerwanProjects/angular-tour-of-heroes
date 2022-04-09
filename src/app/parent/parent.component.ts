import { Component, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ArticleComponent } from '../article/article.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @ViewChild(ArticleComponent) ArticleRef!: ArticleComponent;


  messageToChild = 'przekazuje ci geny!';

  getActiveArticle(index:number): boolean {
    if (index === 0) {
      return true;
    }
    return false;
  }

  constructor() {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    console.log(this.ArticleRef);
  }

  ShowInputValue(value: string): void {
    console.log(value);
  }


}
