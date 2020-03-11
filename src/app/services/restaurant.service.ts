import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {URL_API_RESTAURANTS} from '../shared/config';
import { retry } from 'rxjs/operators';

import { Restaurant } from '../model/restaurant';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  
  
  public getRestaurants(){
    return this.http.get<Restaurant[]>(`${URL_API_RESTAURANTS}search?count=10` , {headers: this.commonHeader()}).pipe(retry(1));
  }

  public favoriteRestaurants(){
    return this.http.get<Restaurant[]>(`${URL_API_RESTAURANTS}collections?city_id=281` , {headers: this.commonHeader()}).pipe(retry(1));
  }



  
  private commonHeader(){
   return new HttpHeaders({
     'user-key': '079aaf542924e02411fea29281a1f543'
    });
  }
  
}
