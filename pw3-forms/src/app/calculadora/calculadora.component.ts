import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [ReactiveFormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  calculadoraForm: FormGroup
  resultado: number = 0;

  constructor(private fb: FormBuilder) {
    this.calculadoraForm = this.fb.group({
      num1: this.fb.control(0),
      num2: this.fb.control(0)
    });
  }

  onCalcular() {
    let num1 = this.calculadoraForm.get('num1')?.value;
    let num2 = this.calculadoraForm.get('num2')?.value;
    this.resultado = num1+num2;
    return this.resultado;
  }
}
