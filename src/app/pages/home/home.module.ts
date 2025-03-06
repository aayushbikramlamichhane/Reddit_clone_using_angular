import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './comment/comment.component';
import { CommentSectionComponent } from './comment-section/comment-section.component';
import { FeedsComponent } from './feeds/feeds.component';
import { EditCommentComponent } from './feeds/components/edit-comment/edit-comment.component';
import { EllipseIconComponent } from './feeds/components/ellipse-icon/ellipse-icon.component';
import { FeedItemComponent } from './feeds/components/feed-item/feed-item.component';
import { HeaderComponent } from './header/header.component';
import { IconComponent } from './header/icon/icon.component';
import { HistoryComponent } from './history/history.component';
import { ManageFeedsComponent } from './manage-feeds/manage-feeds.component';
import { EditSectionComponent } from './manage-feeds/components/edit-section/edit-section.component';
import { UsernameComponent } from './username/username.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedcomponentModule } from 'src/app/shared/sharedcomponent.module';
import { RedditComponent } from './reddit/reddit.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { AuthModule } from 'src/app/auth/auth.module';


@NgModule({
  declarations: [
    CommentComponent,
    CommentSectionComponent,
    FeedsComponent,
    EditCommentComponent,
    EllipseIconComponent,
    FeedItemComponent,
    HeaderComponent,
    IconComponent,
    HistoryComponent,
    ManageFeedsComponent,
    EditSectionComponent,
    UsernameComponent,
    RedditComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedcomponentModule,
    HomeRoutingModule,
    AuthModule
  ],
})
export class HomeModule {}
