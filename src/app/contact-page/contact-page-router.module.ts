import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './contact-page.component';

const myRouter: Routes = [
  {
    path: '', component: ContactPageComponent
  },
];


@NgModule({
  imports: [
    RouterModule.forChild(myRouter)
  ],
  exports: [
    RouterModule
  ]
})

export class ContactPageRouterModule {





}
