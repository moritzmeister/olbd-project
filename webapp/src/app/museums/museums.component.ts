import { Component, OnInit } from '@angular/core';

import { Museum } from '../museum';
import { MuseumService } from '../museum.service';

@Component({
  selector: 'app-museums',
  templateUrl: './museums.component.html',
  styleUrls: ['./museums.component.css']
})

export class MuseumsComponent implements OnInit {

  selectedMuseum: Museum;
  museums: Museum[];

  constructor(private museumService: MuseumService) { }

  ngOnInit() {
    this.getMuseums();
  }

  onSelect(museum: Museum): void {
    this.selectedMuseum = museum;
  }

getMuseums(): void {
  this.museumService.getMuseums()
  .subscribe(museums => this.museums = museums);

}
}
