import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Sight } from './sight';
import { SIGHTS } from './mock-sights';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private headers: HttpHeaders;
  private mamUrl = 'http://localhost:3030/MuseumsandMonumentsMadrid/query';
  private testQuery = 'prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> prefix owl: <http://www.w3.org/2002/07/owl#> prefix schema: <http://schema.org/> SELECT ?name ?opening WHERE { ?x a schema:CivicStructure. ?x schema:name ?name . ?x schema:openingHours ?opening. }';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  getSights(): Observable<any> {
    // Make the HTTP request:
    return this.http.get<any>(this.mamUrl + '?query=' + encodeURIComponent(this.testQuery));
  }
}
