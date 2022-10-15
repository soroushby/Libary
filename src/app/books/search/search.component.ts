import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, tap } from 'rxjs';
import { BooksService } from '../books.service';
import { BookUnDetailed } from '../interfaces/book-undetailed.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  displayedColumns: string[] = ['title', 'price', 'view'];
  books: any;
  searchResult = [];
  isSearchedEver: boolean | undefined;

  constructor(private bookservice: BooksService) {}

  ngOnInit(): void {}

  onSearch() {
    this.isSearchedEver = true;
    this.bookservice
      .searchBook(this.books)
      .pipe(
        tap((response) => {
          this.searchResult = response;
        })
      )
      .subscribe();
  }
}
