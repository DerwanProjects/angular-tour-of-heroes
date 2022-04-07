import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() articleTitle: string = '';
  @Input() articleExcerpt: string = '';
  // skąd ta zmienna ma wiedzieć czy dany artykuł jest TRUE czy FALSE


  constructor() {

  }

  ngOnInit(): void {
  }


  showTitle() {
    console.log(this.articleTitle);
  }

  checkIfNewestArticle() {

  }

}
