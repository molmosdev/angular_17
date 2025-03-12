import { Component } from '@angular/core';
import { ExampleComponent } from '../shared/components/example/example.component';

@Component({
  selector: 'app-page-b-a',
  standalone: true,
  imports: [
    ExampleComponent
  ],
  templateUrl: './page-b-a.component.html',
  styleUrl: './page-b-a.component.css',
  host: {
    class: 'box',
  },
})
export default class PageBAComponent {

}
