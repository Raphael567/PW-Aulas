import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  imports: [],
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.css'
})
export class InterpolationComponent {
  title = 'Hello World';
  foto = "favicon.ico";

  somar(x: number, y: number) {
    return x+y;
  }
}

