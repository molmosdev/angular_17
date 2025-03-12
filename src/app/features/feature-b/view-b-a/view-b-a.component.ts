import { Component } from '@angular/core';
import { ExampleComponent } from '../shared/components/example/example.component';

@Component({
  selector: 'app-view-b-a',
  standalone: true,
  imports: [
    ExampleComponent
  ],
  templateUrl: './view-b-a.component.html',
  styleUrl: './view-b-a.component.css',
  host: {
    class: 'box',
  },
})
export default class ViewBAComponent {

}
