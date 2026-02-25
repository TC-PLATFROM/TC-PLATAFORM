import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

// export const roleGuard: CanActivateFn = (route) => {
//   const auth = inject(AuthService);
//   const allowedRoles = route.data?.['roles'] as string[];

//   return auth.hasRole(allowedRoles);
// };

