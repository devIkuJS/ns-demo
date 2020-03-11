import { Injectable } from '@angular/core';
import {URL_API_USER} from '../shared/config';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  listContacts(){

    return this.http.get<User[]>(`${URL_API_USER}users?page=2` , {headers: this.commonHeader() } ).pipe(retry(1));
    
  }


  private commonHeader(){
    return new HttpHeaders({
      'Content-Type':'application/json'
     });
   }

  

}
