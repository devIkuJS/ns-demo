import { Component, OnInit } from '@angular/core';

import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page/page';
import { IndicatorService } from '../../../shared/indicator.service';
import { ToastService } from '../../../shared/toast.service';
import { AuthService } from '../../../services/auth.service';
import * as dialogs from "tns-core-modules/ui/dialogs";
import { SecureLocalstorageService } from '../../../shared/secure-localstorage.service';
import { ValidatorsService } from '../../../shared/validators.service';

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(private _authService: AuthService , private router: RouterExtensions , private page : Page , private _indicatorService:IndicatorService , 
    private _toastService: ToastService , private _localService: SecureLocalstorageService , private _validatorService: ValidatorsService) { 
    // Datos propocionados del API FAKE , Ver documentacion en  https://reqres.in/
    this.email = "";
    this.password = "";
    this.page.actionBarHidden = true; //oculta el action bar
  }

  ngOnInit(): void {
  }

  
  login() {

     if(!this._validatorService.isValidUser(this.email, this.password)){

      this._toastService.showToast("Los datos ingresados son inválidos");
      
      return;

    }else{

      this._indicatorService.show('Cargando...');

      const data = {
        email: this.email , 
        password: this.password
      };

      console.dir(data);

      this._authService.login(data).subscribe( response =>{

          this.router.navigate(['/home/restaurants'] , {
            clearHistory : true
          }).then(() =>{
  
            this._localService.setUser("token" , JSON.stringify(response));
            this._indicatorService.hide();
          })
      },
      error => 
          dialogs.alert(error).then(() =>{
            this._indicatorService.hide();
          })
      );

    }  
  
    

  }
  




}
