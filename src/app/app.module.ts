import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideRouter, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FeedsComponent } from './components/feeds/feeds.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { TitleCasePipe } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { ImageComponent } from './components/image/image.component';
import { ButtonComponent } from './components/button/button.component';
import { LogoComponent } from './components/logo/logo.component';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { TooltipDirective } from './directives/tooltip.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FeedsComponent,
    SidenavComponent,
    CreateUserComponent,
    LayoutComponent,
    ImageComponent,
    ButtonComponent,
    LogoComponent,
    CustomDatePipe,
    TooltipDirective,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    RouterModule,
    ReactiveFormsModule,
    TitleCasePipe
  ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent]
})
export class AppModule { }
