import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  titulo: string = 'Hola soy un titulo';

  saldo: number = 1202.22;

  ganancias: number = 0.54;

  fechaNacimiento: Date = new Date('1-1-2020')


  texto: string = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat aut a ipsam, repudiandae commodi cupiditate neque nostrum repellat sequi doloremque pariatur maiores cumque id? Minus et perspiciatis facere minima dicta.";

  constructor() { }

  ngOnInit(): void {
  }

}
