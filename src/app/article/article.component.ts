import { Component, ElementRef, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleListService } from '../services/article-list.service';
import { Article } from '../article.model';
import { ArticleApiService } from '../services/article-api.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleListService]
})
export class ArticleComponent implements OnInit {

  @Output() onRefresh: EventEmitter<string> = new EventEmitter<string>();
  article: Article | undefined;
  articlesList = this.articleListService.getAllArticles();
  types = ["excerpt", "full"];
  getId: number;
  editingEnabled:boolean = false;

  constructor(
    private api: ArticleApiService,
    private router: Router,
    private route: ActivatedRoute,
    private articleListService: ArticleListService,
    private elementRef: ElementRef) { }


  ngOnInit(): void {
    // let id = this.route.snapshot.paramMap.get('id');
    const id = this.route.snapshot.paramMap.get('id') || '';
    console.log(id);
    // this.getId = this.getId - 1;
    // this.article = {
    //   id: this.articleListService.articles[this.getId].id,
    //   thumbnail: this.articleListService.articles[this.getId].thumbnail,
    //   title: this.articleListService.articles[this.getId].title,
    //   body: this.articleListService.articles[this.getId].body,
    //   date: this.articleListService.articles[this.getId].date,
    //   type: this.articleListService.articles[this.getId].type,
    // }
    // Jak pobrać artykuł ?
    // console.log(this.route.snapshot);
    // this.article = this.articleListService.getArticleById(+id);
    this.api.getById(-1)
    .pipe(
      catchError(error => {
        console.log('Article Component', error);
        return throwError('Panie, coś nie działa w Article')
      })

    )
    .subscribe(article => {
      this.article = (article as unknown) as Article;
    });
  }



  enableEditing() {
    this.editingEnabled = !this.editingEnabled;
  }


  onSubmit(form: NgForm): void {
    const article = new Article(form.value.id, form.value.thumbnail, form.value.title, form.value.body, form.value.date, 'test');
    this.articleListService.saveArticle(article);
  }



  onClickBack() {
    this.router.navigate(['/']);
    this.onRefresh.emit('Hello from Child');
  }





}
