import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    console.log(message);
  }

  clear() {
    this.messages = [];
  }
}
