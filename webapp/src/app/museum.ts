export class Museum {
  id: number;
  name: string;
  hours: string;
  type: string;
  description: string;
  telephone: string;
  webpage: string;
  wikipedia: string;
  wikiid: string;
  picture: string;
  bus:string;
  metro:string;

  constructor(name: string) {
    this.name = name;
  }

}
