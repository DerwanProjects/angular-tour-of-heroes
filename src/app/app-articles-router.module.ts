import { NgModule } from '@angular/core';
import { ArticleComponent } from './article/article.component';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';


const ariticlesRouter: Routes = [
  {
    path: '', component: ArticleListComponent
  },
  {
    path: 'article/:id', component: ArticleComponent
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(ariticlesRouter)
  ],
  exports: [
    RouterModule
  ]
})


export class ArticlesRouterModule { }
