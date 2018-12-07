import { Component, OnInit } from '@angular/core';
import { Quarter } from '../quarter';
import { Museum } from '../museum';
import { ActivatedRoute } from '@angular/router';
import { MuseumService } from '../museum.service';

@Component({
  selector: 'app-museum-quarter',
  templateUrl: './museum-quarter.component.html',
  styleUrls: ['./museum-quarter.component.css']
})
export class MuseumQuarterComponent implements OnInit {
  selectedQuarter: Quarter;
  museums: Museum[] = [];

  constructor(
    private route: ActivatedRoute,
    private museumService: MuseumService) { }

  ngOnInit() {
    this.getMuseumsQuarter();
  }

  onSelect(quarter: Quarter): void {
    this.selectedQuarter = quarter;
    console.log(this.selectedQuarter.name);
  }

  getMuseumsQuarter(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.selectedQuarter = new Quarter(name);
    console.log(this.selectedQuarter.name);
    this.museumService.getMuseumsQuarter(this.selectedQuarter.name).subscribe(data => {
      console.log(data);
      data.results.bindings.forEach(element => {
        this.museums.push(new Museum(element.sightname.value));
      });
    });
  }

}
