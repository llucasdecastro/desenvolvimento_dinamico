import { MascaraEmailPipe } from './mascara-email-pipe';

describe('MascaraEmailPipe', () => {
  const pipe = new MascaraEmailPipe();

  it('mostra duas letras, esconde o resto e mantém o domínio', () => {
    expect(pipe.transform('joaosilva1@gmail.com')).toBe('jo********@gmail.com');
  });

  it('esconde mais letras em usuário curto', () => {
    expect(pipe.transform('ana@x.com')).toBe('an*@x.com');
  });

  it('devolve como chegou o que não parece e-mail', () => {
    expect(pipe.transform('semarroba')).toBe('semarroba');
  });

  it('devolve vazio para vazio, null e undefined', () => {
    expect(pipe.transform('')).toBe('');
    expect(pipe.transform(null)).toBe('');
    expect(pipe.transform(undefined)).toBe('');
  });
});
