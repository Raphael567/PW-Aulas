import { Component } from '@angular/core';

@Component({
  selector: 'app-frases',
  imports: [],
  templateUrl: './frases.component.html',
  styleUrl: './frases.component.css'
})

export class FrasesComponent {
  frasesBiscoito = [
    "A sorte favorece os audazes.",
    "Grandes jornadas começam com um único passo.",
    "Seja a mudança que você deseja ver no mundo.",
    "A paciência é a chave para o sucesso.",
    "Acredite em si mesmo e tudo será possível.",
    "A felicidade está nas pequenas coisas.",
    "O sucesso nasce da persistência.",
    "Siga seu coração, mas leve seu cérebro junto.",
    "Cada desafio é uma oportunidade disfarçada.",
    "A vida recompensa aqueles que se atrevem a sonhar.",
    "O caminho pode ser longo, mas a recompensa vale a pena.",
    "Hoje é um bom dia para começar algo novo.",
    "A simplicidade é a verdadeira essência da felicidade.",
    "Valorize aqueles que estão ao seu lado.",
    "A sorte vem para aqueles que trabalham por ela.",
    "O amor e a compaixão sempre encontram um caminho.",
    "Não tenha medo de falhar, tenha medo de não tentar.",
    "A vida é feita de escolhas, escolha ser feliz.",
    "O maior erro é não tentar.",
    "Você está exatamente onde precisa estar agora."
  ]

  texto = this.frasesBiscoito[Math.floor(Math.random() * this.frasesBiscoito.length)]
}
