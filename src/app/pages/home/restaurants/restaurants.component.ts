import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../../services/restaurant.service';
import { RouterExtensions } from 'nativescript-angular/router';
import { Restaurant } from '../../../model/restaurant';
import * as dialogs from "tns-core-modules/ui/dialogs";
import { Page } from 'tns-core-modules/ui/page/page';


@Component({
  selector: 'ns-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  public listRestaurants : Array<Restaurant> = [];

  constructor(private _restaurantService: RestaurantService , private router: RouterExtensions , private page : Page) {
    this.page.actionBarHidden = true;
   }

  ngOnInit(): void {

  this.getRestaurant();

  }

  getRestaurant(){
    this._restaurantService.getRestaurants().subscribe(response =>{

        this.listRestaurants = response["restaurants"];

    },
    error =>{
      dialogs.alert(error)
    })
  }

  onNavigateDetalle(item){
    this.router.navigate(['/home/restaurant-detalle'],{
      queryParams: {
        restaurant : JSON.stringify(item)
      }
    })

  }

}
