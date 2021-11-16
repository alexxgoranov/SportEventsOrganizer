import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentPagesLayoutComponent } from './layouts/content_pages_layout/content-pages-layout/content-pages-layout.component';
import { SharedModule } from 'src/shared/shared.module';
import { InAppLayoutComponent } from './layouts/in_app_layouts/in-app-layout/in-app-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentPagesLayoutComponent,
    InAppLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
