import { LoginComponent } from "../components/login/login.component";
import { HomeComponent } from './../components/home/home.component';
import { FeedsComponent } from '../components/feeds/feeds.component';
import { CreateUserComponent } from "../components/create-user/create-user.component";

export const routesPath = {
  LOGIN: 'login',
  HOME: 'home',
  FEEDS: 'feeds',
  CREATEUSERACCOUNT: 'create-user'
};

export const routesComponent = {
  LOGIN_COMPONENT: LoginComponent,
  HOME_COMPONENT: HomeComponent,
  FEEDS_COMPONENT: FeedsComponent,
  // REGISTERCOMPONENT: RegisterComponent
  CREATE_USER_COMONENT: CreateUserComponent
};
