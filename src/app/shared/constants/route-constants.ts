
import { CreateUserComponent } from "src/app/auth/create-user/create-user.component";
import { LoginComponent } from "src/app/auth/login/login.component";
import { FeedsComponent } from "src/app/pages/home/feeds/feeds.component";
import { HomeComponent } from "src/app/pages/home/home.component";
import { EditSectionComponent } from "src/app/pages/home/manage-feeds/components/edit-section/edit-section.component";
import { ManageFeedsComponent } from "src/app/pages/home/manage-feeds/manage-feeds.component";
import { PageNotFoundComponent } from "../components/page-not-found/page-not-found.component";


export const routesPath = {
  LOGIN: '',
  HOME: 'home',
  FEEDS: 'feeds',
  CREATE_USER_ACCOUNT: 'create-user',
  MANAGE_FEEDS : 'manage-feeds',
  EDIT_SECTION : 'edit/:id',
  PAGE_NOT_FOUND: '**'
};

export const routesComponent = {
  LOGIN_COMPONENT: LoginComponent,
  HOME_COMPONENT: HomeComponent,
  FEEDS_COMPONENT: FeedsComponent,
  CREATE_USER_COMPONENT: CreateUserComponent,
  MANAGE_FEEDS_COMPONENT: ManageFeedsComponent,
  EDIT_SECTION_COMPONENT: EditSectionComponent,
  PAGE_NOT_FOUND_COMPONENT: PageNotFoundComponent
};
