import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { singleBookResolver } from './resolvers/singleBook.resolver';
import { BooksCardListComponent } from './books-card-list/books-card-list.component';
import { BooksComponent } from './books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { AddBookComponent } from './add-book/add-book.component';



const routes: Routes = [
  { path: '', component: BooksComponent },
  { path: 'addbook', component: AddBookComponent },
  {
    path: ':bookId',
    component: BookDetailComponent,
    resolve: {
      singleBookData: singleBookResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[singleBookResolver]
})
export class BooksRoutingModule { }
