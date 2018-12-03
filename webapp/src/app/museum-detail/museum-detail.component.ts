import { Component, OnInit, Input } from '@angular/core';
import { Museum } from '../museum';

@Component({
  selector: 'app-museum-detail',
  templateUrl: './museum-detail.component.html',
  styleUrls: ['./museum-detail.component.css']
})
export class MuseumDetailComponent implements OnInit {
  @Input() museum:Museum;

  constructor() { }

  ngOnInit() {
  }

}
