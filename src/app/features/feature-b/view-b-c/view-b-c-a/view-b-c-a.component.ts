import { Component } from '@angular/core';
import { Example3Component } from '../shared/components/example-3/example-3.component';

@Component({
  selector: 'app-view-b-c-a',
  standalone: true,
  imports: [
    Example3Component
  ],
  templateUrl: './view-b-c-a.component.html',
  styleUrl: './view-b-c-a.component.css',
  host: {
    class: 'box',
  },
})
export default class ViewBCAComponent {

}
