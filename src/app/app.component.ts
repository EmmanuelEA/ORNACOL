import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AgmCoreModule } from '@agm/core';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['../assets/styles.css'],
})
export class AppComponent {
  public title: string;

  constructor(){
    this.title = 'ORNACOL  |   visualización de plagas';
  }
}
