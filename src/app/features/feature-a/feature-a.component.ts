import { Component } from '@angular/core';

@Component({
  selector: 'app-feature-a',
  standalone: true,
  imports: [],
  templateUrl: './feature-a.component.html',
  styleUrl: './feature-a.component.css',
  host: {
    class: 'box',
  },
})
export class FeatureAComponent {

}
