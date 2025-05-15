
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { inject } from '@angular/core';
import { loggedIn } from '../storage/local-storage';
import { AuthServiceService } from '../services/auth-service.service';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  // const authService = inject(AuthServiceService)
  const router: Router = inject(Router);
  const protectedRoutes: string[] = ['/home', '/manage-feeds'];

  if (protectedRoutes.includes(state.url) && !loggedIn) {
    router.navigate(['/']);
    return false; 
  }
  // if (authService.checkIfLoggedIn) {
    return true;
  // }else{
  // return false; }
};
