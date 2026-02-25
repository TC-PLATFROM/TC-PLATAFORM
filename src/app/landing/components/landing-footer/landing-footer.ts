import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactosRoutingModule } from "../../../domains/tc-legal/features/contactos/contactos-routing-module";

@Component({
  selector: 'app-landing-footer',
  standalone: true,
  imports: [CommonModule, ContactosRoutingModule],
  templateUrl: './landing-footer.html',
  styleUrl: './landing-footer.css',
})
export class LandingFooterComponent {
 currentYear = new Date().getFullYear();
 year = new Date().getFullYear();
}
