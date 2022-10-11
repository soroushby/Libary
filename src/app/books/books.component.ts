import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BooksService } from './books.service';
import { BookUnDetailed } from './interfaces/book-undetailed.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  books$: Observable<BookUnDetailed[]> | undefined;

  constructor(private bookservice: BooksService) {}

  ngOnInit(): void {
    this.books$ = this.bookservice.loadBooks();

    // this.books = this.bookservice.books$.subscribe()
  }
}
