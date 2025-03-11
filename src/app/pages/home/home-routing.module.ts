import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { routesComponent, routesPath } from 'src/app/shared/constants/route-constants';

const routes: Routes = [
  {
    path: '',
    component: routesComponent.HOME_COMPONENT,
  },
  {
    path: routesPath.MANAGE_FEEDS,
    component: routesComponent.MANAGE_FEEDS_COMPONENT,
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
