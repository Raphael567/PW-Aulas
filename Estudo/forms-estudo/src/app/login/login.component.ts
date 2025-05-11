import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: this.fb.control(''),
      password: this.fb.control(''),
    });
  }

  onLogin() {
    const formData = [this.loginForm.get('username')?.value, this.loginForm.get('password')?.value];
    console.log('Username:', formData[0], ' Password:', formData[1]);
  }
}