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
  },
   {
    path: 'tc-finanzas',
    loadChildren: () =>
      import('./domains/tc-finanzas/tc-finanzas.routes')
        .then(m => m.TC_FINANZAS_ROUTE)
  },
  { path: 'tc-comunicaciones', 
    loadChildren: () =>
      import('./domains/tc-comunicaciones/tc-com.routes')
        .then(m => m.TC_COMUNICACIONES_ROUTE)
  },
  { path: 'tc-mineral', 
    loadChildren: () =>
      import('./domains/tc-mineral/tc-mineral.routes')
        .then(m => m.TC_MINERAL_ROUTE)
  },
  {path: 'tc-salud',
    loadChildren: () =>
      import('./domains/tc-salud/tc-salud.routes')
        .then(m => m.TC_SALUD_ROUTE)
  }

];
