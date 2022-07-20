import { Component, OnInit, ChangeDetectorRef, AfterViewInit, OnDestroy  } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationError, NavigationStart, Router, Event } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ArticleApiService } from '../services/article-api.service';
import { ArticleListService } from '../services/article-list.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
  providers: [ArticleListService]
})
export class ArticleListComponent implements OnInit, OnDestroy {


  private unsubscribeSubject = new Subject<void>();
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








  // 6. kiedy w komponencie zapisujesz dane korzystasz z service.saveArticle(article); po czym do lokalnej wersji article podmieniasz wartość za pomocą service.getArticles()






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
            private api: ArticleApiService,
            private changeDetector: ChangeDetectorRef,
            private articleListService: ArticleListService,
            private router: Router,
            private route: ActivatedRoute)
            { }





  fetchData(): void {
    console.log('fetch Data Before', this.articlesList);
    // this.articlesList = [...this.articleListService.getAllArticles()];
    console.log('fetch Data After', this.articlesList);
  }


  receiveArticles(test: string) {
    alert(test);
    // return this.articlesList = changedArticlesList;
  }




  ngOnInit(): void {
    this.fetchData();
    this.router.events.subscribe(
      (event: Event) => {
        if (event instanceof NavigationStart) {
        // Show loading indicator
        }
        if (event instanceof NavigationEnd) {
        // Hide loading indicator
        this.fetchData();
        }
        if (event instanceof NavigationError) {
        // Hide loading indicator
        // Present error to user console.log(event.error);
        }
      });
    // budujemy adres URL który zostanie przekazany do pojedynczego artykułu za pomocą property binding (@Input())
    this.route.snapshot.url.forEach(element => {
        this.buildUrl +=  '/' + element.path;
    });
    this.api.getAll()
    .pipe(takeUntil(this.unsubscribeSubject))
    .subscribe((result) => {
      console.log(result);
      this.articlesList = result;
    })
  }

  ngOnDestroy(): void {
    this.unsubscribeSubject.complete();
    this.unsubscribeSubject.unsubscribe();
  }



}
