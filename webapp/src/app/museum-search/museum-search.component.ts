import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Museum } from '../museum';
import { MuseumService } from '../museum.service';

@Component({
  selector: 'app-museum-search',
  templateUrl: './museum-search.component.html',
  styleUrls: [ './museum-search.component.css' ]
})
export class MuseumSearchComponent implements OnInit {
  museums$: Observable<Museum[]>;
  private searchTerms = new Subject<string>();

  constructor(private museumService: MuseumService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.museums$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.museumService.searchMuseums(term)),
    );
  }
}
