import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Participante } from '../models/participante';
import { TelefonePipe } from '../pipes/telefone-pipe';
import { FormaPagamentoPipe } from '../pipes/forma-pagamento-pipe';
import { IniciaisPipe } from '../pipes/iniciais-pipe';
import { DiasParaPipe } from '../pipes/dias-para-pipe';
import { MascaraEmailPipe } from '../pipes/mascara-email-pipe';
import { ResumoPipe } from '../pipes/resumo-pipe';
import { TituloPipe } from '../pipes/titulo-pipe';

@Component({
  selector: 'app-participantes',
  imports: [
    DatePipe,
    TelefonePipe,
    FormaPagamentoPipe,
    IniciaisPipe,
    DiasParaPipe,
    MascaraEmailPipe,
    ResumoPipe,
    TituloPipe
  ],
  templateUrl: './participantes.html',
  styleUrl: './participantes.css'
})
export class Participantes {

  // Dados fixos: nesta tarefa o critério é o pipe, não a integração com o backend.
  // Guardados "crus" (data ISO, telefone só com dígitos, código de pagamento).
  evento = {
    titulo: 'semana de tecnologia da unijorge',
    data: '2026-12-04',
    descricao: 'Semana de Tecnologia da Unijorge com palestras e oficinas de desenvolvimento.'
  };

  participantes: Participante[] = [
    {
      id: 1,
      descricao: 'Maria da Silva Santos',
      telefone: '71988887777',
      email: 'maria.santos@gmail.com',
      formaPagamento: 'pix'
    },
    {
      id: 2,
      descricao: '  joão   guedes de brito ',
      telefone: '7133334444',
      email: 'joao.brito@unijorge.edu.br',
      formaPagamento: 'cartao'
    },
    {
      id: 3,
      descricao: 'Ana',
      telefone: '(71) 98888-7777',
      email: 'ana@email.com',
      formaPagamento: 'boleto'
    },
    {
      id: 4,
      descricao: 'Lucas de Castro Paranhos Tourinho',
      telefone: '123',
      email: 'lucas.paranhos@email.com',
      formaPagamento: ''
    }
  ];
}
