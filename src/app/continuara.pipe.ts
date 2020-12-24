import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'continuara'
})
export class ContinuaraPipe implements PipeTransform {

  transform(texto: string): string {
    if (texto.toString().length > 160) {
      texto = texto.substr(0, 160)
    }
    texto += '... ver mas'
    return texto;
  }

}
