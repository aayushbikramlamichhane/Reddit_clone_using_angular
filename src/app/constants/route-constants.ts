import { LoginComponent } from "../components/login/login.component";
import { HomeComponent } from './../components/home/home.component';
import { FeedsComponent } from "../components/home/feeds/feeds.component";
import { CreateUserComponent } from "../components/create-user/create-user.component";
import { ManageFeedsComponent } from "../components/manage-feeds/manage-feeds.component";
import { EditSectionComponent } from "../components/manage-feeds/components/edit-section/edit-section.component";

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
  // REGISTERCOMPONENT: RegisterComponent
  CREATE_USER_COMPONENT: CreateUserComponent,
  MANAGE_FEEDS_COMPONENT: ManageFeedsComponent,
  EDIT_SECTION_COMPONENT: EditSectionComponent
};
