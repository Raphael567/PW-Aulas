//Raphael Pereira Canuto
//Hellen Novi Salvador

import { Component, input, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagem',
  templateUrl: './imagem.component.html',
  styleUrls: ['./imagem.component.css']
})
export class ImagemComponent {
  imagem = 'biscoito.ico';
  @Input() quebrado: boolean = true; 

  trocarImagem() {
    this.imagem = this.imagem === 'biscoito.ico' ? 'biscoito-aberto.ico' : 'biscoito.ico';
  }
}
