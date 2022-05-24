import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './contact-page.component';
import { ContactPageRouterModule } from './contact-page-router.module';



@NgModule({
  declarations: [
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    ContactPageRouterModule
  ]
})
export class ContactPageModule { }
