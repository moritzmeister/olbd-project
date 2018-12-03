import { Component, OnInit } from '@angular/core';
import { Museum } from '../museum';
import { MuseumService } from '../museum.service';
import { DashboardService } from '../dashboard.service';
import { Sight } from '../sight';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  sights: Sight[] = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.getSights();
  }

  getSights(): void {
    this.dashboardService.getSights()
      .subscribe(sights => this.sights = sights);
  }
}
