//Raphael Pereira Canuto
//Hellen Novi Salvador

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-frases',
  imports: [],
  templateUrl: './frases.component.html',
  styleUrl: './frases.component.css'
})

export class FrasesComponent {
  @Input() texto = "";
}
