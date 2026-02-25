import { Component, AfterViewInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'tc-welcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome.html',
  styleUrls: ['./welcome.css']
})
export class WelcomeComponent implements AfterViewInit {

  @ViewChild('heroTitle', { static: true })
  heroTitle!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.animateHeroTitle();
  }

  private animateHeroTitle(): void {
    gsap.from(this.heroTitle.nativeElement, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out'
    });
  }
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
