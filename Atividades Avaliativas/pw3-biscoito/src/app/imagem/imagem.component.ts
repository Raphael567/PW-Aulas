import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagem',
  templateUrl: './imagem.component.html',
  styleUrls: ['./imagem.component.css']
})
export class ImagemComponent {
  imagem = 'biscoito.ico'
  alternarImagem = 'biscoito-aberto.ico';

  trocarImagem() {
    if (this.imagem === 'biscoito.ico') {
      this.imagem = 'biscoito-aberto.ico';
    } else {
      this.imagem = 'biscoito.ico';
    }
  }
}
