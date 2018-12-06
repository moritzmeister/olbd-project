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
    console.log(this.sights);
  }


  onSelect(sight: Sight): void {
    this.selectedSight = sight;
  }

  getSights(): void {
    this.dashboardService.getSights()
      .subscribe(data => {
        console.log(data);
        data.results.bindings.forEach(element => {
          const temp = new Sight(element.name.value);
          temp.hours = element.opening.value;
          temp.type = element.type.value.substring(62);
          temp.telephone = element.telephone.value;
          temp.link = element.link.value.substring(30);
          this.sights.push(temp);
          });
        });
  }

}
