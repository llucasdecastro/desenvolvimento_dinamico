import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {

  transform(valor: string | null | undefined): string {
    if (!valor) return '';

    const digitos = valor.replace(/\D/g, '');
    const ddd = digitos.slice(0, 2);

    if (digitos.length === 11) {
      return `(${ddd}) ${digitos.slice(2, 7)}-${digitos.slice(7)}`;
    }

    if (digitos.length === 10) {
      return `(${ddd}) ${digitos.slice(2, 6)}-${digitos.slice(6)}`;
    }

    return valor;
  }

}
