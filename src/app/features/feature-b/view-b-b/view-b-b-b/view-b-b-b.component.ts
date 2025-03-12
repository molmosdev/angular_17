import { Component } from '@angular/core';
import { Example2Component } from '../shared/components/example-2/example-2.component';

@Component({
  selector: 'app-view-b-b-b',
  standalone: true,
  imports: [
    Example2Component
  ],
  templateUrl: './view-b-b-b.component.html',
  styleUrl: './view-b-b-b.component.css',
  host: {
    class: 'box',
  },
})
export default class ViewBBBComponent {

}
