import { Component, OnInit } from '@angular/core';
import { Museum } from '../museum';
import { MuseumService } from '../museum.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  museums: Museum[] = [];

  constructor(private museumService: MuseumService) { }

  ngOnInit() {
    this.getMuseums();
  }

  getMuseums(): void {
    this.museumService.getMuseums()
      .subscribe(museums => this.museums = museums.slice(1, 5));
  }
}
