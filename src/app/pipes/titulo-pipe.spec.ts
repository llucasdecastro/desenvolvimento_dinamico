import { TituloPipe } from './titulo-pipe';

describe('TituloPipe', () => {
  const pipe = new TituloPipe();

  it('deixa as palavras de ligação em minúsculas', () => {
    expect(pipe.transform('semana de tecnologia da unijorge'))
      .toBe('Semana de Tecnologia da Unijorge');
  });

  it('corrige texto todo em maiúsculas', () => {
    expect(pipe.transform('DE VOLTA AO CAMPUS')).toBe('De Volta ao Campus');
  });

  it('devolve vazio para só espaços, vazio, null e undefined', () => {
    expect(pipe.transform('   ')).toBe('');
    expect(pipe.transform('')).toBe('');
    expect(pipe.transform(null)).toBe('');
    expect(pipe.transform(undefined)).toBe('');
  });
});
