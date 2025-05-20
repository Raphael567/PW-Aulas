import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nome: ['',[Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.email, Validators.required]],
      idade: [null, [Validators.required, Validators.min(18)]],
    });
  }

  onSubmit() {
    const formData = [this.formulario.get('nome')?.value, this.formulario.get('email')?.value, this.formulario.get('idade')?.value];
    for (let data in formData) {
      console.log(data);
    }
  }
}
