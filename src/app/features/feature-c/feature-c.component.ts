import { Component } from '@angular/core';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-feature-c',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterOutlet
  ],
  templateUrl: './feature-c.component.html',
  styleUrl: './feature-c.component.css'
})
export class FeatureCComponent {

}
