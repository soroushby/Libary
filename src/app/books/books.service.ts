import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  filter,
  first,
  map,
  Observable,
  of,
  share,
  shareReplay,
  tap,
  throwError,
} from 'rxjs';
import { BookUnDetailed } from './interfaces/book-undetailed.model';
import { SingleBook } from './interfaces/single-book';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private bookSubject = new BehaviorSubject<BookUnDetailed[]>([]);

  books$: Observable<BookUnDetailed[]> = this.bookSubject.asObservable();

  // books$:Observable<Books[]> | undefined |any

  constructor(private http: HttpClient) {}

  loadBooks(): Observable<any[]> {
    return this.http.get('https://api.itbook.store/1.0/new').pipe(
      map((response) => {
        return response['books'];
      }),
      // catchError((err) => {
      //   return of(err);
      // }),
      shareReplay(),
      tap((x) => console.log(x))
    );
  }

  loadSingleBook(bookId: any) {
    return this.http
      .get<SingleBook>(`https://api.itbook.store/1.0/books/${bookId}`)
      .pipe(
        shareReplay(),
        tap((x) => console.log(x))
      );
  }

  searchBook(bookName: string) {
    return this.http
      .get(`https://api.itbook.store/1.0/search/${bookName}`)
      .pipe(
        map((response) => {
          return response['books'];
        }),
        catchError((err) => {
          return of(err);
        }),
        shareReplay()
      );
  }
}
