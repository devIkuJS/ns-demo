import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../services/contact.service';
import * as dialogs from "tns-core-modules/ui/dialogs";
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'ns-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

  public listContacts : Array<any> = [];

  constructor(private _contactService: ContactService , private page : Page) {
    this.page.actionBarHidden = true;
   }

  ngOnInit(): void {
    this.getListContact();
  }

  getListContact(){

    this._contactService.listContacts().subscribe(response => {

      this.listContacts = response["data"];

    },
      error =>

      dialogs.alert(error)

    )};

}
