import { Pipe, PipeTransform } from '@angular/core';

const LIGACOES = ['de', 'da', 'do', 'das', 'dos', 'e', 'a', 'o', 'ao', 'em', 'na', 'no'];

@Pipe({
  name: 'titulo'
})
export class TituloPipe implements PipeTransform {

  transform(texto: string | null | undefined): string {
    if (!texto) return '';

    const palavras = texto.trim().split(/\s+/).filter(Boolean);

    return palavras
      .map((palavra, posicao) => {
        const minuscula = palavra.toLowerCase();

        if (posicao > 0 && LIGACOES.includes(minuscula)) return minuscula;

        return minuscula[0].toUpperCase() + minuscula.slice(1);
      })
      .join(' ');
  }

}
