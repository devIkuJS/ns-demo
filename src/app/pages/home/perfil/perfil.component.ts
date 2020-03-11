import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { SecureLocalstorageService } from '../../../shared/secure-localstorage.service';
import { RouterExtensions } from 'nativescript-angular/router';
import * as dialogs from "tns-core-modules/ui/dialogs";
import { User } from '../../../model/user';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'ns-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public perfil : User;
   

  constructor(private _localService: SecureLocalstorageService , private _authService: AuthService , private router: RouterExtensions , private page: Page) { 

    this.page.actionBarHidden = true;
    
    this.perfil = {
      first_name : "",
      email: "",
      avatar: ""
    }
   
  }

  ngOnInit(): void {
    this.getPerfil();
  }

    public getPerfil(){

    this._authService.getPerfil(2).subscribe( response => {

      this.perfil.first_name = response["data"]["first_name"] + " " + response["data"]["last_name"];
      this.perfil.email = response["data"]["email"];
      this.perfil.avatar = response["data"]["avatar"];
      
    },
    error =>

    dialogs.alert(error)
    )}


    public logout() {

      dialogs.confirm({
        title: "Mensaje",
        message: "Esta Ud. seguro de cerrar la sesión?",
        okButtonText: "Si",
        cancelButtonText: "No",
        }).then( (result) => {

          if(result){
            this._localService.removeUser("token");
        
          this.router.navigate(['/login'], { clearHistory: true });
  
          }
        
      });  
    }

}
