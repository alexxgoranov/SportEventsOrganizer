import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ContentPagesRoutingModule } from './content-pages-routing.module';
import { RouterModule } from '@angular/router';


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
    ContentPagesRoutingModule
  ]
})
export class ContentPagesModule { }
