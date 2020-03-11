# Título del Proyecto

_Demo NativeScript Tienda_

## Comenzando 🚀

_Demo de Nativescript utilizando un plugin personalizado de Toast , la carpeta del plugin personalizado se encuentra en plugin_realizado/nombre_del_plugin._
_El plugin personalizado tiene por nombre NsToast2



### Instalación 🔧

_Para instalar el plugin ejecutar el comando:  tns plugin add nombre_del_plugin.tgz_

_Luego crear un service de angular y colocar _

```
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

```

_Y finalmente para utilizarlo en el componente_

```
import { ToastService } from '../../../shared/toast.service';

constructor( private _toastService: ToastService ) { }


 this._toastService.showToast("Mensaje que se enviara en el Toast");


```




## Autores ✒️


* **Brian Huamani** - *Trabajo Inicial* - [devIkuJS](https://github.com/devIkuJS)



## Licencia 📄

Este proyecto está bajo la Licencia  - mira el archivo [LICENSE.md](LICENSE.md) para detalles


---