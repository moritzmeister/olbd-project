export class Museum {
  id: number;
  name: string;
  hours: string;
  quarter: string;
  type: string;
  description: string;
  telephone: string;
  email: stirng;
  webpage: string;
  street: string;
  zip: string;
  city: string = 'MADRID';
  wikipedia: string;
  wikiid: string;
  picture: string;
  bus:string;
  metrostationlink:string;
  metrostationname:string;
  metroline:string;

  constructor(name: string) {
    this.name = name;
  }

}
