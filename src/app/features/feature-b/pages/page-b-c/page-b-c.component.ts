import { Component } from '@angular/core';
import { ExampleComponent } from '../../shared/components/example/example.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-page-b-c',
  standalone: true,
  imports: [
    ExampleComponent,
    NavbarComponent,
    RouterOutlet
  ],
  templateUrl: './page-b-c.component.html',
  styleUrl: './page-b-c.component.css'
})
export class PageBCComponent {

}
