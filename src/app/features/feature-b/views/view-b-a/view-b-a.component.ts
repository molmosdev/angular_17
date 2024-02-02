import { Component } from '@angular/core';
import { ExampleComponent } from '../../shared/components/example/example.component';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@Component({
  selector: 'app-view-b-a',
  standalone: true,
  imports: [
    ExampleComponent,
    RouterOutlet,
    NavbarComponent
  ],
  templateUrl: './view-b-a.component.html',
  styleUrl: './view-b-a.component.css'
})
export class ViewBAComponent {

}
