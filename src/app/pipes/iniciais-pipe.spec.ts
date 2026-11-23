import { IniciaisPipe } from './iniciais-pipe';

describe('IniciaisPipe', () => {
  const pipe = new IniciaisPipe();

  it('usa o primeiro e o último nome', () => {
    expect(pipe.transform('Maria da Silva Santos')).toBe('MS');
  });

  it('ignora espaços sobrando e aceita minúsculas', () => {
    expect(pipe.transform('  joão   guedes de brito ')).toBe('JB');
  });

  it('devolve uma letra só para um nome só', () => {
    expect(pipe.transform('Ana')).toBe('A');
  });

  it('devolve vazio para texto vazio, null e undefined', () => {
    expect(pipe.transform('')).toBe('');
    expect(pipe.transform(null)).toBe('');
    expect(pipe.transform(undefined)).toBe('');
  });
});
