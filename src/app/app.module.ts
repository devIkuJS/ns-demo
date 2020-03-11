import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { NativeScriptHttpClientModule} from "nativescript-angular/http-client";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { InterceptorService } from "./shared/interceptor/interceptor.service";



@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpClientModule
    ],

    declarations: [
        AppComponent
    ],
    providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: InterceptorService,
          multi: true
        } 
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
