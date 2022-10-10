import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../books.service';
import { SingleBook } from '../interfaces/single-book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {
  singleBook: SingleBook | undefined;

  constructor(
    private route: ActivatedRoute,
    private bookservice: BooksService
  ) {}

  ngOnInit(): void {
    this.singleBook = this.route.snapshot.data['singleBookData'];
    console.log(this.singleBook);
  }
}
