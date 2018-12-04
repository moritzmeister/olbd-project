import { Component, OnInit, Input } from '@angular/core';
import { Museum } from '../museum';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MuseumService } from '../museum.service';
import { MuseumsComponent } from '../museums/museums.component';

@Component({
  selector: 'app-museum-detail',
  templateUrl: './museum-detail.component.html',
  styleUrls: ['./museum-detail.component.css']
})
export class MuseumDetailComponent implements OnInit {
  museum: Museum;
  wikiid : string;

  constructor(
    private route: ActivatedRoute,
    private museumService: MuseumService,
    private location: Location) { }

  ngOnInit(): void {
    this.getMuseum();

  }

  getMuseum(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.museum = new Museum(name);

    this.museumService.getMuseumHours(name)
    .subscribe(data => {data.results.bindings.forEach(element => this.museum.hours = element.hours.value);
    });
    this.museumService.getMuseumType(name)
    .subscribe(data => {data.results.bindings.forEach(element => this.museum.type = element.type.value.substring(62));
    });
    this.museumService.getMuseumDescription(name)
    .subscribe(data => {data.results.bindings.forEach(element => this.museum.description = element.description.value);
    });
    this.museumService.getMuseumTelephone(name)
    .subscribe(data => {data.results.bindings.forEach(element => this.museum.telephone = element.telephone.value);
    });
    this.museumService.getMuseumWebpage(name)
    .subscribe(data => {data.results.bindings.forEach(element => this.museum.webpage = element.webpage.value);
    });
    this.museumService.getMuseumLink(name)
    .subscribe(data => {data.results.bindings.forEach(element => this.museum.wikiid = element.link.value);
    });
    console.log(this.museum.wikiid);
    this.museumService.getPicture(this.museum.wikiid)
    .subscribe(data => {data.results.bindings.forEach(element => this.museum.picture = element.pic.value);
    });
  }

  goBack(): void {
  this.location.back();
}

}
