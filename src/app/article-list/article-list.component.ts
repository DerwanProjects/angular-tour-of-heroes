import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleListService } from '../services/article-list.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
  providers: [ArticleListService]
})
export class ArticleListComponent implements OnInit {


  isActive = false;
  articlesList: any;
  urlAddress: string;
  buildUrl: string = '';

  articles = [
    {
      title: 'Tytuł 1',
      description: 'Opis 1',
    },
    {
      title: 'Tytuł 2',
      description: 'Opis 2',
    },
    {
      title: 'Tytuł 3',
      description: 'Opis 3',
    },
  ] as Array<{title:string,description:string}>;



  ngDoCheck() {
    console.log('test');
  }




  get curretClasses() {
    return {
      jeden: true,
      dwa: true,
      trzy: false
    }
  }

  get CurrentStyle() {
    return {
      'font-style': 'italic',
      'font-weight' : 'bold'
    }
  }

  identify(index:unknown, item:any) {
    return item.title;
  }

  constructor(
            private articleListService: ArticleListService,
            private route: ActivatedRoute) { }





  ngOnInit(): void {
    console.log(this.articleListService.getAllArticles());
    this.articlesList = this.articleListService.getAllArticles();
    // budujemy adres URL który zostanie przekazany do pojedynczego artykułu za pomocą property binding (@Input())
    this.route.snapshot.url.forEach(element => {
        this.buildUrl +=  '/' + element.path;
    });
  }




}
