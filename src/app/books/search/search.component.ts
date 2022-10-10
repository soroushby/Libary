import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BooksService } from '../books.service';
import { Books } from '../interfaces/books';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  displayedColumns: string[] = ['title', 'price', 'view', 'link'];
  books: any;
  searchResult: any;

  constructor(private bookservice: BooksService) {}

  ngOnInit(): void {}

  onSearch() {
    this.bookservice
      .searchBook(this.books)
      .subscribe((response) => (this.searchResult = response));
    console.log(this.searchResult);
  }
}
