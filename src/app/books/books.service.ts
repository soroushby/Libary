import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, filter, first, map, Observable, shareReplay, tap, throwError } from 'rxjs';
import { Books } from './interfaces/books';
import { SingleBook } from './interfaces/single-book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private subject = new BehaviorSubject <Books[]>([])

  books$:Observable<Books[]> = this.subject.asObservable()

  // books$:Observable<Books[]> | undefined |any

  constructor(private http:HttpClient) {

   }


 loadBooks(){
return this.http.get<Books[]>("https://api.itbook.store/1.0/new").pipe(
   map(response => response["books"]),
   shareReplay()
  //  tap(books => this.subject.next(books)),
)
}

loadSingleBook(bookId:any){

 return this.http.get<SingleBook>(`https://api.itbook.store/1.0/books/${bookId}`).pipe(
   shareReplay(),
   tap(x=>console.log(x))
 )
}



}
