import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.model';


@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {

  isSubmitted: boolean = false;

  types: string[] = ['excerpt', 'full'];
  // model = new Article('Tytuł 1', 'Lorem ipsum dolor sit amet...', this.types[0]);
  model: Article;

  constructor() {
    this.model = new Article('Tytuł 3', 'Lorem ipsum dolor sit amet...', this.types[0]);
   }

  ngOnInit(): void {
  }

  // tutaj jest obsługa API
  onSubmit() {
    this.isSubmitted = true;
  }

}
