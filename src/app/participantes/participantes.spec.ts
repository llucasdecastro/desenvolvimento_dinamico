import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Participantes } from './participantes';

describe('Participantes', () => {
  let fixture: ComponentFixture<Participantes>;
  let componente: Participantes;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Participantes]
    }).compileComponents();

    fixture = TestBed.createComponent(Participantes);
    componente = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(componente).toBeTruthy();
  });

  it('mostra os dados formatados na tela', () => {
    const texto: string = fixture.nativeElement.textContent;

    expect(texto).toContain('(71) 98888-7777');
    expect(texto).toContain('(71) 3333-4444');
    expect(texto).toContain('Cartão de crédito');
    expect(texto).toContain('Não informado');
    expect(texto).toContain('ma**********@gmail.com');
  });

  it('não altera o dado guardado: o JSON continua cru', () => {
    const json = JSON.stringify(componente.participantes[0]);

    expect(json).toContain('"telefone":"71988887777"');
    expect(json).toContain('"formaPagamento":"pix"');
    expect(JSON.stringify(componente.evento)).toContain('"data":"2026-12-04"');
  });
});
