import { CalculadoraComponent } from './calculadora/calculadora.component';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [CalculadoraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pw3-forms';
}
