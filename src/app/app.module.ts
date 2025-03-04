import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideRouter, RouterModule, RouterOutlet} from '@angular/router';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedcomponentModule } from './shared/sharedcomponent.module';
import { AuthModule } from './pages/auth/auth.module';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HomeModule,
    ReactiveFormsModule,
    FormsModule,
    SharedcomponentModule,
    RouterModule.forRoot(routes),
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
