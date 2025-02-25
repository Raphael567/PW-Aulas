import { Component } from '@angular/core';

@Component({
  selector: 'app-criando-interpolation',
  imports: [],
  templateUrl: './criando-interpolation.component.html',
  styleUrl: './criando-interpolation.component.css'
})
export class CriandoInterpolationComponent {
  title = "Quitéria Dammage";
  foto = "favicon.ico";

  somar(x: number, y: number) {
    return x+y;
  }
}
