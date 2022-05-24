import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';

const myRouter: Routes = [
  {
    path: 'page-1', component: Page1Component, children: [
      {
        path: 'child-a', component: ChildAComponent
      },
      {
        path: 'child-b', component: ChildBComponent
      }
    ]
  },
  {
    path: 'page-2', component: Page2Component
  },
  {
    path: 'contact', loadChildren: () => import('./contact-page/contact-page.module').then((n) => n.ContactPageModule )
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(myRouter)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRouterModule {





}
