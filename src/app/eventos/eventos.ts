import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './eventos.html',
  styleUrl: './eventos.css'
})
export class Eventos {

  eventoForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.eventoForm = this.fb.group({

      nomeEvento: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],

      dataEvento: [
        '',
        Validators.required
      ],

      localEvento: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],

      valorEvento: [
        '',
        [
          Validators.required,
          Validators.min(0)
        ]
      ]

    });
  }

  salvar(): void {

    if (this.eventoForm.invalid) {

      this.eventoForm.markAllAsTouched();

      return;
    }

    console.log(
      'Evento cadastrado:',
      this.eventoForm.value
    );

    alert('Evento cadastrado com sucesso!');

    this.eventoForm.reset();
  }

  limpar(): void {

    this.eventoForm.reset();
  }

  campoInvalido(campo: string): boolean {

    const control = this.eventoForm.get(campo);

    return !!control &&
      control.invalid &&
      control.touched;
  }

}
