import { Component } from '@angular/core';  
import { CommonModule } from '@angular/common';
import { ContactosRoutingModule } from "../../../domains/tc-legal/features/contactos/contactos-routing-module";
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-subcompanies-section',
  standalone: true,
  imports: [CommonModule, ContactosRoutingModule, RouterModule],
  templateUrl: './subcompanies-section.html',
  styleUrl: './subcompanies-section.css',
})
export class SubcompaniesSectionComponent {
  title = 'Nuestras Sub-Empresas';
}