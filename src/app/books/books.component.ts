import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BooksService } from './books.service';
import { Books } from './interfaces/books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  books: Observable<Books> | undefined;

  constructor(private bookservice: BooksService) {}

  ngOnInit(): void {
    this.books = this.bookservice.loadBooks();

    // this.books = this.bookservice.books$.subscribe()
  }
}
