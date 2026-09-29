import { Component } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import {
  validarDataNascimento,
  validarCpf,
  validarRg,
  validarTelefone,
  validarCelular,
  validarCep,
  validarNumero
} from './pessoa.validacao';

@Component({
  selector: 'app-pessoa',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './pessoa.html',
  styleUrl: './pessoa.css'
})
export class Pessoa {

  pessoaForm: FormGroup;

  modoEdicao = false;

  camposComErroNumerico: { [key: string]: boolean } = {};

  constructor(private fb: FormBuilder) {

    this.pessoaForm = this.fb.group({

      nomeCompleto: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],

      dataNascimento: [
        '',
        [
          Validators.required,
          validarDataNascimento
        ]
      ],

      cpf: [
        '',
        [
          Validators.required,
          validarCpf
        ]
      ],

      rg: [
        '',
        [
          Validators.required,
          validarRg
        ]
      ],

      nomeMae: [
        '',
        Validators.required
      ],

      nomePai: [
        ''
      ],

      paisOrigem: [
        '',
        Validators.required
      ],

      ufOrigem: [
        '',
        Validators.required
      ],

      cidadeOrigem: [
        '',
        Validators.required
      ],

      telefone: [
        '',
        [
          Validators.required,
          validarTelefone
        ]
      ],

      celular: [
        '',
        validarCelular
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      cep: [
        '',
        validarCep
      ],

      endereco: [
        ''
      ],

      numero: [
        '',
        validarNumero
      ],

      complemento: [
        ''
      ],

      bairro: [
        ''
      ]

    });
  }

  somenteNumeros(event: Event): void {

    const input =
      event.target as HTMLInputElement;

    const valorOriginal =
      input.value;

    const valorNumerico =
      valorOriginal.replace(/\D/g, '');

    const campo =
      input.getAttribute('formControlName');

    if (!campo) {
      return;
    }

    this.camposComErroNumerico[campo] =
      valorOriginal !== valorNumerico;

    input.value =
      valorNumerico;

    this.pessoaForm
      .get(campo)
      ?.setValue(
        valorNumerico,
        {
          emitEvent: false
        }
      );
  }

  salvar(): void {

    if (this.pessoaForm.invalid) {

      this.pessoaForm.markAllAsTouched();

      return;
    }

    console.log(
      'Pessoa cadastrada:',
      this.pessoaForm.value
    );

    alert(
      'Pessoa cadastrada com sucesso!'
    );

    this.pessoaForm.reset();

    this.camposComErroNumerico = {};
  }

  atualizar(): void {

    if (this.pessoaForm.invalid) {

      this.pessoaForm.markAllAsTouched();

      return;
    }

    console.log(
      'Pessoa atualizada:',
      this.pessoaForm.value
    );

    alert(
      'Pessoa atualizada com sucesso!'
    );

    this.modoEdicao = false;
  }

  editar(): void {

    this.modoEdicao = true;
  }

  limpar(): void {

    this.pessoaForm.reset();

    this.modoEdicao = false;

    this.camposComErroNumerico = {};
  }

  campoInvalido(
    campo: string
  ): boolean {

    const control =
      this.pessoaForm.get(campo);

    return !!control &&
      control.invalid &&
      control.touched;
  }
}