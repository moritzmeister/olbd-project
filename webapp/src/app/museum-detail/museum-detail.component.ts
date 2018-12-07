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
  wikiid: string;

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
    this.museumService.getQuarter(name)
    .subscribe(data => {data.results.bindings.forEach(element => this.museum.quarter = element.quarter.value.substring(62));
    });
    this.museumService.getQuarterWiki(name)
    .subscribe(data => {
      data.results.bindings.forEach(element => this.museum.qwikiid = element.quarterwiki.value.substring(30));
      this.museumService.getWikipedia(this.museum.qwikiid)
      .subscribe(data4 => {data4.results.bindings.forEach(element => this.museum.quarterwiki = element.article.value);
    });
    });
    this.museumService.getMuseumDescription(name)
    .subscribe(data => {data.results.bindings.forEach(element => this.museum.description = element.description.value);
    });
    this.museumService.getMuseumTelephone(name)
    .subscribe(data => {data.results.bindings.forEach(element => this.museum.telephone = element.telephone.value);
    });
    this.museumService.getMuseumEmail(name)
    .subscribe(data => {data.results.bindings.forEach(element => this.museum.email = element.email.value);
    });
    this.museumService.getMuseumWebpage(name)
    .subscribe(data => {data.results.bindings.forEach(element => this.museum.webpage = element.webpage.value);
    });
    this.museumService.getStreet(name)
    .subscribe(data => {data.results.bindings.forEach(element => this.museum.street = element.street.value);
    });
    this.museumService.getZip(name)
    .subscribe(data => {data.results.bindings.forEach(element => this.museum.zip = element.zip.value);
    });
    this.museumService.getBus(name)
    .subscribe(data => {data.results.bindings.forEach(element => this.museum.bus = element.bus.value);
    });
    this.museumService.getMetroStationLink(name)
    .subscribe(data => {data.results.bindings.forEach(element => this.museum.metrostationwikiid = element.metrostationwiki.value.substring(30));
      this.museumService.getWikipedia(this.museum.metrostationwikiid)
      .subscribe(data5 => {data5.results.bindings.forEach(element => console.log(this.museum.metrostationwiki = element.article.value));
    });});
    this.museumService.getMetroStationName(name)
    .subscribe(data => {data.results.bindings.forEach(element => this.museum.metrostationname = element.metrostationname.value);
    });
    this.museumService.getMetroLine(name)
    .subscribe(data => {data.results.bindings.forEach(element => this.museum.metroline = element.metroline.value);
    });

    this.museumService.getMuseumLink(name)
    .subscribe(data => {
      data.results.bindings.forEach(element => this.museum.wikiid = element.link.value.substring(30));
      this.museumService.getPicture(this.museum.wikiid)
      .subscribe(data2 => {data2.results.bindings.forEach(element => this.museum.picture = element.pic.value);
      });
      this.museumService.getWikipedia(this.museum.wikiid)
      .subscribe(data3 => {data3.results.bindings.forEach(element => this.museum.wikipedia = element.article.value);
    });
  });
}

  goBack(): void {
  this.location.back();
}

}
