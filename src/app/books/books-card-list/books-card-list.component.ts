import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Books } from '../interfaces/books';
import { SingleBook } from '../interfaces/single-book';

@Component({
  selector: 'app-books-card-list',
  templateUrl: './books-card-list.component.html',
  styleUrls: ['./books-card-list.component.scss'],
})
export class BooksCardListComponent {
  displayedColumns: string[] = ['title', 'price', 'view', 'link'];

  @Input() books: any | undefined;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
}
