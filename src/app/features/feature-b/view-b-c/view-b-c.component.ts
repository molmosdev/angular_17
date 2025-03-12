import { Component } from '@angular/core';
import { ExampleComponent } from '../shared/components/example/example.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'view-page-b-c',
  standalone: true,
  imports: [
    ExampleComponent,
    NavbarComponent,
    RouterOutlet
  ],
  templateUrl: './view-b-c.component.html',
  styleUrl: './view-b-c.component.css',
  host: {
    class: 'box',
  },
})
export default class ViewBCComponent {

}
