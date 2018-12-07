import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Museum } from './museum';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class MuseumService {

  private fusekiUrl = 'http://localhost:3030/MuseumsandMonumentsMadrid/query';
  private wikiUrl = 'https://query.wikidata.org/sparql';
  private museumUrl = 'http://localhost:4200/search'

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    ) { }

query = 'PREFIX http: <http://www.w3.org/2011/http#>prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> prefix owl: <http://www.w3.org/2002/07/owl#> prefix schema: <http://schema.org/> SELECT ?name WHERE { ?x a schema:CivicStructure; schema:name ?name.}';
getMuseums(): Observable<any> {
  return this.http.get<any>(this.fusekiUrl + '?query=' + encodeURIComponent(this.query));
}

searchMuseums(term: string): Observable<Museum[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Museum[]>(`${this.museumUrl}/?name=${term}`).pipe(
    tap(_ => console.log(`found museums matching "${term}"`)),
    catchError(this.handleError<Museum[]>('searchHeroes', []))
  );
}

getMuseumHours(name: string): Observable<any> {
  var a = 'PREFIX schema: <http://schema.org/> SELECT ?hours WHERE {?x a schema:CivicStructure; schema:name"';
  var c = '"^^<xsd:string>.?x schema:openingHours ?hours.}'
  var x = a.concat(name);
  var localquery = x.concat(c);
  return this.http.get<any>(this.fusekiUrl + '?query=' + encodeURIComponent(localquery));
}

getMuseumType(name: string): Observable<any> {
  var a = 'PREFIX schema: <http://schema.org/> SELECT ?type WHERE {?x a schema:CivicStructure; schema:name"';
  var c = '"^^<xsd:string>.?x a ?type. FILTER (?type != schema:CivicStructure). }';
  var x = a.concat(name);
  var localquery = x.concat(c);
  return this.http.get<any>(this.fusekiUrl + '?query=' + encodeURIComponent(localquery));
}

getQuarter(name: string): Observable<any> {
  var a = 'PREFIX schema: <http://schema.org/> PREFIX mam:<http://www.semanticweb.org/museumsandmonumentsmadrid/ontology/> SELECT ?quarter WHERE {?x a schema:CivicStructure; schema:geo ?geocoordinates; schema:name"';
  var c = '"^^<xsd:string>.?geocoordinates schema:address ?address. ?address mam:hasQuarter ?quarter.}';
  var x = a.concat(name);
  var localquery = x.concat(c);
  console.log(localquery);
  return this.http.get<any>(this.fusekiUrl + '?query=' + encodeURIComponent(localquery));
}
getQuarterWiki(name: string): Observable<any> {
  var a = 'PREFIX schema: <http://schema.org/> PREFIX owl: <http://www.w3.org/2002/07/owl#> PREFIX mam:<http://www.semanticweb.org/museumsandmonumentsmadrid/ontology/> SELECT ?quarterwiki WHERE {?x a schema:CivicStructure; schema:geo ?geocoordinates; schema:name"';
  var c = '"^^<xsd:string>.?geocoordinates schema:address ?address. ?address mam:hasQuarter ?quarter. ?quarter owl:sameAs ?quarterwiki.}';
  var x = a.concat(name);
  var localquery = x.concat(c);
  console.log(localquery);
  return this.http.get<any>(this.fusekiUrl + '?query=' + encodeURIComponent(localquery));
}
getMuseumDescription(name: string): Observable<any> {
  var a = 'PREFIX schema: <http://schema.org/> SELECT ?description WHERE {?x a schema:CivicStructure; schema:name "';
  var c = '"^^<xsd:string>; schema:description ?description.}'
  var x = a.concat(name);
  var localquery = x.concat(c);
  return this.http.get<any>(this.fusekiUrl + '?query=' + encodeURIComponent(localquery));
}

