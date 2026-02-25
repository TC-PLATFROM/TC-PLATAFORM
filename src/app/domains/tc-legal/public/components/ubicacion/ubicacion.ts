import { Component } from '@angular/core';

@Component({
  selector: 'app-ubicacion',
  standalone: true,
  imports: [],
  templateUrl: './ubicacion.html',
  styleUrl: './ubicacion.css',
})
export class UbicacionComponent {

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}
