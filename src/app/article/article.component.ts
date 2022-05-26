import { Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  editingEnabled:boolean = false;

  constructor(private route: ActivatedRoute,
    private articleListService: ArticleListService,
    private elementRef: ElementRef) { }


  ngOnInit(): void {
    // let id = this.route.snapshot.paramMap.get('id');
    this.getId = this.route.snapshot.params['id'];
    this.getId = this.getId - 1;
    this.article = {
      id: this.articleListService.articles[this.getId].id,
      thumbnail: this.articleListService.articles[this.getId].thumbnail,
      title: this.articleListService.articles[this.getId].title,
      body: this.articleListService.articles[this.getId].body,
      date: this.articleListService.articles[this.getId].date,
      type: this.articleListService.articles[this.getId].type,
    }
    // Jak pobrać artykuł ?
    // console.log(this.route.snapshot);
  }



  enableEditing() {
    this.editingEnabled = !this.editingEnabled;
  }


  onSubmit(form: NgForm) {
    this.getId = this.route.snapshot.params['id'] - 1;
    this.articleListService.saveChanges(this.getId, form.value.title, form.value.body);
    console.log(this.articleListService.getAllArticles());
  }

  // sendChangedArticle() {
  //   let changedArticle = this.articleListService.getArticleById(this.getId-1);
  //   this.emitChangedArticle.emit(changedArticle);
  // }



}
