import { Component } from '@angular/core';

@Component({
  selector: 'app-criando-property-binding',
  imports: [],
  templateUrl: './criando-property-binding.component.html',
  styleUrl: './criando-property-binding.component.css'
})
export class CriandoPropertyBindingComponent {
  foto = "favicon.ico";
  exibirTexto: boolean = true;

  Textobtn() {
    this.exibirTexto = !this.exibirTexto;
  }

  alertar() {
    alert("Hoje está muito quente, beba água");
  }
}
