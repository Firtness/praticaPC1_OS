import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Venue} from '../model/venue.entity';
import {VenueAssembler} from './venue.assembler';
import {VenuesResponse} from './venues.response';

@Injectable({
  providedIn: 'root'
})
export class VenuesApiService {
  private baseUrl: string = environment.newsProviderApiBaseUrl;
  private newsEndPoint: string = environment.newsProviderVenuesEndpointPath;
  private apiKey: string = environment.newProviderApiKey;
  constructor(private http: HttpClient) {

  }

  getVenues(): Observable<Venue[]>{
    return this.http.get<VenuesResponse>(`${this.baseUrl}${this.newsEndPoint}`,{
      params: { apikey: this.apiKey }
    }).pipe(
      map(response => VenueAssembler.toEntitiesFromResponse(response))
    );
  }

}
