import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { tap } from 'rxjs/operators';
import { MessagesService } from './messages.service';

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styles: [
    `
      .messages-container {
        display: flex;
        color: #a94442;
        background-color: #f2dede;
        border: 1px solid #ebccd1;
        padding: 2rem;
        font-family: Roboto;
        position: relative;
      }

      .close {
        position: absolute;
        right: 10px;
        top: 10px;
        cursor: pointer;
      }
    `,
  ],
})
export class MessagesComponent implements OnInit {
  showMessages = false;

  errors$: Observable<string[]> | undefined;

  constructor(public messagesService: MessagesService) {
    console.log('Created messages component');
  }

  ngOnInit() {
    this.errors$ = this.messagesService.errors$.pipe(
      tap(() => (this.showMessages = true))
    );
  }

  onClose() {
    this.showMessages = false;
  }
}
