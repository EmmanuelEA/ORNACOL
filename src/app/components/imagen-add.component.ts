import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ImagenService } from '../services/imagen.service';
import { Imagen } from '../models/imagen';
import { GLOBAL } from '../services/global';

@Component({
  selector: 'imagen-add',
  templateUrl: '../views/imagen-add.html',
  providers: [ImagenService]
})

export class ImagenAddComponent{
  public titulo: string;
  public imagen: Imagen;
  public filesToUpload;
  public resultUpload;

  constructor(
    private _imagenService: ImagenService,
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.titulo = 'Crear un nuevo producto';
    this.imagen = new Imagen(0, 0, 0,'','','');
  }

  ngOnInit(){
    console.log('El producto-add.Component.ts cargado...');
  }

  onSubmit(){
    console.log(this.imagen);


    if(this.filesToUpload && this.filesToUpload.length >= 1){
      console.log("Upload file");
      this._imagenService.makeFileRequest(GLOBAL.url+'upload-file', [], this.filesToUpload).then((result)=>{
          console.log(result);
          //console.log(this._imagenService);
          this.resultUpload = result;
          this.imagen.ruta = this.resultUpload.filename;
          this.saveImagen();
      },(error) => {
          console.log(error);
        }
      );
    }else{

      this.saveImagen();
    }
  }

  saveImagen(){
    this._imagenService.addImagen(this.imagen).subscribe(
      response => {
        if(response.code == 200){
          this._router.navigate(['/imagenes']);
        }else{
          console.log(response);
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  fileChangeEvent(fileInput: any){
      this.filesToUpload = <Array<File>>fileInput.target.files;
      console.log(this.filesToUpload);
  }
}
