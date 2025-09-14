import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './userAuth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  console.log('GUARD: Checking for', state.url, 'isAdmin =', authService.isAdmin);
  
  if (authService.isAdmin) {
    console.log('GUARD: ALLOWING');
    return true;
  } else {
    console.log('GUARD: DENYING, redirect to /');
    return router.createUrlTree(['/']);
  }
}