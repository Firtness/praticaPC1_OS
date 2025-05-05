import {Image} from './image.entity';

export class Venue {
  name: string
  url: string
  timeZone: string
  parkingDetail: string
  images: Image[]
  city: string
  country: string
  address: string


  constructor() {
    this.name = '';
    this.url = '';
    this.timeZone = '';
    this.parkingDetail = '';
    this.images = [];
    this.city = '';
    this.country = '';
    this.address = '';
  }
}
