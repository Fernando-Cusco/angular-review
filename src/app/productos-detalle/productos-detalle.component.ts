import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-productos-detalle',
  templateUrl: './productos-detalle.component.html',
  styleUrls: ['./productos-detalle.component.css']
})
export class ProductosDetalleComponent implements OnInit {
  producto: Producto = new Producto();
  constructor(private activeRoute: ActivatedRoute) {
    
   }

  ngOnInit(): void {
    
    this.producto = JSON.parse(this.activeRoute.snapshot.params.producto)
     
    
  }

}
