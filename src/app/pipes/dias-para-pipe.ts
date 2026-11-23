import { Pipe, PipeTransform } from '@angular/core';

const MS_POR_DIA = 24 * 60 * 60 * 1000;

@Pipe({
  name: 'diasPara'
})
export class DiasParaPipe implements PipeTransform {

  // "hoje" entra como parâmetro: na tela vale a data real, no teste
  // passamos uma data fixa e a tabela vale em qualquer dia do ano.
  transform(data: string | null | undefined, hoje: Date = new Date()): string {
    if (!data) return '';

    // Não usamos new Date(texto): data só com dia é lida em UTC e,
    // em Salvador (UTC-3), cairia no dia anterior.
    const partes = data.split('-').map(Number);
    if (partes.length !== 3 || partes.some(Number.isNaN)) return '';

    const [ano, mes, dia] = partes;
    const alvo = Date.UTC(ano, mes - 1, dia);
    const hojeUtc = Date.UTC(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());
    const dias = Math.round((alvo - hojeUtc) / MS_POR_DIA);

    if (dias < 0) return 'Encerrado';
    if (dias === 0) return 'Hoje';
    if (dias === 1) return 'Amanhã';

    return `Faltam ${dias} dias`;
  }

}
