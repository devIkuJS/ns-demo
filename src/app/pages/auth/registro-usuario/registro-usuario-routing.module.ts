import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { RegistroUsuarioComponent } from './registro-usuario.component';


const routes: Routes = [
  { path: "", component: RegistroUsuarioComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class RegistroUsuarioRoutingModule { }
