import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-botao',
  imports: [],
  templateUrl: './botao.component.html',
  styleUrl: './botao.component.css'
})
export class BotaoComponent {
  @Input() texto: string = 'Quebrar biscoito';
  @Input() classe: string = '';
  @Input() desabilitado: boolean = false;
}
