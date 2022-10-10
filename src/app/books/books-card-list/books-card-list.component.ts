import { Component, Input } from '@angular/core';
import { Books } from '../interfaces/books';

@Component({
  selector: 'app-books-card-list',
  templateUrl: './books-card-list.component.html',
  styleUrls: ['./books-card-list.component.scss']
})
export class BooksCardListComponent {

  @Input() books:any| undefined


}
