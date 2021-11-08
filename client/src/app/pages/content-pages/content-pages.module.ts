import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ContentPagesRoutingModule } from './content-pages-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { InputShowPasswordModule } from 'src/app/directives/input-show-password/input-show-password.module';


@NgModule({
  declarations:
  [
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ContentPagesRoutingModule,
    ReactiveFormsModule,
    InputShowPasswordModule
  ]
})
export class ContentPagesModule { }
