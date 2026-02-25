import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-modal.html',
  styleUrls: ['./login-modal.css']
})
export class LoginModalComponent implements OnInit {

  show = false;
  selectedService = '';
  codigo = '';
  carnet = '';

  ngOnInit(): void {

    window.addEventListener('openLoginModal', () => {
      this.show = true;
    });

    window.addEventListener('openServiceModal', (event: any) => {
      this.selectedService = event.detail;
      this.show = true;
    });
  }

  close() {
    this.show = false;
    this.codigo = '';
    this.carnet = '';
  }

  ingresar() {
    if (!this.codigo || !this.carnet) {
      alert('Complete los campos');
      return;
    }

    this.show = false;
    window.location.href = '/proceso';
  }
}
