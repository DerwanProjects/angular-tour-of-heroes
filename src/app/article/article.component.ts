import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleListService } from '../services/article-list.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleListService]
})
export class ArticleComponent implements OnInit {

  article: {id: number, thumbnail: string,title: string,body: string, date: string, type:'excerpt'|'full'};
  getId: number;

  constructor(private route: ActivatedRoute,
    private articleListService: ArticleListService) { }




  ngOnInit(): void {
    // let id = this.route.snapshot.paramMap.get('id');
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
    // Jak pobrać artykuł ?
    // console.log(this.route.snapshot);
    console.log(this.articleListService);
  }





}
