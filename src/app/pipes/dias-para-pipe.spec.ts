import { DiasParaPipe } from './dias-para-pipe';

describe('DiasParaPipe', () => {
  const pipe = new DiasParaPipe();
  // hoje fixo: 10/11/2026 (o mês do Date começa em 0, novembro é 10)
  const hoje = new Date(2026, 10, 10);

  it('mostra Hoje para o mesmo dia', () => {
    expect(pipe.transform('2026-11-10', hoje)).toBe('Hoje');
  });

  it('mostra Amanhã para o dia seguinte', () => {
    expect(pipe.transform('2026-11-11', hoje)).toBe('Amanhã');
  });

  it('conta 10 dias até 20/11', () => {
    expect(pipe.transform('2026-11-20', hoje)).toBe('Faltam 10 dias');
  });

  it('conta 21 dias até 01/12 (virada de mês)', () => {
    expect(pipe.transform('2026-12-01', hoje)).toBe('Faltam 21 dias');
  });

  it('mostra Encerrado para dia que já passou', () => {
    expect(pipe.transform('2026-11-09', hoje)).toBe('Encerrado');
  });

  it('devolve vazio para texto vazio, null e undefined', () => {
    expect(pipe.transform('', hoje)).toBe('');
    expect(pipe.transform(null, hoje)).toBe('');
    expect(pipe.transform(undefined, hoje)).toBe('');
  });

  it('devolve vazio para formato que não é data', () => {
    expect(pipe.transform('20/11/2026', hoje)).toBe('');
  });

  it('não muda o resultado com a hora do dia (hoje às 23h)', () => {
    expect(pipe.transform('2026-11-10', new Date(2026, 10, 10, 23, 59))).toBe('Hoje');
  });
});
