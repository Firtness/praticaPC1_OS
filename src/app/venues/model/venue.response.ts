export interface VenuesResponse {
  _embedded: {
    venues: VenueResponse[];
  };
}

export interface VenueResponse {
  name: string;
  url: string;
  timezone?: string;
  parkingDetail?: string; // Este campo no aparece en el JSON que me diste, así que probablemente debas quitarlo o hacerlo opcional.
  images?: ImageResponse[];
  city: {
    name: string;
  };
  country: {
    name: string;
  };
  address: {
    line1: string;
  };
}

export interface ImageResponse {
  ratio: string;
  url: string;
  width: number;
  height: number;
  fallback: boolean;
}
