import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.css']
})
export class BottomBarComponent implements OnInit {

  constructor(private router: RouterExtensions) { }

  ngOnInit(): void {
  }

  public onNavigate(url: string) {
    this.router.navigate([url], {
        animated: false,
        clearHistory: true
    });


}

}
