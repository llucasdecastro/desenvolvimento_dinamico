import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mascaraEmail'
})
export class MascaraEmailPipe implements PipeTransform {

  transform(email: string | null | undefined): string {
    if (!email) return '';

    const arroba = email.lastIndexOf('@');
    if (arroba <= 0) return email;

    const usuario = email.slice(0, arroba);
    const dominio = email.slice(arroba);
    const visiveis = Math.min(2, usuario.length - 1);

    return usuario.slice(0, visiveis) + '*'.repeat(usuario.length - visiveis) + dominio;
  }

}
