import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-header',
  standalone: true,
  imports: [],
  templateUrl: './landing-header.html',
  styleUrl: './landing-header.css',
})
export class LandingHeaderComponent {

   isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
