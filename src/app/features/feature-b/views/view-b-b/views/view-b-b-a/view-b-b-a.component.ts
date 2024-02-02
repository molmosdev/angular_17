import { Component } from '@angular/core';
import { Example2Component } from '../../shared/components/example-2/example-2.component';

@Component({
  selector: 'app-view-b-b-a',
  standalone: true,
  imports: [
    Example2Component
  ],
  templateUrl: './view-b-b-a.component.html',
  styleUrl: './view-b-b-a.component.css'
})
export class ViewBBAComponent {

}
