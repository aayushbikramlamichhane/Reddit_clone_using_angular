import { LoginComponent } from "src/app/pages/auth/login/login.component";
import { CreateUserComponent } from "src/app/pages/create-user/create-user.component";
import { FeedsComponent } from "src/app/pages/home/feeds/feeds.component";
import { HomeComponent } from "src/app/pages/home/home.component";
import { EditSectionComponent } from "src/app/pages/home/manage-feeds/components/edit-section/edit-section.component";
import { ManageFeedsComponent } from "src/app/pages/home/manage-feeds/manage-feeds.component";


export const routesPath = {
  LOGIN: 'login',
  HOME: 'home',
  FEEDS: 'feeds',
  CREATE_USER_ACCOUNT: 'create-user',
  MANAGE_FEEDS : 'manage-feeds',
  EDIT_SECTION : 'edit/:id'
};

export const routesComponent = {
  LOGIN_COMPONENT: LoginComponent,
  HOME_COMPONENT: HomeComponent,
  FEEDS_COMPONENT: FeedsComponent,
  CREATE_USER_COMPONENT: CreateUserComponent,
  MANAGE_FEEDS_COMPONENT: ManageFeedsComponent,
  EDIT_SECTION_COMPONENT: EditSectionComponent
};
