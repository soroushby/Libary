import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';

import { Injectable } from '@angular/core';

import { first } from 'rxjs/operators';
import { SingleBook } from '../interfaces/single-book';
import { BooksService } from '../books.service';
import { Observable } from 'rxjs';

@Injectable()
export class singleBookResolver implements Resolve<SingleBook> {
  constructor(private bookservice: BooksService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<SingleBook> {
    const courseUrl = route.paramMap.get('bookId');

    return this.bookservice.loadSingleBook(courseUrl);
  }
}
