import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Eventos } from './eventos';

describe('Eventos', () => {
  let component: Eventos;
  let fixture: ComponentFixture<Eventos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eventos]
    }).compileComponents();

    fixture = TestBed.createComponent(Eventos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Verifica se o componente é criado
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Verifica se o formulário começa inválido
  it('deve iniciar com o formulário inválido', () => {
    expect(component.eventoForm.invalid).toBeTrue();
  });

  // Verifica se o formulário aceita dados válidos
  it('deve aceitar dados válidos do evento', () => {
    component.eventoForm.setValue({
      nomeEvento: 'Workshop Angular',
      dataEvento: '2026-11-20',
      localEvento: 'Salvador',
      valorEvento: 50,
      emailResponsavel: 'responsavel@email.com',
      vagas: 30
    });

    expect(component.eventoForm.valid).toBeTrue();
  });

  // Verifica o formato do e-mail
  it('deve rejeitar um e-mail inválido', () => {
    component.eventoForm.patchValue({
      emailResponsavel: 'email-invalido'
    });

    expect(
      component.eventoForm.get('emailResponsavel')?.invalid
    ).toBeTrue();
  });

  // Verifica se a quantidade de vagas deve ser positiva
  it('deve rejeitar zero vagas', () => {
    component.eventoForm.patchValue({
      vagas: 0
    });

    expect(
      component.eventoForm.get('vagas')?.invalid
    ).toBeTrue();
  });

  // Verifica se o método limpar limpa o formulário
  it('deve limpar o formulário', () => {
    component.eventoForm.patchValue({
      nomeEvento: 'Workshop Angular',
      emailResponsavel: 'responsavel@email.com',
      vagas: 30
    });

    component.limpar();

    expect(component.eventoForm.get('nomeEvento')?.value).toBeNull();
    expect(component.eventoForm.get('emailResponsavel')?.value).toBeNull();
    expect(component.eventoForm.get('vagas')?.value).toBeNull();
  });
});