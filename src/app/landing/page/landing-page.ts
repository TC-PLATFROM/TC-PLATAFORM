import { Component } from '@angular/core';
import { AboutTcComponent } from '../components/about-tc/about-tc';
import { HeroSectionComponent } from '../components/hero-section/hero-section';
import { LandingFooterComponent } from '../components/landing-footer/landing-footer';
import { LandingHeaderComponent } from '../components/landing-header/landing-header';
import { SubcompaniesSectionComponent } from '../components/subcompanies-section/subcompanies-section';
import { ValuesSectionComponent } from '../components/values-section/values-section';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [AboutTcComponent, 
  HeroSectionComponent, 
  LandingFooterComponent, 
  LandingHeaderComponent, 
  SubcompaniesSectionComponent, 
  ValuesSectionComponent,
  RouterModule],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPageComponent {

}
