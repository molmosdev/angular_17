import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css',
  host: {
    class: 'box',
  },
})
export class ExampleComponent {

}