getMuseumTelephone(name: string): Observable<any> {
  var a = 'PREFIX schema: <http://schema.org/> SELECT ?telephone WHERE {?x a schema:CivicStructure; schema:name "';
  var c = '"^^<xsd:string>; schema:telephone ?telephone.}';
  var x = a.concat(name);
  var localquery = x.concat(c);
  return this.http.get<any>(this.fusekiUrl + '?query=' + encodeURIComponent(localquery));
}

getMuseumEmail(name: string): Observable<any> {
  var a = 'PREFIX schema: <http://schema.org/> PREFIX vcard: <http://www.w3.org/2006/vcard/ns#> SELECT ?email WHERE {?x a schema:CivicStructure; schema:name "';
  var c = '"^^<xsd:string>; vcard:email ?email.}';
  var x = a.concat(name);
  var localquery = x.concat(c);
  return this.http.get<any>(this.fusekiUrl + '?query=' + encodeURIComponent(localquery));
}

getMuseumWebpage(name: string): Observable<any> {
  var a = 'PREFIX mam: <http://www.semanticweb.org/museumsandmonumentsmadrid/ontology/>  PREFIX schema: <http://schema.org/> SELECT ?webpage WHERE {?x a schema:CivicStructure; schema:name "';
  var c = '"^^<xsd:string>; mam:webpage ?webpage.}';
  var x = a.concat(name);
  var localquery = x.concat(c);
  return this.http.get<any>(this.fusekiUrl + '?query=' + encodeURIComponent(localquery));
}

getMuseumLink(name: string): Observable<any> {
  var a = 'PREFIX owl: <http://www.w3.org/2002/07/owl#>  PREFIX schema: <http://schema.org/> SELECT ?link WHERE {?x a schema:CivicStructure; schema:name "';
  var c = '"^^<xsd:string>; owl:sameAs ?link.}';
  var x = a.concat(name);
  var localquery = x.concat(c);
  return this.http.get<any>(this.fusekiUrl + '?query=' + encodeURIComponent(localquery));
}

getStreet(name: string): Observable<any> {
  var a = 'PREFIX schema:<http://schema.org/> SELECT ?street WHERE {?x a schema:CivicStructure; schema:geo ?geocoordinates; schema:name "';
  var c = '"^^<xsd:string>. ?geocoordinates schema:address ?address. ?address schema:streetAddress ?street.}';
  var x = a.concat(name);
  var localquery = x.concat(c);
  return this.http.get<any>(this.fusekiUrl + '?query=' + encodeURIComponent(localquery));
}

getZip(name: string): Observable<any> {
  var a = 'PREFIX schema:<http://schema.org/> SELECT ?zip WHERE {?x a schema:CivicStructure; schema:geo ?geocoordinates; schema:name "';
  var c = '"^^<xsd:string>. ?geocoordinates schema:address ?address. ?address schema:postalCode ?zip.}';
  var x = a.concat(name);
  var localquery = x.concat(c);
  return this.http.get<any>(this.fusekiUrl + '?query=' + encodeURIComponent(localquery));
}

getLatitude(name:string): Observable<any> {
  var a = 'PREFIX schema:<http://schema.org/> SELECT ?latitude WHERE {?sight a schema:CivicStructure; schema:geo ?geocoordinates; schema:name "';
  var c = '"^^<xsd:string>. ?geocoordinates schema:latitude ?latitude.}';
  var x = a.concat(name);
  var localquery = x.concat(c);
  console.log(localquery);
  return this.http.get<any>(this.fusekiUrl + '?query=' + encodeURIComponent(localquery));
}

getLongitude(name:string): Observable<any> {
  var a = 'PREFIX schema:<http://schema.org/> SELECT ?longitude WHERE {?sight a schema:CivicStructure; schema:geo ?geocoordinates; schema:name "';
  var c = '"^^<xsd:string>. ?geocoordinates schema:longitude ?longitude.}';
  var x = a.concat(name);
  var localquery = x.concat(c);
  console.log(localquery);
  return this.http.get<any>(this.fusekiUrl + '?query=' + encodeURIComponent(localquery));
}

