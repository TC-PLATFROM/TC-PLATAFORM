import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-publico',
  standalone: true,
  imports: [],
  templateUrl: './publico.html',
  styleUrl: './publico.css',
})
export class PublicoComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.createParticles();
    this.animateContent();
  }

  createParticles() {
    const container = document.querySelector('.particles');

    for (let i = 0; i < 40; i++) {
      const particle = document.createElement('span');
      particle.style.left = Math.random() * 100 + 'vw';
      particle.style.animationDuration = (5 + Math.random() * 10) + 's';
      particle.style.animationDelay = Math.random() * 5 + 's';
      container?.appendChild(particle);
    }
  }

  animateContent() {
    gsap.from(".coming-content h1", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(".coming-content h2", {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: "power3.out"
    });

    gsap.from(".coming-content p", {
      opacity: 0,
      duration: 1,
      delay: 0.6
    });

    gsap.from(".coming-content button", {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      delay: 0.9
    });
  }
}
