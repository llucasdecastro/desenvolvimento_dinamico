import { AbstractControl } from '@angular/forms';

export function validarDataNascimento(
  control: AbstractControl
): string | null {

  if (!control.value) {
    return null;
  }

  const data = new Date(
    control.value + 'T00:00:00'
  );

  const minimo = new Date(
    '1920-01-01T00:00:00'
  );

  const maximo = new Date(
    '2002-12-31T00:00:00'
  );

  if (data < minimo) {
    return 'A data mínima é 01/01/1920.';
  }

  if (data > maximo) {
    return 'A data máxima é 31/12/2002.';
  }

  return null;
}


export function validarApenasNumeros(
  control: AbstractControl
): string | null {

  if (!control.value) {
    return null;
  }

  if (!/^\d+$/.test(control.value)) {
    return 'Digite apenas números.';
  }

  return null;
}


export function validarCpf(
  control: AbstractControl
): string | null {

  if (!control.value) {
    return null;
  }

  if (!/^\d{11}$/.test(control.value)) {
    return 'O CPF deve conter 11 números.';
  }

  return null;
}


export function validarRg(
  control: AbstractControl
): string | null {

  if (!control.value) {
    return null;
  }

  if (!/^\d{1,11}$/.test(control.value)) {
    return 'O RG deve conter no máximo 11 números.';
  }

  return null;
}


export function validarTelefone(
  control: AbstractControl
): string | null {

  if (!control.value) {
    return null;
  }

  if (!/^\d{10,11}$/.test(control.value)) {
    return 'O telefone deve conter 10 ou 11 números.';
  }

  return null;
}


export function validarCelular(
  control: AbstractControl
): string | null {

  if (!control.value) {
    return null;
  }

  if (!/^\d{11}$/.test(control.value)) {
    return 'O celular deve conter 11 números.';
  }

  return null;
}


export function validarCep(
  control: AbstractControl
): string | null {

  if (!control.value) {
    return null;
  }

  if (!/^\d{8}$/.test(control.value)) {
    return 'O CEP deve conter 8 números.';
  }

  return null;
}


export function validarNumero(
  control: AbstractControl
): string | null {

  if (!control.value) {
    return null;
  }

  if (!/^\d+$/.test(control.value)) {
    return 'O número deve conter apenas números.';
  }

  return null;
}