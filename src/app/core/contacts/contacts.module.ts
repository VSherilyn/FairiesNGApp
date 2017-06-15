import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CommonComponentsModule } from '../../common/components/common-components.module'

import { ContactsComponent } from './contacts.component'

/*export const routes = [
 {path: '', component: HomepageComponent}
 ];*/

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CommonComponentsModule
  ],
  declarations: [
    ContactsComponent
  ]
})

export class ContactsModule {
  //public static routes = routes;
}