getBus(name:string): Observable<any>{
var a = 'PREFIX schema: <http://schema.org/> PREFIX mam: <http://www.semanticweb.org/museumsandmonumentsmadrid/ontology/> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> SELECT ?bus WHERE {?sight a schema:CivicStructure. ?sight schema:name "'
var c =  '"^^<xsd:string>.?sight mam:reachableBy ?transport.?transport a mam:PublicTransport.?trip rdfs:subClassOf ?transport.?trip schema:busNumber ?bus.}'
var x = a.concat(name);
var localquery = x.concat(c);
return this.http.get<any>(this.fusekiUrl + '?query=' + encodeURIComponent(localquery));
}

getMetroStationLink(name:string): Observable<any>{
var a = 'PREFIX owl: <http://www.w3.org/2002/07/owl#> PREFIX schema: <http://schema.org/> PREFIX mam:<http://www.semanticweb.org/museumsandmonumentsmadrid/ontology/> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> SELECT ?metrostationwiki WHERE {?sight a schema:CivicStructure; mam:reachableBy ?transport; schema:name "';
var c = '"^^<xsd:string>. ?transport a mam:PublicTransport. ?trip rdfs:subClassOf ?transport;schema:arrivalStation ?metrostation. ?metrostation owl:sameAs ?metrostationwiki.}'
var x = a.concat(name);
var localquery = x.concat(c);
return this.http.get<any>(this.fusekiUrl + '?query=' + encodeURIComponent(localquery));
}

getMetroStationName(name:string): Observable<any>{
var a = 'PREFIX schema: <http://schema.org/> PREFIX mam:<http://www.semanticweb.org/museumsandmonumentsmadrid/ontology/> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> SELECT ?metrostationname WHERE {?sight a schema:CivicStructure; mam:reachableBy ?transport; schema:name "';
var c = '"^^<xsd:string>. ?transport a mam:PublicTransport. ?trip rdfs:subClassOf ?transport; schema:arrivalStation ?metrostation. ?metrostation schema:name ?metrostationname.}'
var x = a.concat(name);
var localquery = x.concat(c);
return this.http.get<any>(this.fusekiUrl + '?query=' + encodeURIComponent(localquery));
}

getMetroLine(name:string): Observable<any>{
var a = 'PREFIX schema: <http://schema.org/> PREFIX mam:<http://www.semanticweb.org/museumsandmonumentsmadrid/ontology/> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> SELECT ?metroline WHERE {?sight a schema:CivicStructure; mam:reachableBy ?transport; schema:name "';
var c = '"^^<xsd:string>. ?transport a mam:PublicTransport. ?trip rdfs:subClassOf ?transport; schema:trainNumber ?metroline.}'
var x = a.concat(name);
var localquery = x.concat(c);
return this.http.get<any>(this.fusekiUrl + '?query=' + encodeURIComponent(localquery));
}


getPicture(wikiid: string): Observable<any>{
  var a = 'SELECT ?pic WHERE { wd:';
  var c = ' wdt:P18 ?pic.}';
  var x = a.concat(wikiid);
  var localquery = x.concat(c);
  return this.http.get<any>(this.wikiUrl + '?query=' + encodeURIComponent(localquery));
}

getWikipedia(wikiid:string):Observable<any>{
  var a = 'prefix schema: <http://schema.org/> PREFIX wd: <http://www.wikidata.org/entity/> SELECT ?article WHERE {?article schema:about wd:';
  var c = '.?article schema:inLanguage "es". FILTER (SUBSTR(str(?article), 1, 25) = "https://es.wikipedia.org/")}';
  console.log(wikiid);
  var x = a.concat(wikiid);
  var localquery = x.concat(c);
  console.log(localquery);
  return this.http.get<any>(this.wikiUrl + '?query=' + encodeURIComponent(localquery));
}



/**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
