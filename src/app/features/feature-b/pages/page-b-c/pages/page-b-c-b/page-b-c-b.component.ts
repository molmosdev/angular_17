import { Component } from '@angular/core';
import { Example3Component } from '../../shared/components/example-3/example-3.component';

@Component({
  selector: 'app-page-b-c-b',
  standalone: true,
  imports: [
    Example3Component
  ],
  templateUrl: './page-b-c-b.component.html',
  styleUrl: './page-b-c-b.component.css',
  host: {
    class: 'box',
  },
})
export class PageBCBComponent {

}
