import { Component, OnInit } from '@angular/core';

class Alumno {
  nombre: string = '';
  apellido: string = '';

}

@Component({
  selector: 'app-ejemplos',
  templateUrl: './ejemplos.component.html',
  styleUrls: ['./ejemplos.component.css']
})
export class EjemplosComponent {
  alumno: Alumno = new Alumno();
  alumnos: Alumno[] = []
  existe: boolean = false;
  agregado = false;

  total = 1203;

  constructor() {
    
   }

  agregar() {
    if(this.alumno.nombre.length > 0 && this.alumno.apellido.length > 0) {
      let pos = this.existeAlumno(this.alumno);
      if(pos >= 0) {
        this.existe = true
        return ;
      }
      this.existe = false;
      this.agregado = true
      
      setTimeout(() => {
        this.agregado =  false;
      }, 2000);
      
      this.alumnos.push({
        nombre: this.alumno.nombre,
        apellido: this.alumno.apellido
      })
      this.alumno.nombre = '';
      this.alumno.apellido = '';
    }
    this.imprimir()
  }

  existeAlumno(alumno: Alumno) {
    let apellidos: string[] = []
    this.alumnos.forEach((alumno, indice, array) => {
      apellidos.push(alumno.apellido)
    })
    
    return apellidos.indexOf(alumno.apellido)
  }

  imprimir() {
    this.alumnos.forEach((alumno, indice, array) => {
      console.log(alumno);
    })
  }

}
