import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentPagesLayoutComponent } from './layouts/content_pages_layout/content-pages-layout/content-pages-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentPagesLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
