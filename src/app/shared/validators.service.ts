import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }


  public isValidUser(email: string , password: string) : boolean{

     if(email == "" || password == ""){
        return false
    }else{
      return true
    }
  }

  public isValidRegister(first_name: string , email: string , password: string) : boolean{

    if(first_name == "" || email == "" || password == ""){
       return false
   }else{
     return true
   }
 }

}
