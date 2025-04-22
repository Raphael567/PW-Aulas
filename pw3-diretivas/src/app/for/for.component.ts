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

  mostrar_outro_botao: boolean = false;
  mostrar_tarefas: boolean = false;

  tarefas_para_exbir() {
    if(this.mostrar_outro_botao) {
      this.exibir_tarefas();
    } else {
      this.exibir_concluidas();
    }
  }

  exibir_tarefas() {
    this.mostrar_tarefas = true;
    this.mostrar_outro_botao = !this.mostrar_outro_botao;
  }

  exibir_concluidas() {
    this.mostrar_tarefas = false;
    this.mostrar_outro_botao = !this.mostrar_outro_botao;
  }
}
