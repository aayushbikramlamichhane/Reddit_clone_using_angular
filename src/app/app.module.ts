import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideRouter, RouterModule, RouterOutlet} from '@angular/router';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './pages/auth/auth.module';
import { CreateUserModule } from './pages/create-user/create-user.module';
import { SharedcomponentModule } from './shared/sharedcomponent.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    ReactiveFormsModule,
    FormsModule,
    AuthModule,
    CreateUserModule,
    SharedcomponentModule,
    RouterModule
  ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent],
})
export class AppModule {}
