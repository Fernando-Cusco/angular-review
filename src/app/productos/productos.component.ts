import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../models/producto';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Array<Producto> =  new Array<Producto>();

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.productos.push(
      {
        nombre: 'Appletv 4',
        descripcion: 'Tv Smart',
        precio: 1222,
        stock: 12,
        estado: true
      },
      {
        nombre: 'Macbook Pro 16',
        descripcion: '16 pulgadas anio 2019',
        precio: 3222,
        stock: 45,
        estado: true
      },
      {
        nombre: 'Audifonos',
        descripcion: 'Beats audio',
        precio: 22,
        stock: 23,
        estado: false
      }
    )
  }

  detalle(producto: Producto) {
    this.route.navigate(['productoDetalle', {
      producto: JSON.stringify(producto)
    }])
  }

}
