import { Injectable } from '@angular/core';
import { NsToast2 } from 'nativescript-ns-toast2';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  
  private toast: NsToast2;
  constructor() { 

    this.toast = new NsToast2();

  }

  public showToast(message: string){
    this.toast.show(message);

  }
}
