import { FormaPagamentoPipe } from './forma-pagamento-pipe';

describe('FormaPagamentoPipe', () => {
  const pipe = new FormaPagamentoPipe();

  it('traduz pix', () => {
    expect(pipe.transform('pix')).toBe('Pix');
  });

  it('traduz cartao', () => {
    expect(pipe.transform('cartao')).toBe('Cartão de crédito');
  });

  it('traduz boleto', () => {
    expect(pipe.transform('boleto')).toBe('Boleto');
  });

  it('traduz dinheiro', () => {
    expect(pipe.transform('dinheiro')).toBe('Dinheiro');
  });

  it('mostra Não informado para vazio, null e undefined', () => {
    expect(pipe.transform('')).toBe('Não informado');
    expect(pipe.transform(null)).toBe('Não informado');
    expect(pipe.transform(undefined)).toBe('Não informado');
  });
});
