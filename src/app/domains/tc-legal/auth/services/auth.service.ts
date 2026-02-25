import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

export type UserRole = 'admin' | 'coordinador' | 'abogado' | 'cliente';

export interface AuthUser {
  id: string;
  email: string;
  role: UserRole;
}

@Injectable({ providedIn: 'root' })
export class AuthService {

  private _user = signal<AuthUser | null>(null);
  user$ = this._user.asReadonly();

  constructor(private router: Router) {}

  login(user: AuthUser) {
    this._user.set(user);
  }

  logout() {
    this._user.set(null);
    this.router.navigate(['/tc-legal']);
  }

  isAuthenticated(): boolean {
    return !!this._user();
  }

  hasRole(roles: UserRole[]): boolean {
    const user = this._user();
    return !!user && roles.includes(user.role);
  }

  get role(): UserRole | null {
    return this._user()?.role ?? null;
  }
}
