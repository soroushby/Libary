import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BooksCardListComponent } from './books-card-list/books-card-list.component';


@NgModule({
  declarations: [
    BooksComponent,
    BooksCardListComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class BooksModule { }
