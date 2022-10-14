import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';

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
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _liveAnnouncer: LiveAnnouncer) {
    this.dataSource = new MatTableDataSource(this.books);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
