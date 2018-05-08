import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ImagenService } from '../services/imagen.service';
import { Imagen } from '../models/imagen';
import { GLOBAL } from '../services/global';

@Component({
  selector: 'imagen-edit',
  templateUrl: '../views/imagen-add.html', //reutilizamos esta vista
  providers: [ImagenService]
})

export class ImagenEditComponent{
  public titulo: string;
  public imagen: Imagen;
  public filesToUpload;
  public resultUpload;
  public is_edit;

  constructor(
    private _imagenService: ImagenService,
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.titulo = 'Editar registro';
    this.imagen = new Imagen(1,1,1,'','','');
    this.is_edit = true;
  }

  ngOnInit(){
    console.log(this.titulo);
    this.getImagen();
  }

  onSubmit(){
    console.log(this.imagen);

    if(this.filesToUpload && this.filesToUpload.length >= 1){
      this._imagenService.makeFileRequest(GLOBAL.url+'upload-file', [], this.filesToUpload).then((result)=>{
          console.log(result);
          this.resultUpload = result;
          this.imagen.ruta = this.resultUpload.filename;
          this.updateImagen();
      },(error) => {
          console.log(error);
        }
      );
    }else{
      this.updateImagen();
    }


  }

  updateImagen(){
    this._route.params.forEach((params: Params) => {
      let id = params['id'];
    this._imagenService.editImagen(id, this.imagen).subscribe(
      response => {
        if(response.code == 200){
          this._router.navigate(['/imagen/'+id]);
        }else{
          console.log(response);
        }
      },
      error => {
        console.log(<any>error);
      }
    );
    });
  }

  fileChangeEvent(fileInput: any){
      this.filesToUpload = <Array<File>>fileInput.target.files;
      console.log(this.filesToUpload);
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
