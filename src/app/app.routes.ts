import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing/page/landing-page';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./landing/page/landing-page')
        .then(m => m.LandingPageComponent)
  },
  {
    path: 'tc-legal',
    loadChildren: () =>
      import('./domains/tc-legal/tc-legal.routes')
        .then(m => m.TC_LEGAL_ROUTES)
  }
];
