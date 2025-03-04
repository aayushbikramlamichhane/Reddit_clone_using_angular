import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ImageComponent } from './login/image/image.component';
import { LayoutComponent } from './login/layout/layout.component';
import { LogoutComponent } from './logout/logout/logout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedcomponentModule } from 'src/app/shared/sharedcomponent.module';



@NgModule({
  declarations: [
    LoginComponent,
    ImageComponent,
    LayoutComponent,
    LogoutComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedcomponentModule
  ]
})
export class AuthModule { }
