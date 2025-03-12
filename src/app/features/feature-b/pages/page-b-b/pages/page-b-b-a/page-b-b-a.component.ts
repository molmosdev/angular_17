import { Component } from '@angular/core';
import { Example2Component } from '../../shared/components/example-2/example-2.component';

@Component({
  selector: 'app-page-b-b-a',
  standalone: true,
  imports: [
    Example2Component
  ],
  templateUrl: './page-b-b-a.component.html',
  styleUrl: './page-b-b-a.component.css',
  host: {
    class: 'box',
  },
})
export class PageBBAComponent {

}
