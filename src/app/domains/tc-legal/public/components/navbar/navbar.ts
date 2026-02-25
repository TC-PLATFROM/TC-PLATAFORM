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

  /* ===============================
     TOGGLE MENU MOBILE
  =============================== */
  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  /* ===============================
     ABRIR LOGIN MODAL
  =============================== */
  openLogin() {
    window.dispatchEvent(new CustomEvent('openLoginModal'));
    this.isOpen = false; // Cierra menú si está abierto
  }

  /* ===============================
     EFECTO SCROLL HEADER
  =============================== */
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

}