import { Component, OnInit } from '@angular/core';

interface Producto {
  nombre: string;
  stock: number;
  fabricante: string;
  fecha: Date;
  esImportante: boolean;
}


@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  cargando: boolean = true;

  lenguajes: Array<string> = ['Python', 'Javascript', 'Java', 'Php', 'C', 'C++', 'Lua', 'Swift', 'Kotlin', 'Dart', 'Objective-c'];

  productos: Array<Producto> = [
    {
      nombre: 'Macbook Pro',
      stock: 12,
      fabricante: 'Apple Inc',
      fecha: new Date,
      esImportante: true
    },
    {
      nombre: 'Iphone X',
      stock: 16,
      fabricante: 'Apple Inc',
      fecha: new Date,
      esImportante: false
    },
    {
      nombre: 'Asus Goge Phone',
      stock: 5,
      fabricante: 'Asus Inc',
      fecha: new Date,
      esImportante: true
    }
  ];
  pestana: string = 'perfil';
  mostrarCuadrado = false;
  constructor() { 
    this.cambiarPestana('perfil')
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.cargando = false
    }, 5000);
  }

  cargar() {
    if(!this.cargando) {
      this.cargando = true;
    } else {
      this.cargando = false;
    }
  }

  cambiarPestana(pestana: string) {
    this.pestana = pestana;
  }
   cambiarFondo() {
     this.mostrarCuadrado = !this.mostrarCuadrado;
   }
}
