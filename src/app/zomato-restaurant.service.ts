import { Injectable } from '@angular/core';

//import http module
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ZomatoRestaurantService
{
  private URL_LOCATIONS = "https://developers.zomato.com/api/v2.1/locations";
  private URL_LOCATIONS_DETAIL = "https://developers.zomato.com/api/v2.1/location_details";
  constructor(private http: HttpClient) { }
  getLocation(location: string) {
    return this.http.get(this.URL_LOCATIONS, {
      params: new HttpParams().set("query", location)
    })
  }
  getLocationDetails(id: number, type: string) {
    return this.http.get(this.URL_LOCATIONS_DETAIL, {
      params: new HttpParams().set("entity_id", id.toString()).set("entity_type", type)
    })
  } 
}
