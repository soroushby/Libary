import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { singleBookResolver } from './resolvers/singleBook.resolver';
import { BooksCardListComponent } from './books-card-list/books-card-list.component';
import { BooksComponent } from './books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

import { AuthGuard } from '../guards/auth.guard';
import { SearchComponent } from './search/search.component';




const routes: Routes = [
  { path: '', component: BooksComponent },
  {path:'search',component:SearchComponent},
  {
    path: ':bookId',
    component: BookDetailComponent,
    resolve: {
      singleBookData: singleBookResolver,
    },
    canActivate:[AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[singleBookResolver]
})
export class BooksRoutingModule { }
