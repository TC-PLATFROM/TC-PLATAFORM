import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSectionComponent {
    companyName = 'T&C Global Corporation';
  slogan = 'Soluciones legales, tecnológicas y corporativas de alto nivel';
  description = `
    Bienvenido a nuestra plataforma institucional, donde la innovación,
    la seguridad y la excelencia profesional se unen para ofrecer
    servicios confiables y modernos.
  `;

}
