import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideRouter, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FeedsComponent } from './components/home/feeds/feeds.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ReactiveFormsModule, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { ImageComponent } from './components/image/image.component';
import { ButtonComponent } from './components/shared-componnent/button/button.component';
import { LogoComponent } from './components/shared-componnent/logo/logo.component';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { TooltipDirective } from './directives/tooltip.directive';
import { RedditComponent } from './components/home/reddit/reddit.component';
import { HeaderComponent } from './components/home/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { InputComponent } from './components/input/input.component';
import { UsernameComponent } from './components/home/username/username.component';
import { NavbarComponent } from './components/home/navbar/navbar.component';
import { UpvotesComponent } from './components/shared-componnent/upvotes/upvotes.component';
import { LogocontentComponent } from './components/shared-componnent/logocontent/logocontent.component';
import { HistoryComponent } from './components/home/history/history.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentSectionComponent } from './components/home/comment-section/comment-section.component';
import { ManageFeedsComponent } from './components/manage-feeds/manage-feeds.component';
import { IconComponent } from './components/icon/icon.component';
import { FeedItemComponent } from './components/home/feed-item/feed-item.component';


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
    CommentSectionComponent,
    ManageFeedsComponent,
    IconComponent,
    FeedItemComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    RouterModule,
    ReactiveFormsModule,
    TitleCasePipe,
    CommonModule,
    FormsModule
  ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent]
})
export class AppModule { }
