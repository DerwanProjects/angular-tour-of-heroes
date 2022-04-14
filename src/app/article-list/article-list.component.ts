import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  isActive = false;

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

  constructor() { }

  ngOnInit(): void {
  }

}
