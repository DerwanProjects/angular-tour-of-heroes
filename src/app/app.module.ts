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
import { ClickService } from './services/click.service';
import { TableComponent } from './table/table.component';
import { Highlight2Directive } from './highlight-2.directive';
import { GetTableRowIdDirective } from './get-table-row-id.directive';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { AppRouterModule } from './app-router.module';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';


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
    TableComponent,
    Highlight2Directive,
    GetTableRowIdDirective,
    Page1Component,
    Page2Component,
    ChildAComponent,
    ChildBComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [ClickService],
  bootstrap: [AppComponent]
})
export class AppModule { }
