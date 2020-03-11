import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MapboxViewApi } from "nativescript-mapbox";
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page/page';
import { Restaurant } from '../../../model/restaurant';

@Component({
  selector: 'ns-restaurant-detalle',
  templateUrl: './restaurant-detalle.component.html',
  styleUrls: ['./restaurant-detalle.component.css']
})
export class RestaurantDetalleComponent implements OnInit {

  public restaurant : Restaurant;

  public map: MapboxViewApi;
  
  constructor(private params: ActivatedRoute , private router: RouterExtensions , private page:Page) {

    let param = JSON.parse(this.params.snapshot.queryParams["restaurant"]);
    this.restaurant = param["restaurant"];
    this.page.actionBarHidden = true;
    
   }

  ngOnInit(): void {
  }

    public onMapReady(args, restaurant): void {
      this.map = args.map;
      this.map.addMarkers([
          {
              lat: restaurant.location.latitude,
              lng: restaurant.location.longitude,
              title: restaurant.name,
              subtitle: restaurant.timings
          }
      ]);
  }

  public onBack() {
    this.router.back();
  }

}
