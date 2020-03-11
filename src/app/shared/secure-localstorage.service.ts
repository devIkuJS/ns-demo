import { Injectable } from '@angular/core';
import { SecureStorage } from "nativescript-secure-storage";
@Injectable({
  providedIn: 'root'
})
export class SecureLocalstorageService {

  private secureStorage : SecureStorage

  constructor() {
    this.secureStorage = new SecureStorage();
   }

   setUser(key : string , value : any) {

    return this.secureStorage.setSync({
      key: key , 
      value: value
    })
  }

  getUser(key: string){

   return  this.secureStorage.getSync({
    key: key
  }) || null;
  
  }

  removeUser(key: string){


    return this.secureStorage.removeSync({
      key: key
    })

  }
  
}
