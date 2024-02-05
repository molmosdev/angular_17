import { Component } from '@angular/core';
import { Example3Component } from '../../shared/components/example-3/example-3.component';

@Component({
  selector: 'app-page-b-c-a',
  standalone: true,
  imports: [
    Example3Component
  ],
  templateUrl: './page-b-c-a.component.html',
  styleUrl: './page-b-c-a.component.css'
})
export class PageBCAComponent {

}
