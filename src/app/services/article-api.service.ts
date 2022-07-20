import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ArticleResponse, ArticlesResponse } from '../article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleApiService {

  private root = 'https://dummyjson.com/';
  private api_path = 'posts';
  private api_url = this.root + this.api_path;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<ArticlesResponse>(this.api_url)
    .pipe(
      map(result => result.posts),
      catchError(error => {
        console.log(error);
        return throwError('Panie, coś nie działa!')
      })

    );
  }

  getById(id:number) {
    return this.http.get<ArticleResponse>(this.api_url + '/' + id)
    .pipe(
      catchError(error => {
        console.log('API Service', error);
        return throwError('Panie, coś nie działa!')
      })

    );
  }
}
