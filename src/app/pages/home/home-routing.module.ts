import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { authGuard } from 'src/app/shared/guards/auth-guards.guard';
import { routesPath } from 'src/app/shared/constants/route-constants';

const routes: Routes = [
  {
    // path: routesPath.HOME,
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeRoutingModule { }
