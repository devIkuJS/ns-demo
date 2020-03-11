import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetalleComponent } from './restaurant-detalle/restaurant-detalle.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ContactosComponent } from './contactos/contactos.component';
import { FavoriteRestaurantsComponent } from './favorite-restaurants/favorite-restaurants.component';



const routes: Routes = [
  { path: "restaurants", component: RestaurantsComponent },
  { path: "restaurant-detalle", component: RestaurantDetalleComponent },
  { path: "favorite-restaurants", component: FavoriteRestaurantsComponent },
  { path: "perfil", component: PerfilComponent },
  { path: "contactos", component: ContactosComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule { }
