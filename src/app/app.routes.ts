import { Routes } from '@angular/router';
import {
  routesComponent,
  routesPath,
} from './shared/constants/route-constants';
import { authGuard } from './shared/guards/auth-guards.guard';

export const routes: Routes = [
  {
    path: routesPath.LOGIN,
    loadChildren: () => 
      import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: routesPath.HOME,
    canActivate: [authGuard],
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: routesPath.MANAGE_FEEDS,
    component: routesComponent.MANAGE_FEEDS_COMPONENT,
    canActivate: [authGuard],
  },
  {
    path: '',
    redirectTo: routesPath.LOGIN,
    pathMatch: 'full',
  },
  {
    path: routesPath.CREATE_USER_ACCOUNT,
    component: routesComponent.CREATE_USER_COMPONENT,
  },
  {
    path: routesPath.EDIT_SECTION,
    component: routesComponent.EDIT_SECTION_COMPONENT,
    canActivate: [authGuard],
  },
  {
    path: routesPath.PAGE_NOT_FOUND,
    component: routesComponent.PAGE_NOT_FOUND_COMPONENT,
  },
];
