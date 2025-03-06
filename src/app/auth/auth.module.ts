import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ImageComponent } from './login/image/image.component';
import { LayoutComponent } from './login/layout/layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedcomponentModule } from 'src/app/shared/sharedcomponent.module';
import { CreateUserComponent } from './create-user/create-user.component';
import { LogoutComponent } from './logout/logout.component';



@NgModule({
  declarations: [
    LoginComponent,
    ImageComponent,
    LayoutComponent,
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AuthRoutingModule,
    SharedcomponentModule,
  ],
  exports: []
})
export class AuthModule { }
