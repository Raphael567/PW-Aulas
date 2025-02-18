import { InterpolationComponent } from './../interpolation/interpolation.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css'
})

export class PropertyBindingComponent {
  foto = "favicon.ico";
  escondeTexto: boolean = true; // True: Oculta e False: Exibe
  exibirTextobtn: boolean = true;

  Textobtn() {
    this.exibirTextobtn = !this.exibirTextobtn;
    // if (this.exibirTextobtn) {
    //   this.exibirTextobtn = false;
    // } else {
    //   this.exibirTextobtn = true
    // }
  }

  alertar(){
    alert("Hoje está muito quente, beba água!")
  }
}
