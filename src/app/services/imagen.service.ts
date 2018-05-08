import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions }  from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Imagen } from '../models/imagen';
import { GLOBAL } from './global';

@Injectable()
export class ImagenService{
  public url: string;

  constructor(
    public _http: Http
  ){
    this.url = GLOBAL.url;
  }

  getImagenes(){
    console.log(this._http.get(this.url + 'imagenes').map(res => res.json()));
    return this._http.get(this.url + 'imagenes').map(res => res.json());
  }

  getImagen(id){
    return this._http.get(this.url+'imagen/'+id).map(res => res.json());
  }

  addImagen(imagen: Imagen){
    let json = JSON.stringify(imagen);

    let params = 'json='+json;
    console.log(params);
    let headers =  new Headers({'Content-type':'application/x-www-form-urlencoded'});

    return this._http.post(this.url+'imagenes', params, {headers: headers})
                     .map(res => res.json());
  }

  editImagen(id,imagen: Imagen){
    let json = JSON.stringify(imagen);
    let params = "json="+json;
    let headers = new Headers({'Content-type':'application/x-www-form-urlencoded'});

    return this._http.post(this.url+'update-imagen/'+id, params, {headers: headers})
                     .map(res => res.json());
  }

  deleteImagen(id){
    return this._http.get(this.url+'delete-imagen/'+id)
                     .map(res => res.json());
  }

  makeFileRequest(url: string, params: Array<string>, files: Array<File>){
    return new Promise((resolve, reject)=>{
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();

      for (var i = 0; i < files.length; i++){
        formData.append('uploads[]', files[i], files[i].name)
      }
      xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
          if(xhr.status == 200){
            resolve(JSON.parse(xhr.response));
          }else{
            reject(xhr.response);
          }
        }
      };
      xhr.open("POST", url, true);
      xhr.send(formData);
    });
  }
}
