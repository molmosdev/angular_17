import { Component } from '@angular/core';
import { Example3Component } from '../../shared/components/example-3/example-3.component';

@Component({
  selector: 'app-view-b-c-b',
  standalone: true,
  imports: [
    Example3Component
  ],
  templateUrl: './view-b-c-b.component.html',
  styleUrl: './view-b-c-b.component.css'
})
export class ViewBCBComponent {

}
