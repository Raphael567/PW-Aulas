//Raphael Pereira Canuto
//Hellen Novi Salvador

import { Component, input, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagem',
  templateUrl: './imagem.component.html',
  styleUrls: ['./imagem.component.css']
})
export class ImagemComponent {
  @Input() imagem = 'biscoito.ico'
  @Input() quebrado: boolean = true; 

  trocarImagem() {
    if (this.imagem === 'biscoito.ico') {
      this.imagem = 'biscoito-aberto.ico';
    } else {
      this.imagem = 'biscoito.ico';
    }
  }
}
