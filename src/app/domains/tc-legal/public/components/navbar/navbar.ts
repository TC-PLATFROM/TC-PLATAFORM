import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-tc-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class TcNavbarComponent {

  isOpen = false;
  isScrolled = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  openLogin() {
    window.dispatchEvent(new CustomEvent('openLoginModal'));
    this.isOpen = false; 
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

}