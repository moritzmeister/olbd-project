import { Component, OnInit } from '@angular/core';
import { Museum } from '../museum';
import { MuseumService } from '../museum.service';
import { DashboardService } from '../dashboard.service';
import { Sight } from '../sight';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selectedSight: Sight;
  sights: Sight[] = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.getSights();
    this.getTest();
    console.log(this.sights);
  }

  onSelect(sight: Sight): void {
    this.selectedSight = sight;
  }

  getSights(): void {
    this.dashboardService.getSights().subscribe(data => {
      data.results.bindings.forEach(element => {
           this.sights.push(new Sight(element.name.value, element.opening.value));
         });
      });
  }


  getTest(): void {
    this.dashboardService.getSights().subscribe(data => console.log(data));
  }

}
