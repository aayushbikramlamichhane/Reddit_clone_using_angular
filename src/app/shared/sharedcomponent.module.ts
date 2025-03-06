import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { DeleteComponentComponent } from './components/delete-component/delete-component.component';
import { InputComponent } from './components/input/input.component';
import { LogocontentComponent } from './components/logocontent/logocontent.component';
import { LogoComponent } from './components/logo/logo.component';
import { PopupComponent } from './components/popup/popup.component';
import { UpvotesComponent } from './components/upvotes/upvotes.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatModule } from './module/mat.module';
import { LogoutComponent } from '../auth/logout/logout.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';




@NgModule({
  declarations: [
    ButtonComponent,
    DeleteComponentComponent,
    InputComponent,
    LogocontentComponent,
    LogoComponent,
    PopupComponent,
    UpvotesComponent,
    NavbarComponent,
    LogoutComponent,
    PageNotFoundComponent
  ],
  imports: [CommonModule, FormsModule, MatModule],
  exports: [
    ButtonComponent,
    DeleteComponentComponent,
    InputComponent,
    LogocontentComponent,
    LogoComponent,
    PopupComponent,
    UpvotesComponent,
    NavbarComponent,
    MatModule,
  ],
})
export class SharedcomponentModule {}
