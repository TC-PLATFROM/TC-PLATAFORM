import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  standalone: true,
  templateUrl: './servicios.html',
  styleUrls: ['./servicios.css']
})
export class ServiciosComponent {

  openServiceModal(service: string) {
    window.dispatchEvent(new CustomEvent('openServiceModal', {
      detail: service
    }));
  }
}
