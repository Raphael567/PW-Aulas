import { ValidationError } from './../../../node_modules/@types/json-schema/index.d';
import { Group, Value } from './../../../node_modules/regjsparser/parser.d';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      passwords: this.fb.group({
        password: ['', [Validators.required, Validators.min(10)]],
        confirmPassword: ['', [Validators.required, Validators.min(10)]]
      },
    {validators: this.mesmaSenhaValidator})
    });
  }

  submit() {
    if (this.form.valid) {
      alert('Formulário válido');
    } else {
      alert('Formulário inválido');
    }
  }
  mesmaSenhaValidator : ValidatorFn = (formGroup : AbstractControl) : ValidationErrors | null => {
    let senha = formGroup.get('password')?.value;
    let confirmarSenha = formGroup.get('confirmPassword')?.value;

    if (senha !== confirmarSenha) {
      return {senhasDiferentes : true}
    }
    return null;
  }
}
