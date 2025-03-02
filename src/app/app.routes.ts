import { Routes } from "@angular/router";
import { routesPath, routesComponent } from "./constants/route-constants";
import { authGuard } from "./guards/auth-guards.guard";

export const routes: Routes = [
  {
    path: routesPath.LOGIN,
    component: routesComponent.LOGIN_COMPONENT
  },
  {
    path: routesPath.HOME,
    component: routesComponent.HOME_COMPONENT,
    canActivate: [authGuard]
  },
  {
    path: routesPath.FEEDS,
    component: routesComponent.FEEDS_COMPONENT,
    canActivate: [authGuard],
  },
  {
    path: routesPath.MANAGE_FEEDS,
    component: routesComponent.MANAGE_FEEDS_COMPONENT,
    canActivate: [authGuard]
  },
  {
    path: '',
    redirectTo: routesPath.LOGIN,
    pathMatch: 'full',
  },
  {
    path: routesPath.CREATE_USER_ACCOUNT,
    component: routesComponent.CREATE_USER_COMPONENT,
    // canActivate: [authGuard]
  },
  {
    path: routesPath.EDIT_SECTION,
    component: routesComponent.EDIT_SECTION_COMPONENT,
    canActivate: [authGuard]
  },
];
