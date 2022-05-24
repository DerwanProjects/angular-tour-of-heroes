import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ArticleListService } from '../services/article-list.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {

  article: {id: number, thumbnail: string,title: string,body: string, date: string, type:'excerpt'|'full'};
  getId: number;

  constructor(
    private articleListService: ArticleListService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getId = this.route.snapshot.params['id'];
    this.getId = this.getId - 1;
    this.article = {
      id: this.articleListService.postz[this.getId].id,
      thumbnail: this.articleListService.postz[this.getId].thumbnail,
      title: this.articleListService.postz[this.getId].title,
      body: this.articleListService.postz[this.getId].body,
      date: this.articleListService.postz[this.getId].date,
      type: this.articleListService.postz[this.getId].type,
    }
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }


}
