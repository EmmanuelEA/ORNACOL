import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { ImagenListComponent } from './components/imagen-list.component';
import { ImagenAddComponent } from './components/imagen-add.component';
import { ImagenDetailComponent } from './components/imagen-detail.component';
import { ImagenEditComponent } from './components/imagen-edit.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent}, // si no hay nada nos mande a home
  {path: 'home', component: HomeComponent},
  {path: 'imagenes', component: ImagenListComponent},
  {path: 'imagen-add', component: ImagenAddComponent},
  {path: 'imagen/:id', component: ImagenDetailComponent},
  {path: 'editar-imagen/:id', component: ImagenEditComponent},
  {path: '**', component: ErrorComponent} //siempre debe ser la utlima de todas, es si no exite nada manda error o homecomponent
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders =RouterModule.forRoot(appRoutes); //cargar la configuracion de la ruta que estamos estableciendo
