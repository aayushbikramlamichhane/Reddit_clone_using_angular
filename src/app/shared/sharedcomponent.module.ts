import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideRouter } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { DeleteComponentComponent } from './components/delete-component/delete-component.component';
import { InputComponent } from './components/input/input.component';
import { LogocontentComponent } from './components/logocontent/logocontent.component';
import { LogoComponent } from './components/logo/logo.component';
import { PopupComponent } from './components/popup/popup.component';
import { UpvotesComponent } from './components/upvotes/upvotes.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    ButtonComponent,
    DeleteComponentComponent,
    InputComponent,
    LogocontentComponent,
    LogoComponent,
    PopupComponent,
    UpvotesComponent,
    NavbarComponent
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    ButtonComponent,
    DeleteComponentComponent,
    InputComponent,
    LogocontentComponent,
    LogoComponent,
    PopupComponent,
    UpvotesComponent,
    NavbarComponent
  ]
})
export class SharedcomponentModule {}
