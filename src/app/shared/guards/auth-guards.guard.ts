
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { inject } from '@angular/core';
import { loggedIn } from '../storage/local-storage';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router: Router = inject(Router);
  const protectedRoutes: string[] = ['/home', '/manage-feeds'];

  if (protectedRoutes.includes(state.url) && !loggedIn) {
    router.navigate(['/']);
    return false; 
  }

  return true; 
};
