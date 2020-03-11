import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../../services/restaurant.service';
import { Restaurant } from '../../../model/restaurant';
import * as dialogs from "tns-core-modules/ui/dialogs";
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'ns-favorite-restaurants',
  templateUrl: './favorite-restaurants.component.html',
  styleUrls: ['./favorite-restaurants.component.css']
})
export class FavoriteRestaurantsComponent implements OnInit {

  public favoriteRestaurants : Array<Restaurant> = [];

  constructor(private _restaurantService : RestaurantService , private page : Page) {
    this.page.actionBarHidden = true;
   }

  ngOnInit(): void {
    this.listFavoriteRestaurant();
  }


  listFavoriteRestaurant(){
    this._restaurantService.favoriteRestaurants().subscribe(response =>{


        this.favoriteRestaurants = response["collections"];

        console.dir(this.favoriteRestaurants);

    },
    error =>{
      dialogs.alert(error)
    })
  }

}
