import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Evento } from '../../models/evento';

import {
  validarTitulo,
  validarData,
  validarLocal,
  validarEmailResponsavel,
  validarVagas
} from '../../models/evento.validacao';

@Component({
  selector: 'app-cadastro-evento',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro-evento.html',
  styleUrl: './cadastro-evento.css'
})
export class CadastroEvento {

  evento: Evento = this.novoEvento();

  eventos: Evento[] = [];

  erros: { [campo: string]: string | null } = {
    titulo: null,
    data: null,
    local: null,
    emailResponsavel: null,
    vagas: null
  };

  camposVisitados: { [campo: string]: boolean } = {
    titulo: false,
    data: false,
    local: false,
    emailResponsavel: false,
    vagas: false
  };

  private novoEvento(): Evento {
    return {
      titulo: '',
      data: '',
      local: '',
      emailResponsavel: '',
      vagas: 1
    };
  }

  validarCampo(campo: string): void {
    this.camposVisitados[campo] = true;

    switch (campo) {
      case 'titulo':
        this.erros[campo] = validarTitulo(this.evento.titulo);
        break;

      case 'data':
        this.erros[campo] = validarData(this.evento.data);
        break;

      case 'local':
        this.erros[campo] = validarLocal(this.evento.local);
        break;

      case 'emailResponsavel':
        this.erros[campo] = validarEmailResponsavel(
          this.evento.emailResponsavel
        );
        break;

      case 'vagas':
        this.erros[campo] = validarVagas(this.evento.vagas);
        break;
    }
  }

  validarFormulario(): boolean {
    this.validarCampo('titulo');
    this.validarCampo('data');
    this.validarCampo('local');
    this.validarCampo('emailResponsavel');
    this.validarCampo('vagas');

    return Object.values(this.erros).every(erro => erro === null);
  }

  get formularioValido(): boolean {
    return (
      validarTitulo(this.evento.titulo) === null &&
      validarData(this.evento.data) === null &&
      validarLocal(this.evento.local) === null &&
      validarEmailResponsavel(this.evento.emailResponsavel) === null &&
      validarVagas(this.evento.vagas) === null
    );
  }

  salvar(): void {
    if (!this.validarFormulario()) {
      return;
    }

    this.eventos.push({ ...this.evento });

    this.evento = this.novoEvento();

    this.erros = {
      titulo: null,
      data: null,
      local: null,
      emailResponsavel: null,
      vagas: null
    };

    this.camposVisitados = {
      titulo: false,
      data: false,
      local: false,
      emailResponsavel: false,
      vagas: false
    };
  }
}