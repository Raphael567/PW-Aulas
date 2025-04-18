import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IfComponent } from './if/if.component';
import { SwitchComponent } from './switch/switch.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IfComponent, SwitchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pw3-diretivas';
}
