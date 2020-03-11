import { CanActivate } from "@angular/router";
import {SecureLocalstorageService} from '../../shared/secure-localstorage.service';
import { Injectable } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private _localservice: SecureLocalstorageService, private router: RouterExtensions) {}

    canActivate() {
      
        if(this._localservice.getUser("token") === null){
            // Si no hay ningun usuario , va redirigir al login component
            return true;
        }else{
            this.router.navigate(['/home/restaurants']);
            // Si ya existe un usuario , seguira el proceso hacia la vista principal
            return false;
        }
    }
}