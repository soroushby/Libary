import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, first, map, Observable, shareReplay, tap, throwError } from 'rxjs';
import { Books } from './interfaces/books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  // private subject = new BehaviorSubject<Books[]>([])

  // books$:Observable<Books[]>  = this.subject.asObservable()

  books$:Observable<Books[]> | undefined |any

  constructor(private http:HttpClient) { }



  loadAllBooks(){

    return this.http.get<Books[]>("https://api.itbook.store/1.0/new").pipe(
    map(books => books =this.books$),
    tap(x=> console.log(x))

      )

    // const loadbooks = this.http.get<Books[]>("https://api.itbook.store/1.0/new").pipe(
    //   tap(books => this.subject.next(books),
    // )


  }
}


//https://jsonplaceholder.typicode.com/posts
// tap (books => this.subject.next(books))
