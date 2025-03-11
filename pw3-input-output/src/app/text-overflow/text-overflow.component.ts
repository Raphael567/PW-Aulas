import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-text-overflow',
  imports: [],
  templateUrl: './text-overflow.component.html',
  styleUrl: './text-overflow.component.css'
})
export class TextOverflowComponent {
  @Input() titulo = 'O titulo';
  @Input() texto = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dicta soluta in? Deserunt cupiditate delectus corrupti tenetur libero incidunt commodi qui ut, quia nemo sapiente ad et placeat doloribus magnam?';
  @Input() clip : boolean = true;
}
