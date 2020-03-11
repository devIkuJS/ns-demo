import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { RegistroUsuarioRoutingModule } from './registro-usuario-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { RegistroUsuarioComponent } from './registro-usuario.component';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';




@NgModule({
  declarations: [RegistroUsuarioComponent],
  imports: [
    RegistroUsuarioRoutingModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class RegistroUsuarioModule { }
