import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImagemComponent } from '../imagem/imagem.component';
import { BotaoComponent } from '../botao/botao.component';
import { FrasesComponent } from '../frases/frases.component';

@Component({
  selector: 'app-biscoito',
  imports: [RouterOutlet, FrasesComponent, ImagemComponent, BotaoComponent ],
  templateUrl: './biscoito.component.html',
  styleUrl: './biscoito.component.css'
})
export class BiscoitoComponent {
  imagemSrc: string = 'biscoito.ico';
  frase: string = '';
  biscoitoQuebrado: boolean = false;
  desabilitado: boolean = false;

  quebrarBiscoito() {
    this.biscoitoQuebrado = true;
    this.imagemSrc = 'biscoito-aberto.ico';
    this.desabilitado = false;
  }

  reiniciarBiscoito() {
    this.biscoitoQuebrado = false;
    this.imagemSrc = 'biscoito.ico';
    this.frase = '';
    this.desabilitado = true;
  }
}
