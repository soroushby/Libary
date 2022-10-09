import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

  {path:"", redirectTo:"/books", pathMatch:"full"},
  { path: 'books', loadChildren: () => import('./books/books.module').then(m => m.BooksModule) },
  {path:"contactus",component:ContactUsComponent},
  {path:"**",component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
