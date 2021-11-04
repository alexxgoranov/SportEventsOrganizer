import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentPagesLayoutComponent } from './layouts/content_pages_layout/content-pages-layout/content-pages-layout.component';
import { CONTENT_ROUTES } from './shared/content-routes';

  const routes: Routes = [

    { path: '', redirectTo: 'pages/sign-in', pathMatch: 'full' },
    { path: '', component: ContentPagesLayoutComponent, data: { title: 'content Views' }, children: CONTENT_ROUTES },
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
