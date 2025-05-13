import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup
  @Input() texto: string = ''
  escondeTexto: boolean = true;
  escondeInputs: boolean = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: this.fb.control(''),
      password: this.fb.control(''),
    });
  }

  onLogin() {
    const usuario = 'a'
    const senha = 1

    const formData = [this.loginForm.get('username')?.value, this.loginForm.get('password')?.value];
    if (formData[0] == usuario && formData[1] == senha) {
      this.texto = 'Bem vindo, ' + formData[0];
      this.escondeInputs = true;
    } else {
      this.texto = 'Usuário/Senha inválido!'
    }
    this.escondeTexto = false;
  }
}
