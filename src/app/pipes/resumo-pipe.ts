import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resumo'
})
export class ResumoPipe implements PipeTransform {

  transform(texto: string | null | undefined, limite: number = 30): string {
    if (!texto) return '';

    const limpo = texto.trim();
    if (limpo.length <= limite) return limpo;

    const corte = limpo.slice(0, limite);
    let resultado = corte;

    // se o limite caiu no meio de uma palavra, volta até o último espaço
    if (!/\s/.test(limpo[limite])) {
      const ultimoEspaco = corte.lastIndexOf(' ');
      if (ultimoEspaco > 0) resultado = corte.slice(0, ultimoEspaco);
    }

    return resultado.trimEnd() + '…';
  }

}
