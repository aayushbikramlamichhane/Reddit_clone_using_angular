
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { inject } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router: Router = inject(Router);
  const protectedRoutes: string[] = ['/home', '/feeds'];


  const loggedIn = localStorage.getItem('loggedIn');


  if (protectedRoutes.includes(state.url) && !loggedIn) {
    router.navigate(['/']);
    return false; 
  }

  return true; 
};
