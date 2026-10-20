
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-empresa',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './empresa.html',
  styleUrl: './empresa.css'
})
export class Empresa {
  empresaForm: FormGroup;
  logomarcaSelecionada: File | null = null;

  constructor(private fb: FormBuilder) {
    this.empresaForm = this.fb.group({
      nome: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100)
        ]
      ],
      cnpj: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\d{14}$/)
        ]
      ],
      fundacao: [
        '',
        Validators.required
      ],
      descricao: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(1000)
        ]
      ]
    });
  }

  selecionarLogomarca(event: Event): void {
    const input = event.target as HTMLInputElement;
    const arquivo = input.files?.[0] ?? null;

    if (arquivo && !arquivo.type.startsWith('image/')) {
      input.value = '';
      this.logomarcaSelecionada = null;
      alert('Selecione um arquivo de imagem válido.');
      return;
    }

    this.logomarcaSelecionada = arquivo;
  }

  enviar(): void {
    if (this.empresaForm.invalid || !this.logomarcaSelecionada) {
      this.empresaForm.markAllAsTouched();

      if (!this.logomarcaSelecionada) {
        alert('Selecione a logomarca da empresa.');
      }

      return;
    }

    const dadosEmpresa = {
      ...this.empresaForm.value,
      logomarca: this.logomarcaSelecionada
    };

    console.log('Empresa cadastrada:', dadosEmpresa);
    alert('Empresa cadastrada com sucesso!');

    this.limpar();
  }

  limpar(): void {
    this.empresaForm.reset();
    this.logomarcaSelecionada = null;
  }

  campoInvalido(campo: string): boolean {
    const control = this.empresaForm.get(campo);

    return !!control && control.invalid && control.touched;
  }

  logomarcaInvalida(): boolean {
    return !this.logomarcaSelecionada;
  }
}
