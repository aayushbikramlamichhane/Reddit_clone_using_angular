import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { routesComponent, routesPath } from 'src/app/shared/constants/route-constants';
import { ManageFeedsComponent } from './manage-feeds/manage-feeds.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'manage-feeds',
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
