import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-tc',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './about-tc.html',
  styleUrl: './about-tc.css',
})
export class AboutTcComponent {

    title = '¿Qué es T&C Global Corporation?';

  description = `
    T&C Global Corporation es una organización corporativa orientada a brindar
    soluciones legales, tecnológicas y estratégicas, integrando experiencia
    profesional, innovación y compromiso institucional.
  `;

  history = `
    Nacida a partir de la necesidad de ofrecer servicios confiables y modernos,
    T&C ha evolucionado como una corporación que conecta el ámbito legal,
    empresarial y tecnológico, adaptándose a los nuevos retos del entorno
    digital y corporativo.
  `;

  stats = [
    { label: 'Áreas de especialización', value: 'Legal, Tech, Corporativo' },
    { label: 'Modelo de trabajo', value: 'Multidominio independiente' },
    { label: 'Enfoque', value: 'Seguridad, confianza y eficiencia' },
    { label: 'Proyección', value: 'Nacional e internacional' }
  ];
}
