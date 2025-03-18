import { Component, EventEmitter, input, Input, Output } from '@angular/core';

@Component({
  selector: 'app-aleatorio',
  imports: [],
  templateUrl: './aleatorio.component.html',
  styleUrl: './aleatorio.component.css'
})
export class AleatorioComponent {
  @Input() max: number = 0;
  @Input() min: number = 0;
  resposta: number = 0;
  @Output() resultado = new EventEmitter()

  gerar() {
    var valor = Math.floor(Math.random() * (this.max - this.min + 1));
    this.resultado.emit(valor);
  }
}
