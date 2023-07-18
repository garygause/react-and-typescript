import { Mappable } from './Map';

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor(name: string, location: { lat: number; lng: number }) {
    this.name = name;
    this.location = location;
  }

  markerContent(): string {
    return `User is ${this.name}`;
  }
}
