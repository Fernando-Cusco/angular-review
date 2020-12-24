import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { EjemplosComponent } from './ejemplos/ejemplos.component';
import { FormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { ContinuaraPipe } from './continuara.pipe';
import { NotfoundComponent } from './notfound/notfound.component';
import { HeaderComponent } from './header/header.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { AgregarUsuarioComponent } from './usuario/agregar-usuario/agregar-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductosDetalleComponent } from './productos-detalle/productos-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivasComponent,
    EjemplosComponent,
    PipesComponent,
    ContinuaraPipe,
    NotfoundComponent,
    HeaderComponent,
    UsuarioComponent,
    AgregarUsuarioComponent,
    EditarUsuarioComponent,
    ProductosComponent,
    ProductosDetalleComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
