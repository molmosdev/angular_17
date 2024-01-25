import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeNavbarComponent } from './components/home-navbar/home-navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeNavbarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
