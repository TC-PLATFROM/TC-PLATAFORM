import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-contacto',
  standalone: true,
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css']
})
export class ContactoComponent implements AfterViewInit {

  @ViewChild('contactSection', { static: true })
  contactSection!: ElementRef;

  ngAfterViewInit(): void {

    const section = this.contactSection.nativeElement;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
      }
    });

    tl.from('.contact-header h1', {
      opacity: 0,
      y: 40,
      duration: 0.8
    })
    .from('.contact-header p', {
      opacity: 0,
      y: 30,
      duration: 0.8
    }, "-=0.4")
    .from('.contact-form', {
      opacity: 0,
      y: 40,
      duration: 0.9
    }, "-=0.4")
    .from('.contact-socials img', {
      opacity: 0,
      y: 20,
      stagger: 0.15,
      duration: 0.6
    }, "-=0.5");

  }
}
