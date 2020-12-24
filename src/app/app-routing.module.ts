import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectivasComponent } from './directivas/directivas.component';
import { EjemplosComponent } from './ejemplos/ejemplos.component';
import { PipesComponent } from './pipes/pipes.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    component: DirectivasComponent
  },
  {
    path: 'directivas',
    component: DirectivasComponent
  },
  {
    path: 'ejemplos',
    component: EjemplosComponent
  },
  {
    path: 'pipes',
    component: PipesComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
