export class Museum {
  id: number;
  name: string;
  hours: string;
  quarter: string;
  qwikiid: string;
  quarterwiki: string;
  type: string;
  description: string;
  telephone: string;
  email: string;
  webpage: string;
  street: string;
  zip: string;
  city: string = 'MADRID';
  latitude:number;
  longitude:number;
  wikipedia: string;
  wikiid: string;
  picture: string;
  bus: string;
  metrostationname: string;
  metrostationwikiid: string;
  metrostationwiki: string;
  metroline: string;

  constructor(name: string) {
    this.name = name;
  }

}
