import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-for',
  imports: [],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {
  professores: string[] = ["Edshow", "Vilton", "Welha"]

  remover(index: number) {
    this.professores.splice(index, 1);
  }

  lista_tarefas: any[] =
  [
    {'id': 1, 'nome': "Estudar", 'concluida': true},
    {'id': 2, 'nome': "Comer", 'concluida': true},
    {'id': 3, 'nome': "Dormir", 'concluida': false}
  ]

  // mostrar_outro_botao: boolean = false;
  // mostrar_tarefas: boolean = false;
  // mostrar_concluidas: boolean = false;

  // exibir_tarefas() {
  //   this.mostrar_tarefas = true;
  //   this.mostrar_outro_botao = !this.mostrar_outro_botao;
  // }

  // exibir_concluidas() {
  //   this.mostrar_concluidas = true;
  //   this.mostrar_outro_botao = !this.mostrar_outro_botao;
  // }

  exibirTudo: boolean = false;

  onExibirTudo() {
    this.exibirTudo = !this.exibirTudo;
  }

  getConcluidas(){
    return this.lista_tarefas.filter((item) => {
      return item.concluida;
    })
  }
}
