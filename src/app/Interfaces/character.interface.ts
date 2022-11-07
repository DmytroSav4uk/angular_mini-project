export class ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  image: string;
  url: string;
  gender:string;
  location:{
    name:string;
    url:string;
  }
  origin:{
    name:string;
    url:string;
  }
  episode:[]

}
