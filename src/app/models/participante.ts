export type FormaPagamento = 'pix' | 'cartao' | 'boleto' | 'dinheiro' | '';

export interface Participante {
  id: number;
  descricao: string;
  telefone: string;
  email: string;
  formaPagamento: FormaPagamento;
}
