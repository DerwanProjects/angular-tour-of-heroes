import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { HighlightDirective } from './highlight.directive';
import { ArticleComponent } from './article/article.component';
import { HeaderComponent } from './header/header.component';
import { FontLgDirective } from './font-lg.directive';
import { ArticleLengthDirective } from './article-length.directive';
import { TrimLengthPipe } from './pipes/trim-length.pipe';
import { ArticlesRouterModule } from './app-articles-router.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ParentComponent,
    ChildComponent,
    FooterComponent,
    ArticleListComponent,
    HighlightDirective,
    ArticleComponent,
    HeaderComponent,
    FontLgDirective,
    ArticleLengthDirective,
    TrimLengthPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ArticlesRouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
