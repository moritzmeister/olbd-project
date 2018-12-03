import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Museum } from './museum';
import { MUSEUMS } from './mock-museums';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})


export class MuseumService {

  constructor(private messageService: MessageService) { }

getMuseums(): Observable<Museum[]>{
  this.messageService.add('MuseumService: fetched museums');
  return of (MUSEUMS);
}
}
