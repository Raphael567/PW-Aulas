import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello World';
  somar(x: number, y: number) {
    return x+y;
  }
  // somar = function somar(x: number, y: number) {
  //   return x+y;
  // }
}
