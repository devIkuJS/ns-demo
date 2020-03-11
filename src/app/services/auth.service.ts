import { Injectable } from '@angular/core';
import {URL_API_USER} from '../shared/config';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {retry, catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) { }
  
  
  login(data) {

   return this.http.post<User[]>(`${URL_API_USER}login`,  {headers: this.commonHeader() } ).pipe(retry(1));
  } 
  
  registro(data){

    return this.http.post<User[]>(`${URL_API_USER}register`,  {headers: this.commonHeader() } ).pipe(retry(1));

  }

  getPerfil(id){

    return this.http.get<User[]>(`${URL_API_USER}users/${id}` ,  {headers: this.commonHeader() }).pipe(retry(1));

  }

  private commonHeader(){
    return new HttpHeaders({
      'Content-Type':'application/json'
     });
   }

 

  
  

 

 
 
  
}
