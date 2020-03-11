import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";


const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", loadChildren: () => import("./pages/auth/login/login.module").then((m) => m.LoginModule) },
    { path: "registro-usuario", loadChildren: () => import("./pages/auth/registro-usuario/registro-usuario.module").then((m) => m.RegistroUsuarioModule) },
    { path: "home", loadChildren: () => import("../app/pages/home/home.module").then((m) => m.HomeModule) }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
