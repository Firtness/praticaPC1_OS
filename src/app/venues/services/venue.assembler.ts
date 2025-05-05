

import { Venue } from '../model/venue.entity';
import { Image } from '../model/image.entity';
import {VenuesResponse,VenueResource} from './venues.response';

export class VenueAssembler {
  static toEntityFromResource(resource: VenueResource): Venue {
    const venue = new Venue();

    venue.name = resource.name;
    venue.url = resource.url;
    venue.timeZone = resource.timezone ?? '';
    venue.parkingDetail = resource.parkingDetail ?? '';
    venue.city = resource.city?.name ?? '';
    venue.country = resource.country?.name ?? '';
    venue.address = resource.address?.line1 ?? '';
    venue.images = (resource.images ?? []).map((img) => {
      const image = new Image();
      image.ratio = img.ratio;
      image.url = img.url;
      image.width = img.width;
      image.height = img.height;
      image.fallback = img.fallback;
      return image;
    });

    return venue;
  }

  static toEntitiesFromResponse(response: VenuesResponse): Venue[] {

    return response._embedded.venues.map(venue => this.toEntityFromResource(venue));
  }

}
