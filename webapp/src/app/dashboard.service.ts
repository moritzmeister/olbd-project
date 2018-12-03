import { Injectable } from '@angular/core';
import { Sight } from './sight';
import { SIGHTS } from './mock-sights';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  getSights(): Observable<Sight[]> {
    return of(SIGHTS);
  }
}
