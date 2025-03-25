//Raphael Pereira Canuto
//Hellen Novi Salvador

import { Component, input, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagem',
  templateUrl: './imagem.component.html',
  styleUrls: ['./imagem.component.css']
})
export class ImagemComponent {
  @Input() imagem = "";
}
