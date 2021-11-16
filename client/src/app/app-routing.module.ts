import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentPagesLayoutComponent } from './layouts/content_pages_layout/content-pages-layout/content-pages-layout.component';
import { InAppLayoutComponent } from './layouts/in_app_layouts/in-app-layout/in-app-layout.component';
import { CONTENT_ROUTES } from './shared/content-routes';
import { IN_APP_ROUTES } from './shared/in-app-routes';

  const routes: Routes = [

    { path: '', redirectTo: 'pages/sign-in', pathMatch: 'full' },
    { path: '', component: ContentPagesLayoutComponent, data: { title: 'content Views' }, children: CONTENT_ROUTES },
    { path: '', component: InAppLayoutComponent, data: { title: 'full Views' }, children: IN_APP_ROUTES },

    {
      path: '**',
      redirectTo: 'pages/error'
    }
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
