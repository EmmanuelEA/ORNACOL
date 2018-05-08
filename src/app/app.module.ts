import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

//Rutas
import { routing, appRoutingProviders } from './app.routing';

//Mapas
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { MapaComponent } from './components/mapa/mapa.component';

//Componentes
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { ImagenListComponent } from './components/imagen-list.component';
import { ImagenAddComponent } from './components/imagen-add.component';
import { ImagenEditComponent } from './components/imagen-edit.component';
import { ImagenDetailComponent } from './components/imagen-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ImagenListComponent,
    ImagenAddComponent,
    ImagenEditComponent,
    ImagenDetailComponent,
    MapaComponent
  ],

  imports: [
    BrowserModule,
    CommonModule,
    routing,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBDZngGMWG5uTZmGZ6Wb8fMAYCys6zjX_I'
    }),
    AgmJsMarkerClustererModule,
    AgmSnazzyInfoWindowModule,
  ],

  providers: [
    appRoutingProviders
  ],

  bootstrap: [ AppComponent ]
})

export class AppModule {}
