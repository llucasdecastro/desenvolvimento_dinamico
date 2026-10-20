
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Empresa } from './empresa';

describe('Empresa', () => {
  let component: Empresa;
  let fixture: ComponentFixture<Empresa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Empresa]
    }).compileComponents();

    fixture = TestBed.createComponent(Empresa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve iniciar com o formulário inválido', () => {
    expect(component.empresaForm.invalid).toBeTrue();
  });

  it('deve aceitar dados válidos da empresa', () => {
    component.empresaForm.setValue({
      nome: 'Empresa Exemplo',
      cnpj: '12345678000199',
      fundacao: '2020-01-15',
      descricao: 'Empresa de tecnologia e inovação.'
    });

    component.logomarcaSelecionada = new File(
      ['imagem'],
      'logo.png',
      { type: 'image/png' }
    );

    expect(component.empresaForm.valid).toBeTrue();
    expect(component.logomarcaSelecionada).not.toBeNull();
  });

  it('deve rejeitar CNPJ com menos de 14 dígitos', () => {
    component.empresaForm.patchValue({
      cnpj: '123456'
    });

    expect(
      component.empresaForm.get('cnpj')?.invalid
    ).toBeTrue();
  });

  it('deve rejeitar descrição curta', () => {
    component.empresaForm.patchValue({
      descricao: 'Empresa'
    });

    expect(
      component.empresaForm.get('descricao')?.invalid
    ).toBeTrue();
  });

  it('deve limpar os campos e a logomarca', () => {
    component.empresaForm.patchValue({
      nome: 'Empresa Exemplo',
      cnpj: '12345678000199'
    });

    component.logomarcaSelecionada = new File(
      ['imagem'],
      'logo.png',
      { type: 'image/png' }
    );

    component.limpar();

    expect(component.empresaForm.get('nome')?.value).toBeNull();
    expect(component.empresaForm.get('cnpj')?.value).toBeNull();
    expect(component.logomarcaSelecionada).toBeNull();
  });
});
