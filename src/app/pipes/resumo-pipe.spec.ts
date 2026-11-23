import { ResumoPipe } from './resumo-pipe';

describe('ResumoPipe', () => {
  const pipe = new ResumoPipe();
  const texto = 'Semana de Tecnologia da Unijorge com palestras e oficinas';

  it('corta em 30 sem partir palavra', () => {
    expect(pipe.transform(texto)).toBe('Semana de Tecnologia da…');
  });

  it('aceita o limite como parâmetro', () => {
    expect(pipe.transform(texto, 40)).toBe('Semana de Tecnologia da Unijorge com…');
  });

  it('não corta texto que já cabe', () => {
    expect(pipe.transform('Curto', 30)).toBe('Curto');
  });

  it('devolve vazio para vazio, null e undefined', () => {
    expect(pipe.transform('')).toBe('');
    expect(pipe.transform(null)).toBe('');
    expect(pipe.transform(undefined)).toBe('');
  });
});
