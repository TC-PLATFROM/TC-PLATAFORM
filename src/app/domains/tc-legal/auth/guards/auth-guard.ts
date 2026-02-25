import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

// export const authGuard: CanActivateFn = () => {
//   const auth = inject(AuthService);
//   const router = inject(Router);

//   if (!auth.isAuthenticated()) {
//     router.navigate(['/tc-legal']);
//     return false;
//   }

//   return true;
// };
