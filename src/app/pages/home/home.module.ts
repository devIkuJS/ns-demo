import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
//Plugin Box Shadow
import { NgShadowModule } from 'nativescript-ng-shadow';
//Plugin Card View
import { registerElement } from 'nativescript-angular/element-registry';
import { CardView } from '@nstudio/nativescript-cardview';
import { RestaurantDetalleComponent } from './restaurant-detalle/restaurant-detalle.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ContactosComponent } from './contactos/contactos.component';
import { FavoriteRestaurantsComponent } from './favorite-restaurants/favorite-restaurants.component';
registerElement('CardView', () => CardView);
registerElement("Mapbox", () => require("nativescript-mapbox").MapboxView);



@NgModule({
  declarations: [ RestaurantsComponent, BottomBarComponent, RestaurantDetalleComponent, PerfilComponent, ContactosComponent, FavoriteRestaurantsComponent],
  imports: [
    HomeRoutingModule,
    NativeScriptCommonModule,
    NgShadowModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule { }
