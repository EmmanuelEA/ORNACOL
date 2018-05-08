import { Component, OnInit } from '@angular/core';
import { Imagen } from '../../models/imagen';
import { ImagenService } from '../../services/imagen.service';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
  template: `

    <div *ngIf="!imagenes">
      Cargando listado de Imagenes...
    </div>

    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="Zoom">
    <agm-marker-cluster [imagePath]="'https://googlemaps.github.io/js-marker-clusterer/images/m'">
      <agm-marker [latitude]='convertStringToNumber(m.latitud)' [longitude]='convertStringToNumber(m.longitud)' *ngFor="let m of imagenes; let i = index"
      [label]='m.predic'>
      </agm-marker>
    </agm-marker-cluster>
    </agm-map>

`})
export class MapaComponent implements OnInit {

  public title: string;
  public lat: number;
  public lng: number;
  public Zoom: number;
  public imagenes: Imagen[];

  constructor(private _imagenService: ImagenService) {
    this.lat = 19.2606826;
    this.lng = -103.7227592;
    this.Zoom = 10;
  }

  ngOnInit() {
    console.log('Se ha cargado el componente home.component.ts');
    this.getImagenes();
  }

  private convertStringToNumber(value: string): number {
        return +value;
    }

  getImagenes(){
    this._imagenService.getImagenes().subscribe(
      result => {
        //console.log(result); funciona y da resultado success con codigo 200
        if (result.code != 200){
          console.log(result);
        }else{
          this.imagenes = result.data;
          console.log(this.imagenes);
          //this.imagenes.push[];
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
