import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { BookUnDetailed } from '../interfaces/book-undetailed.model';
import { SingleBook } from '../interfaces/single-book';

@Component({
  selector: 'app-books-card-list',
  templateUrl: './books-card-list.component.html',
  styleUrls: ['./books-card-list.component.scss'],
})
export class BooksCardListComponent implements AfterViewInit {
  displayedColumns: string[] = ['title', 'price', 'view', 'link'];
  dataSource: MatTableDataSource<BookUnDetailed>;

  @Input() set books(books: BookUnDetailed[] | undefined) {
    if (books?.length) {
      this._books = books;
      this.dataSource = new MatTableDataSource(this.books);
    }
  }

  get books() {
    return this._books;
  }

  private _books: BookUnDetailed[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {
    this.dataSource = new MatTableDataSource(this.books);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
