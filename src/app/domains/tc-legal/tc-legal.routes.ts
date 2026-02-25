import { Routes } from '@angular/router';

export const TC_LEGAL_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./public/public.routes')
      .then(m => m.PUBLIC_ROUTES)
  }
];
