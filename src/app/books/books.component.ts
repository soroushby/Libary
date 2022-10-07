import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BooksService } from './books.service';
import { Books } from './interfaces/books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books?:Observable<Books[]> | any ;

  constructor(private bookservice: BooksService) { }

  ngOnInit(): void {

    this.bookservice.loadAllBooks().subscribe(x=>console.log(x))
  }

}
