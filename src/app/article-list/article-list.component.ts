import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleListService } from '../services/article-list.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
  providers: [ArticleListService]
})
export class ArticleListComponent implements OnInit {

  @Output() test = new EventEmitter<string>();

  isActive = false;
  postzSorted: any;
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




  makeUnixTimestamp(dateString: string): number {
    let dateArray = dateString.split("-").map(Number);
    let date = new Date(dateArray[0], dateArray[1] - 1, dateArray[2]); // zwróć sekwencję year,month,day
    let unixDate = date.getTime();
    return unixDate;
  }

  sortPosts(): {} {
    this.postzSorted = this.articleListService.postz.sort((a,b) => this.makeUnixTimestamp(a.date) - this.makeUnixTimestamp(b.date) );
    return this.postzSorted;
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


  sendUrlToArticle() {
    this.test.emit(this.buildUrl);
  }

  ngOnInit(): void {
    this.sortPosts();
    // budujemy adres URL który zostanie przekazany do pojedynczego artykułu za pomocą property binding (@Input())
    this.route.snapshot.url.forEach(element => {
        this.buildUrl +=  '/' + element.path;
    });
  }

}
