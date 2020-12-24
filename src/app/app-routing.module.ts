import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectivasComponent } from './directivas/directivas.component';
import { EjemplosComponent } from './ejemplos/ejemplos.component';
import { PipesComponent } from './pipes/pipes.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { AgregarUsuarioComponent } from './usuario/agregar-usuario/agregar-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductosDetalleComponent } from './productos-detalle/productos-detalle.component';

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
    path: 'usuario',
    component: UsuarioComponent,
    children: [
      {
        path: 'agregar',
        component: AgregarUsuarioComponent
      },
      {
        path: 'editar',
        component: EditarUsuarioComponent,
      }
    ]
  },
  {
    path: 'producto',
    component: ProductosComponent,
  },
  {
    path: 'productoDetalle',
    component: ProductosDetalleComponent,
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
