import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ImagenService } from '../services/imagen.service';
import { Imagen } from '../models/imagen';

@Component({
  selector: 'imagen-detail',
  templateUrl: '../views/imagen-detail.html',
  providers: [ImagenService]
})

export class ImagenDetailComponent{
  public imagen: Imagen;

  constructor(
    private _imagenService: ImagenService,
    private _route: ActivatedRoute,
    private _router: Router
  ){

  }

  ngOnInit(){
    console.log('imagen-detail.component.ts cargado...');

    this.getImagen();
  }

  getImagen(){
    this._route.params.forEach((params: Params) => {
      let id = params['id'];

      this._imagenService.getImagen(id).subscribe(
        response => {
          if(response.code == 200){
            this.imagen = response.data;
          }else{
            this._router.navigate(['/imagenes']);
          }
        },
        error => {
          console.log(<any>error);
        }
      )
    });
  }
}
