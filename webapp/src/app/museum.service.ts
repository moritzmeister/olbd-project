import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Museum } from './museum';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class MuseumService {

  private fusekiUrl = 'http://localhost:3030/MuseumsandMonumentsMadrid/query';
  private wikiUrl = 'https://query.wikidata.org/sparql';

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    ) { }

query = 'PREFIX http: <http://www.w3.org/2011/http#>prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> prefix owl: <http://www.w3.org/2002/07/owl#> SELECT ?name WHERE { ?x a <http://schema.org/CivicStructure>. ?x <http://schema.org/name> ?name.}';
getMuseums(): Observable<any> {
  return this.http.get<any>(this.fusekiUrl + '?query=' + encodeURIComponent(this.query));
}

getMuseumHours(name: string): Observable<any> {
  const a = 'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> SELECT ?hours WHERE {?x a <http://schema.org/CivicStructure>.?x <http://schema.org/name>"';
  const c = '"^^<xsd:string>.?x <http://schema.org/openingHours> ?hours.}';
  const x = a.concat(name);
  const localquery = x.concat(c);
  console.log(localquery);
  return this.http.get<any>(this.fusekiUrl + '?query=' + encodeURIComponent(localquery));
}

getMuseumType(name: string): Observable<any> {
  const a = 'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> SELECT ?type WHERE {?x a <http://schema.org/CivicStructure>.?x <http://schema.org/name>"';
  const c = '"^^<xsd:string>.?x a ?type. FILTER (?type != <http://schema.org/CivicStructure>). }';
  const x = a.concat(name);
  const localquery = x.concat(c);
  console.log(localquery);
  return this.http.get<any>(this.fusekiUrl + '?query=' + encodeURIComponent(localquery));
}
getMuseumDescription(name: string): Observable<any> {
  const a = 'PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX schema: <http://schema.org/> SELECT ?description WHERE {?x a schema:CivicStructure; schema:name "';
  const c = '"^^<xsd:string>; schema:description ?description.}';
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
