import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ImagenService } from '../services/imagen.service';
import { Imagen } from '../models/imagen';

@Component ({
  selector: 'imagen-list',
  templateUrl:'../views/imagenes-list.html',
  providers:[ImagenService]
})

export class ImagenListComponent{
  public titulo: string;
  public imagenes: Imagen[];
  public confirmado;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _imagenService: ImagenService
  ){
    this.titulo = 'listado de plagas';
    this.confirmado = null;
  }

  ngOnInit(){
    console.log('imagenes-list.component.ts cargado');

    this.getImagenes();
  }

  getImagenes(){
    this._imagenService.getImagenes().subscribe(
      result => {
        console.log(result); //funciona y da resultado success con codigo 200
        if (result.code !=200){
          console.log(result);
        }else{
          this.imagenes = result.data;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  borrarConfirm(id){
    this.confirmado = id;
  }

  cancelarConfirm(id){
    this.confirmado = null
  }

  onDeleteProducto(id){
    this._imagenService.deleteImagen(id).subscribe(
      response => {
        if(response.code == 200){
          this.getImagenes();
        }else{
          alert('Error al borrar registro');
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
