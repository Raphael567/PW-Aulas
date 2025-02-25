import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CriandoInterpolationComponent } from './criando-interpolation/criando-interpolation.component';
import { CriandoPropertyBindingComponent } from './criando-property-binding/criando-property-binding.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CriandoInterpolationComponent, CriandoPropertyBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'revisao';
}
