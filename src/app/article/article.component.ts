import { Component, ElementRef, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleListService } from '../services/article-list.service';
import { Article } from '../article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleListService]
})
export class ArticleComponent implements OnInit {

  editForm: FormGroup;
  article: Article | undefined;
  articlesList = this.articleListService.getAllArticles();
  types = ["excerpt", "full"];
  getId: number;
  editingEnabled:boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articleListService: ArticleListService,
    private elementRef: ElementRef) { }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.article = this.articleListService.getArticleById(+id);
    this.editForm = new FormGroup ({
      'id': new FormControl(this.article.id),
      'thumbnail': new FormControl(this.article.thumbnail),
      'title': new FormControl(this.article.title,
        [Validators.required,
         forbiddenNameValidator('test'),
      ]),
      'body': new FormControl(this.article.body,
        [
          Validators.required,
          Validators.minLength(20),
        ]),
      'date': new FormControl(this.article.date),
      'type': new FormControl(this.article.type),
    });
    console.log(id);

  }


  get thumbnail() {
    return this.editForm.get('thumbnail');
  }
  get title() {
    return this.editForm.get('title');
  }
  get body() {
    return this.editForm.get('body');
  }


  enableEditing() {
    this.editingEnabled = !this.editingEnabled;
  }


  onSubmit(): void {
    const form = this.editForm;
    const article = new Article(form.value.id, form.value.thumbnail, form.value.title, form.value.body, form.value.date, 'test');
    this.articleListService.saveArticle(article);
    console.log(article);
  }



  onClickBack() {
    this.router.navigate(['/']);
  }

}


export function forbiddenNameValidator(forbiddenName: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
      return forbiddenName == control.value
        ? {forbiddenName: {value: control.value}} : null;
  };
}

