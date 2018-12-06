import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Sight } from './sight';
import { Observable, of, forkJoin} from 'rxjs';
import { map } from 'rxjs/operators';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { MaxLengthValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  // private headers: HttpHeaders;
  private fusekiUrl = 'http://localhost:3030/MuseumsandMonumentsMadrid/query';
  private wikiUrl = 'https://query.wikidata.org/sparql';

  constructor(private http: HttpClient) {
    // this.headers = new HttpHeaders();
    // this.headers.append('Content-Type', 'application/json');
    // this.headers.append('Accept', 'application/json');
  }

  getSights(): Observable<any> {
    const a = 'prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> prefix owl: <http://www.w3.org/2002/07/owl#> prefix schema: <http://schema.org/> ';
    const b = 'SELECT ?name ?opening ?telephone ?type ?link WHERE { ';
    const c = '?x a schema:CivicStructure. ';
    const d = '?x schema:name ?name. ';
    const e = '?x schema:openingHours ?opening. ';
    const f = '?x a ?type. ';
    const g = '?x schema:telephone ?telephone. ';
    const h = 'optional(?x owl:sameAs ?link.} ';
    const z = 'FILTER (?type != schema:CivicStructure).}';
    const localquery = a + b + c + d + e + f + g + h + z;
    return this.http.get<any>(this.fusekiUrl + '?query=' + encodeURIComponent(localquery));
  }

  getInfoMulti(name: string): Observable<any[]> {
    const museumHours = this.getMuseumHours(name);
    const museumType = this.getMuseumType(name);
    const musuemTelephone = this.getMuseumTelephone(name);
    const musuemWebpage = this.getMuseumWebpage(name);
    const museumLink = this.getMuseumLink(name);

    return forkJoin([museumHours, museumType, musuemTelephone, musuemWebpage, museumLink]);
  }


  getMuseumHours(name: string): Observable<any> {
    const a = 'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> SELECT ?hours WHERE {?x a <http://schema.org/CivicStructure>.?x <http://schema.org/name>"';
    const c = '"^^<xsd:string>.?x <http://schema.org/openingHours> ?hours.}'
    const x = a.concat(name);
    const localquery = x.concat(c);
    console.log(localquery);
    return this.http.get<any>(this.fusekiUrl + '?query=' + encodeURIComponent(localquery));
  }

  getMuseumType(name: string): Observable<any> {
    const a = 'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> SELECT ?type WHERE {?x a <http://schema.org/CivicStructure>.?x <http://schema.org/name>"';
    const c = '"^^<xsd:string>.?x a ?type. FILTER (?type != <http://schema.org/CivicStructure>). }'
    const x = a.concat(name);
    const localquery = x.concat(c);
    console.log(localquery);
    return this.http.get<any>(this.fusekiUrl + '?query=' + encodeURIComponent(localquery));
  }
  getMuseumDescription(name: string): Observable<any> {
    const a = 'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX schema: <http://schema.org/> SELECT ?description WHERE {?x a schema:CivicStructure; schema:name "';
    const c = '"^^<xsd:string>; schema:description ?description.}'
    const x = a.concat(name);
    const localquery = x.concat(c);
    console.log(localquery);
    return this.http.get<any>(this.fusekiUrl + '?query=' + encodeURIComponent(localquery));
  }

  getMuseumTelephone(name: string): Observable<any> {
    const a = 'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX schema: <http://schema.org/> SELECT ?telephone WHERE {?x a schema:CivicStructure; schema:name "';
    const c = '"^^<xsd:string>; schema:telephone ?telephone.}';
    const x = a.concat(name);
    const localquery = x.concat(c);
    console.log(localquery);
    return this.http.get<any>(this.fusekiUrl + '?query=' + encodeURIComponent(localquery));
  }

  getMuseumWebpage(name: string): Observable<any> {
    const a = 'PREFIX mam: <http://www.semanticweb.org/museumsandmonumentsmadrid/ontology/> PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX schema: <http://schema.org/> SELECT ?webpage WHERE {?x a schema:CivicStructure; schema:name "';
    const c = '"^^<xsd:string>; mam:webpage ?webpage.}';
    const x = a.concat(name);
    const localquery = x.concat(c);
    console.log(localquery);
    return this.http.get<any>(this.fusekiUrl + '?query=' + encodeURIComponent(localquery));
  }

  getMuseumLink(name: string): Observable<any> {
    const a = 'PREFIX owl: <http://www.w3.org/2002/07/owl#> PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX schema: <http://schema.org/> SELECT ?link WHERE {?x a schema:CivicStructure; schema:name "';
    const c = '"^^<xsd:string>; owl:sameAs ?link.}';
    const x = a.concat(name);
    const localquery = x.concat(c);
    console.log(localquery);
    return this.http.get<any>(this.fusekiUrl + '?query=' + encodeURIComponent(localquery));
  }

  getPicture(wikiid: string): Observable<any> {
    const a = 'SELECT ?pic WHERE { wd:';
    const c = ' wdt:P18 ?pic.}';
    const x = a.concat(wikiid);
    const localquery = x.concat(c);
    console.log(localquery);
    return this.http.get<any>(this.wikiUrl + '?query=' + encodeURIComponent(localquery));
  }


}
