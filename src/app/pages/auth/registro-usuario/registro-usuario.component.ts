import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { IndicatorService } from '../../../shared/indicator.service';
import { ToastService } from '../../../shared/toast.service';
import * as dialogs from "tns-core-modules/ui/dialogs";
import { AuthService } from '../../../services/auth.service';



@Component({
  selector: 'ns-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

   nombres:string;
   email:string;
   password:string;
   

  constructor(private page : Page , private _userService: AuthService , private router : RouterExtensions , private _indicatorService:IndicatorService , 
    private _toastService: ToastService) { 
    // Datos propocionados del API FAKE , Ver documentacion en  https://reqres.in/
    this.nombres="";
    this.email="";
    this.password="";
    this.page.actionBarHidden = true;


  }

  ngOnInit(): void {}

  

  registrarUsuario(){


    if(this.nombres == "" || this.nombres.length < 3 ){

      this._toastService.showToast("El nombre ingresado es inválido");

    }else if (this.email == ""){

      this._toastService.showToast("El correo ingresado es inválido");
     
    }else if (this.password == "" || this.password.length < 4){
     
      this._toastService.showToast("La contraseña ingresada es inválida");

    }else{

      this._indicatorService.show('Cargando...');

      let data = {
        email: this.email , 
        password: this.password
      };

      this._userService.registro(data).subscribe( () =>{

          this.router.navigate(['/home/restaurants'] , {
            clearHistory : true
          }).then(() =>{
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
