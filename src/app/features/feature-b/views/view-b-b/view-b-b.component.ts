import { Component } from '@angular/core';
import { ExampleComponent } from '../../shared/components/example/example.component';

@Component({
  selector: 'app-view-b-b',
  standalone: true,
  imports: [
    ExampleComponent
  ],
  templateUrl: './view-b-b.component.html',
  styleUrl: './view-b-b.component.css'
})
export class ViewBBComponent {

}
