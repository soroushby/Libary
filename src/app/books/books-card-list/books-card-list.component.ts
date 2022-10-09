import { Component, Input, OnInit } from '@angular/core';
import { Books } from '../interfaces/books';

@Component({
  selector: 'app-books-card-list',
  templateUrl: './books-card-list.component.html',
  styleUrls: ['./books-card-list.component.scss']
})
export class BooksCardListComponent implements OnInit {

  @Input() books:any| undefined
  constructor() { }

  ngOnInit(): void {
  }

}
