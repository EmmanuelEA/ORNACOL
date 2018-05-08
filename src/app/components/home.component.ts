import { Component } from '@angular/core';
import { Imagen } from '../models/imagen';
import { ImagenService } from '../services/imagen.service';





@Component({
  selector: 'home',
  templateUrl: '../views/home.html',
  providers:[ImagenService]
})

export class HomeComponent{


  constructor(){

  }

  ngOnInit(){

  }

}
