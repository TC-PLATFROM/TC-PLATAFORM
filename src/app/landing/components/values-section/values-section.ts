import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-values-section',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './values-section.html',
  styleUrl: './values-section.css',
})
export class ValuesSectionComponent {
  title = 'Nuestros valores y objetivos';
  subtitle = `
    En T&C Global Corporation, nuestros principios guían cada decisión,
    proyecto y relación profesional.
  `;

  values = [
    {
      title: 'Ética y transparencia',
      description: 'Actuamos con integridad, claridad y responsabilidad en cada proceso.'
    },
    {
      title: 'Compromiso profesional',
      description: 'Ofrecemos servicios de alto nivel respaldados por experiencia y preparación continua.'
    },
    {
      title: 'Innovación constante',
      description: 'Integramos tecnología y mejora continua para responder a los nuevos desafíos.'
    },
    {
      title: 'Confianza institucional',
      description: 'Construimos relaciones sólidas y duraderas basadas en resultados y seriedad.'
    }
  ];

  objectives = [
    'Consolidar un modelo corporativo multidominio sólido y escalable',
    'Brindar soluciones legales y tecnológicas seguras y eficientes',
    'Fortalecer la confianza de clientes y aliados estratégicos',
    'Expandir la presencia institucional a nivel nacional e internacional'
  ];
}
