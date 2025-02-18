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
import { RedditComponent } from './components/home/reddit/reddit.component';
import { HeaderComponent } from './components/home/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { InputComponent } from './components/input/input.component';
import { UsernameComponent } from './components/home/username/username.component';
import { NavbarComponent } from './components/home/navbar/navbar.component';
import { UpvotesComponent } from './components/upvotes/upvotes.component';
import { LogocontentComponent } from './components/logocontent/logocontent.component';
import { HistoryComponent } from './components/home/history/history.component';
import { CommentComponent } from './components/comment/comment.component';


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
    RedditComponent,
    HeaderComponent,
    SearchComponent,
    InputComponent,
    UsernameComponent,
    NavbarComponent,
    UpvotesComponent,
    LogocontentComponent,
    HistoryComponent,
    CommentComponent,
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
